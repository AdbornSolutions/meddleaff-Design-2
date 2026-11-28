import { useEffect, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Clock3, LockKeyhole, Stethoscope } from 'lucide-react';

export const ist = 'Asia/Kolkata';
export const dateKey = value => new Intl.DateTimeFormat('en-CA', { timeZone: ist }).format(new Date(value));
export const formatDate = value => new Intl.DateTimeFormat('en-IN', {
  timeZone: ist, weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'
}).format(new Date(value));
export const formatTime = value => new Intl.DateTimeFormat('en-IN', {
  timeZone: ist, hour: 'numeric', minute: '2-digit', hour12: true
}).format(new Date(value));
export const money = amount => amount == null ? '—' : new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', maximumFractionDigits: amount % 100 ? 2 : 0
}).format(amount / 100);

const firstOfMonth = date => new Date(date.slice(0, 7) + '-01T00:00:00Z');
const shiftMonth = (month, step) => new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + step, 1));
const dateAt = (month, day) => new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), day)).toISOString().slice(0, 10);
const periods = [
  ['Morning Slots', hour => hour < 12],
  ['Afternoon Slots', hour => hour >= 12 && hour < 17],
  ['Evening Slots', hour => hour >= 17]
];
const getHour = value => Number(new Intl.DateTimeFormat('en-GB', { timeZone: ist, hour: '2-digit', hourCycle: 'h23' }).format(new Date(value)));

export function Calendar({ slots, selected, onSelect }) {
  const today = dateKey(Date.now());
  const firstDate = selected ? dateKey(selected.starts_at) : slots.length ? dateKey(slots[0].starts_at) : today;
  const [date, setDate] = useState(firstDate);
  const [month, setMonth] = useState(() => firstOfMonth(firstDate));
  const available = new Set(slots.map(slot => dateKey(slot.starts_at)));
  const max = firstOfMonth(dateKey(Date.now() + 60 * 86400000));
  const dayCount = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
  const daySlots = slots.filter(slot => dateKey(slot.starts_at) === date);
  return <>
    <div className="bk-calendar">
      <div className="bk-calendar-head">
        <button type="button" className="bk-icon" aria-label="Previous month" disabled={month <= firstOfMonth(today)} onClick={() => setMonth(shiftMonth(month, -1))}><ChevronLeft /></button>
        <strong aria-live="polite">{new Intl.DateTimeFormat('en-IN', { timeZone: 'UTC', month: 'long', year: 'numeric' }).format(month)}</strong>
        <button type="button" className="bk-icon" aria-label="Next month" disabled={month >= max} onClick={() => setMonth(shiftMonth(month, 1))}><ChevronRight /></button>
      </div>
      <div className="bk-calendar-grid">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => <span key={day}>{day}</span>)}
        {Array.from({ length: month.getUTCDay() }, (_, index) => <span key={'blank' + index} />)}
        {Array.from({ length: dayCount }, (_, index) => {
          const key = dateAt(month, index + 1);
          return <button type="button" key={key} disabled={key < today || !available.has(key)} aria-pressed={key === date}
            aria-label={formatDate(key + 'T00:00:00Z')} onClick={() => { setDate(key); onSelect(null); }}>{index + 1}</button>;
        })}
      </div>
    </div>
    <p className="bk-muted bk-small">Appointment times are shown in IST.</p>
    {!daySlots.length && <p className="bk-muted">Choose an available date to see consultation times.</p>}
    {periods.map(([label, check]) => {
      const entries = daySlots.filter(slot => check(getHour(slot.starts_at)));
      return entries.length > 0 && <fieldset className="bk-slots" key={label}><legend>{label}</legend><div>
        {entries.map(slot => <button type="button" key={slot.id} aria-pressed={selected?.id === slot.id} onClick={() => onSelect(slot)}>{formatTime(slot.starts_at)} – {formatTime(slot.ends_at)}</button>)}
      </div></fieldset>;
    })}
  </>;
}

export function Summary({ doctor, slot }) {
  const [open, setOpen] = useState(false);
  return <aside className="bk-summary">
    <h3 className="bk-summary-desktop">Appointment summary</h3>
    <button type="button" className="bk-summary-toggle" aria-controls="booking-summary-content" aria-expanded={open} onClick={() => setOpen(!open)}>
      <span>Appointment summary</span><span>{money(doctor?.fee_paise)} {open ? '−' : '+'}</span>
    </button>
    <div id="booking-summary-content" className={open ? 'bk-summary-open' : 'bk-summary-content'}>
      <div className="bk-summary-doctor">
        {doctor?.image ? <img src={doctor.image} width="54" height="54" alt="" /> : <span><Stethoscope size={22} /></span>}
        <div><strong>{doctor?.name || 'Select your specialist'}</strong><p>{doctor?.department || 'Choose a department and doctor'}</p></div>
      </div>
      <dl className="bk-summary-details">
        <div><dt><Stethoscope /> Consultation</dt><dd>In person</dd></div>
        <div><dt><CalendarDays /> Date</dt><dd>{slot ? formatDate(slot.starts_at) : '—'}</dd></div>
        <div><dt><Clock3 /> Time window</dt><dd>{slot ? formatTime(slot.starts_at) + ' – ' + formatTime(slot.ends_at) + ' IST' : '—'}</dd></div>
      </dl>
      <dl className="bk-summary-fees">
        <div><dt>Consultation fee</dt><dd>{money(doctor?.fee_paise)}</dd></div>
        <div><dt>Total payable</dt><dd>{money(doctor?.fee_paise)}</dd></div>
      </dl>
      <div className="bk-payment-note"><LockKeyhole size={16} /><div><strong>Payment powered by Razorpay</strong><p>UPI · Cards · Net banking</p></div></div>
    </div>
  </aside>;
}

let checkoutScript;
export function loadCheckout() {
  if (window.Razorpay) return Promise.resolve();
  if (!checkoutScript) {
    checkoutScript = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      const fail = () => {
        clearTimeout(timeout);
        script.remove();
        reject(new Error('Checkout could not load. Check your connection and try again.'));
      };
      const timeout = setTimeout(fail, 12000);
      script.onload = () => {
        if (!window.Razorpay) return fail();
        clearTimeout(timeout);
        resolve();
      };
      script.onerror = fail;
      document.head.append(script);
    }).catch(error => { checkoutScript = undefined; throw error; });
  }
  return checkoutScript;
}

export async function bookingApi(route, body, signal) {
  const timeout = AbortSignal.timeout(25000);
  const requestSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const response = await fetch('/api/' + route, body === undefined ? { signal: requestSignal } : {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: requestSignal
  });
  const output = await response.json().catch(() => null);
  if (!response.ok || !output) throw new Error(output?.error || 'Online booking is temporarily unavailable.');
  return output;
}

export function useAvailability(revision) {
  const [result, setResult] = useState({ revision: null, data: null, error: '' });
  useEffect(() => {
    const controller = new AbortController();
    bookingApi('availability', undefined, controller.signal)
      .then(data => setResult({ revision, data, error: '' }))
      .catch(error => {
        if (!controller.signal.aborted) setResult({ revision, data: null, error: error.message });
      });
    return () => controller.abort();
  }, [revision]);
  return {
    data: result.data,
    error: result.revision === revision ? result.error : '',
    loading: result.revision !== revision
  };
}
