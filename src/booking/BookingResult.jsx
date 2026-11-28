import { CalendarPlus, CheckCircle2, CircleAlert, Clock3, Download, MapPin, Printer } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { formatDate, formatTime, money } from './bookingUi';

export const phone = '+91' + site.phones[0];
export const directions = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(site.name + ', ' + site.address);
function download(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function icsDate(date) {
  return new Date(date).toISOString().replace(/[-:]|\.\d{3}/g, '');
}

function icsText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

export function BookingResult({ result, busy, onCheck, onRetry, onEdit, error }) {
  const reduce = useReducedMotion();
  const { state, expiresAt } = result;
  const confirmed = state === 'confirmed';
  const titles = {
    confirmed: 'Your Appointment Is Confirmed!',
    refunded: 'Your payment was refunded',
    reconciliation: 'Your payment needs review',
    expired: 'Your reservation has expired',
    priceChanged: 'The consultation fee has changed',
    unavailable: 'This time is no longer available',
    failed: 'Payment Could Not Be Completed',
    cancelled: 'Checkout was closed',
    pending: 'Payment verification pending',
    processing: 'Payment is being verified',
    unknown: 'Payment verification pending',
    missing: 'Booking reference unavailable'
  };
  const messages = {
    confirmed: 'Thank you for choosing Meddleaff Healthcare. We look forward to caring for you.',
    refunded: 'Razorpay has recorded a full refund. Call Meddleaff if you need help with your visit.',
    reconciliation: 'Your paid booking needs a manual review. Contact Meddleaff with your payment reference.',
    expired: 'This checkout expired. Return to the booking form to choose a time window.',
    priceChanged: 'Return to the booking form to review the current fee before paying.',
    unavailable: 'Choose another consultation time.',
    failed: 'We couldn’t complete your payment. Please check your payment method and try again.',
    cancelled: 'You can check your payment status and reopen checkout while the order is active.',
    pending: 'Check the status before trying another payment.',
    processing: 'Keep this page open or check again shortly. We’ll verify the payment directly with Razorpay.',
    unknown: 'We’re waiting for a reliable payment status. Check again before making another payment.',
    missing: 'We couldn’t find a reservation for this attempt. Check again or return to your appointment details.'
  };
  const details = result.reference ? [
    ['Appointment reference', result.reference], ['Patient', result.patientName],
    ['Doctor', result.doctor], ['Department', result.department],
    ['Date', formatDate(result.startsAt)], ['Time window', formatTime(result.startsAt) + ' – ' + formatTime(result.endsAt) + ' IST'],
    ['Consultation amount', money(result.amount)],
    ['Payment reference', result.paymentId || '—'],
    ['Payment status', state === 'refunded' ? 'Refunded' : result.refundedAmount ? 'Partially refunded' : 'Captured'],
    ...(result.refundedAmount ? [['Refunded amount', money(result.refundedAmount)]] : []),
    ['Location', site.address]
  ] : [];
  const receipt = () => download('Meddleaff-appointment-' + result.reference + '.txt',
    [site.name, 'Appointment receipt', '', ...details.map(([label, value]) => label + ' — ' + value)].join('\r\n'), 'text/plain;charset=utf-8');
  const calendar = () => download('meddleaff-appointment.ics', [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Meddleaff Healthcare//Appointments//EN',
    'CALSCALE:GREGORIAN', 'BEGIN:VEVENT', 'UID:' + result.reference + '@meddleaff.com',
    'DTSTAMP:' + icsDate(Date.now()), 'DTSTART:' + icsDate(result.startsAt), 'DTEND:' + icsDate(result.endsAt),
    'SUMMARY:' + icsText('Consultation with ' + result.doctor),
    'LOCATION:' + icsText(site.address), 'END:VEVENT', 'END:VCALENDAR', ''
  ].join('\r\n'), 'text/calendar;charset=utf-8');
  return <article className="bk-card bk-result" aria-live="polite">
    {confirmed ? <motion.div className="bk-result-icon" initial={reduce ? false : { scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}><CheckCircle2 size={29} /></motion.div> :
      <div className="bk-result-icon bk-result-status">{['pending','processing','unknown'].includes(state) ? <Clock3 size={27} /> : <CircleAlert size={27} />}</div>}
    <h3>{titles[state] || titles.unknown}</h3><p>{messages[state] || messages.unknown}</p>
    {expiresAt && ['pending','cancelled','failed'].includes(state) && <p className="bk-small">You can retry this checkout until {formatTime(expiresAt)} IST.</p>}
    {error && <p role="alert" className="bk-error">{error}</p>}
    {details.length > 0 && <dl className="bk-result-details">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
    <div className="bk-actions">
      {confirmed ? <>
        <button type="button" onClick={receipt} className="bk-btn"><Download size={16} /> Download receipt</button>
        <button type="button" onClick={() => window.print()} className="bk-btn bk-outline"><Printer size={16} /> Print details</button>
        <button type="button" onClick={calendar} className="bk-btn bk-outline"><CalendarPlus size={16} /> Add to calendar</button>
        <a href={directions} className="bk-btn bk-outline"><MapPin size={16} /> Get directions</a>
        <a href="/" className="bk-link">Return to homepage</a>
      </> : <>
        {result.canRetry && <button className="bk-btn" disabled={busy} onClick={onRetry}>Retry payment</button>}
        {!['unavailable','priceChanged','refunded'].includes(state) && <button className="bk-btn bk-outline" disabled={busy} onClick={onCheck}>Check payment status</button>}
        {['expired','unavailable','priceChanged','missing','failed','cancelled','pending'].includes(state) &&
          <button className="bk-btn bk-outline" disabled={busy} onClick={onEdit}>Edit appointment</button>}
        <a className="bk-link" href={'tel:' + phone}>Contact Meddleaff</a>
      </>}
    </div>
  </article>;
}
