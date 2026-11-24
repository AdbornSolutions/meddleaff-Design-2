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
