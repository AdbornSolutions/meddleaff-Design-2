function doPost(e) {
  const properties = PropertiesService.getScriptProperties();
  const secret = properties.getProperty('CONTACT_SECRET');
  const spreadsheetId = properties.getProperty('SPREADSHEET_ID');
  let lead;
  try {
    lead = JSON.parse(e.postData.contents);
  } catch {
    return reply({ saved: false });
  }
  if (lead?.bookingAction) return handleBooking(lead, properties);
  if (!secret || !spreadsheetId || lead?.secret !== secret) return reply({ saved: false });

  const { kind, name, phone, email, message, consent } = lead;
  const lock = LockService.getScriptLock();
  let sheet;
  let row;
  let hasEmailStatus = false;
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.openById(spreadsheetId);
    sheet = book.getSheetByName('Website Leads') || book.insertSheet('Website Leads');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Full name', 'Phone number', 'Email (optional)', 'Message / reason for visit']);
    } else {
      hasEmailStatus = sheet.getRange(1, 1).getValue() === 'Received at' &&
        sheet.getRange(1, 8).getValue() === 'Email status';
    }
    row = sheet.getLastRow() + 1;
    const fields = [name, phone, email, message].map(value => value ? "'" + value : '');
    const values = hasEmailStatus
      ? [new Date(), kind, ...fields, consent === true, 'Pending']
      : fields;
    sheet.getRange(row, 1, 1, values.length).setValues([values]);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  let sent = false;
  try {
    MailApp.sendEmail({
      to: 'meddleaff@gmail.com',
      ...(email ? { replyTo: email } : {}),
      subject: kind === 'query' ? 'New Meddleaff patient query' : 'New Meddleaff appointment request',
      body: [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email || 'Not provided'}`, '', message].join('\n'),
    });
    sent = true;
  } catch {
    console.error('Website lead email failed');
  }

  if (hasEmailStatus) sheet.getRange(row, 8).setValue(sent ? 'Sent' : 'Failed');
  return reply({ saved: true, sent });
}

function reply(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function handleBooking(request, properties) {
  const secret = properties.getProperty('BOOKING_SECRET');
  const spreadsheetId = properties.getProperty('BOOKING_SPREADSHEET_ID');
  if (!secret || !spreadsheetId || request.secret !== secret || !request.data) return reply({ ok: false });

  const { bookingAction: action, data } = request;
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (action === 'rate') {
      const cache = CacheService.getScriptCache();
      const count = Number(cache.get(data.key) || 0) + 1;
      cache.put(data.key, String(count), data.seconds);
      return reply({ ok: true, data: count <= data.limit });
    }
    const book = SpreadsheetApp.openById(spreadsheetId);
    const sheet = book.getSheetByName('Appointments') || book.insertSheet('Appointments');
    if (!sheet.getLastRow()) {
      sheet.appendRow(['Token hash', 'Razorpay order', 'Booking reference', 'Window start (UTC)', 'Status', 'Payment reference', 'Private booking data']);
      sheet.setFrozenRows(1);
    }
    const columns = { token_hash: 1, order_id: 2, id: 3 };
    if (action === 'find') {
      if (!Object.prototype.hasOwnProperty.call(columns, data.column)) return reply({ ok: false });
      return reply({ ok: true, data: readBookingRow(sheet, columns[data.column], data.value)?.booking || null });
    }
    if (action === 'reserve') {
      const existing = readBookingRow(sheet, 1, data.token)?.booking;
      if (existing) {
        if (existing.slot.id !== data.slot.id || JSON.stringify(existing.patient) !== JSON.stringify(data.patient)) {
          return reply({ ok: true, data: { conflict: true } });
        }
        return reply({ ok: true, data: { ...existing, fresh: false } });
      }
      const booking = {
        id: Utilities.getUuid(), token_hash: data.token, patient: data.patient, doctor: data.doctor, slot: data.slot,
        amount: data.amount, expires_at: data.expires_at, consent: data.consent, created_at: new Date().toISOString(),
        order_id: null, payment_id: null, status: 'pending', payments: {}
      };
      saveBookingRow(sheet, sheet.getLastRow() + 1, booking);
      return reply({ ok: true, data: { ...booking, fresh: true } });
    }
    if (action === 'attachOrder') {
      const existing = readBookingRow(sheet, 1, data.token);
      const attached = readBookingRow(sheet, 2, data.orderId);
      if (!existing || attached && attached.row !== existing.row ||
          existing.booking.order_id && existing.booking.order_id !== data.orderId) return reply({ ok: false });
      existing.booking.order_id = data.orderId;
      saveBookingRow(sheet, existing.row, existing.booking);
      return reply({ ok: true, data: true });
    }
    if (action === 'recordPayment') {
      const entry = readBookingRow(sheet, 2, data.orderId);
      if (!entry || entry.booking.amount !== data.payment.amount) return reply({ ok: false });
      const { booking } = entry;
      const payment = data.payment;
      const previous = booking.payments[payment.id];
      const priority = { created: 0, failed: 1, authorized: 2, captured: 3, refunded: 4 };
      const status = previous && priority[previous.status] > priority[payment.status] ? previous.status : payment.status;
      const refunded = Math.max(previous?.refunded_amount || 0, payment.refunded_amount);
      booking.payments[payment.id] = { ...payment, status, refunded_amount: refunded };
      if (booking.status === 'pending' && ['captured', 'refunded'].includes(status)) {
        booking.payment_id = payment.id;
        booking.status = status === 'captured' && refunded === 0 && Date.parse(booking.expires_at) > Date.now()
          ? 'confirmed' : 'reconciliation';
      }
      saveBookingRow(sheet, entry.row, booking);
      return reply({ ok: true, data: booking });
    }
    return reply({ ok: false });
  } finally {
    lock.releaseLock();
  }
}

function readBookingRow(sheet, column, value) {
  const rows = sheet.getLastRow() - 1;
  if (rows < 1 || typeof value !== 'string' || !value) return null;
  const match = sheet.getRange(2, column, rows, 1).createTextFinder(value).matchEntireCell(true).findNext();
  if (!match) return null;
  const row = match.getRow();
  return { row, booking: JSON.parse(sheet.getRange(row, 7).getValue()) };
}

function saveBookingRow(sheet, row, booking) {
  sheet.getRange(row, 1, 1, 7).setValues([[
    booking.token_hash, booking.order_id || '', booking.id, booking.slot.starts_at,
    booking.status, booking.payment_id || '', JSON.stringify(booking)
  ]]);
  SpreadsheetApp.flush();
}
