import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CalendarDays, Check, ChevronLeft, ClipboardList, CreditCard, LockKeyhole, Stethoscope } from 'lucide-react';
import { BookingResult, phone } from './BookingResult';
import { bookingApi, Calendar, formatDate, formatTime, loadCheckout, money, Summary, useAvailability } from './bookingUi';

const steps = [['Specialist', Stethoscope], ['Date & time', CalendarDays], ['Patient details', ClipboardList], ['Payment', CreditCard]];
const emptyPatient = { name: '', phone: '', email: '', type: 'new' };
const storageKey = 'meddleaff-booking-attempt';
const newToken = () => Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2, '0')).join('');

function storedToken() {
  try { return sessionStorage.getItem(storageKey); } catch { return null; }
}

function rememberToken(token) {
  try {
    if (token) sessionStorage.setItem(storageKey, token);
    else sessionStorage.removeItem(storageKey);
  } catch {
    // Checkout can continue in memory if browser storage is disabled.
  }
}

export function AppointmentForm({ onCatalog }) {
  const [step, setStep] = useState(0);
  const [slot, setSlot] = useState(null);
  const [patient, setPatient] = useState(emptyPatient);
  const [consent, setConsent] = useState(false);
  const [revision, setRevision] = useState(0);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState('');
  const active = useRef(null);
  const locked = useRef(false);
  const panel = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasResult = Boolean(result);
  const { data, loading, error: availabilityError } = useAvailability(revision);
  useEffect(() => { if (data) onCatalog(data); }, [data, onCatalog]);
  const doctor = data?.doctors?.[0];
  const slots = loading ? [] : data?.slots ?? [];

  useEffect(() => {
    const token = storedToken();
    if (!token) return;
    const controller = new AbortController();
    active.current = token;
    setResult({ state: 'unknown' });
    bookingApi('appointment-status', { token }, controller.signal)
      .then(setResult)
      .catch(error => { if (!controller.signal.aborted) setError(error.message); });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const showingStatus = hasResult || Boolean(active.current);
    const path = showingStatus ? '/bookapointment/status' : '/bookapointment';
    if (pathname !== path) navigate({ pathname: path, hash: showingStatus ? '#booking' : window.location.hash }, { replace: true });
    if (hasResult) document.getElementById('booking')?.scrollIntoView({ block: 'start' });
  }, [hasResult, navigate, pathname]);

  useEffect(() => {
    if (result?.state !== 'processing' || !active.current || busy) return;
    const token = active.current;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      bookingApi('appointment-status', { token }, controller.signal).then(setResult)
        .catch(() => { if (!controller.signal.aborted) setResult({ state: 'unknown' }); });
    }, 5000);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [result, busy]);

  function changeStep(target) {
    setStep(target);
    setError('');
    requestAnimationFrame(() => {
      panel.current?.focus({ preventScroll: true });
      panel.current?.scrollIntoView({ block: 'nearest' });
    });
  }

  async function checkStatus() {
    if (!active.current || locked.current) return;
    locked.current = true;
    setBusy('Checking payment status…');
    setError('');
    try {
      const status = await bookingApi('appointment-status', { token: active.current });
      setResult(status);
      return status;
    }
    catch (error) { setError(error.message); setResult({ state: 'unknown' }); }
    finally { locked.current = false; setBusy(''); }
  }

  async function editAppointment() {
    if (locked.current) return;
    if (!['unavailable', 'missing', 'priceChanged'].includes(result?.state)) {
      const status = await checkStatus();
      if (status?.state !== 'expired') {
        if (status?.canRetry) setError('This order can still be paid. You can edit the appointment after it expires.');
        return;
      }
    }
    active.current = null;
    rememberToken(null);
    setResult(null);
    setRevision(value => value + 1);
    setSlot(null);
    changeStep(doctor && result?.state !== 'priceChanged' ? 1 : 0);
  }

  async function pay(retry = false) {
    if (locked.current) return;
    locked.current = true;
    setBusy('Loading secure checkout…');
    setError('');
    function release() { locked.current = false; setBusy(''); }
    try {
      await loadCheckout();
      if (!active.current) {
        active.current = newToken();
        rememberToken(active.current);
      }
      const token = active.current;
      setBusy('Creating payment order…');
      const order = await bookingApi('create-order', retry ? { token, retry } : {
        token, doctor: doctor?.id, slot: slot?.id, quotedAmount: doctor?.fee_paise, patient, consent
      });
      if (order.state !== 'checkout') {
        setResult(order);
        release();
        return;
      }
      setBusy('Opening Razorpay…');
      let verifying = false;
      let failed = false;
      const checkout = new window.Razorpay({
        key: order.key, amount: order.amount, currency: 'INR', order_id: order.orderId,
        name: 'Meddleaff Healthcare', description: 'In-person consultation',
        image: new URL('/booking-logo.webp', window.location.origin).href,
        prefill: order.prefill, theme: { color: '#087b68' },
        retry: { enabled: false },
        handler: async (payment) => {
          verifying = true;
          setBusy('Verifying your payment…');
          try { setResult(await bookingApi('verify-payment', { ...payment, token })); }
          catch (error) { setError(error.message); setResult({ state: 'unknown' }); }
          finally { release(); }
        },
        modal: { ondismiss: () => {
          if (verifying) return;
          setResult({ state: failed ? 'failed' : 'cancelled', expiresAt: order.expiresAt, canRetry: true });
          release();
        } }
      });
      checkout.on('payment.failed', () => { failed = true; setBusy('Payment could not be completed. Close checkout to continue.'); });
      checkout.open();
    } catch (error) {
      if (active.current) setResult({ state: 'unknown' });
      setError(error.message);
      release();
    }
  }

  const unavailable = !loading && !data?.enabled;
  return <div className="bk-book-grid">
    {result ? <BookingResult result={result} busy={Boolean(busy)} onCheck={checkStatus} onRetry={() => pay(true)}
      onEdit={editAppointment} error={error} /> :
      <div className="bk-card bk-form">
        <ol className="bk-steps" aria-label="Booking progress">
          {steps.map(([title, Icon], index) => <li key={title} aria-current={step === index ? 'step' : undefined}
            className={index === step ? 'bk-current' : index < step ? 'bk-complete' : ''}>
            <button type="button" onClick={() => changeStep(index)} disabled={index >= step || Boolean(busy)}>
              <span>{index < step ? <Check size={18} /> : <Icon size={18} />}</span>{title}
            </button>
          </li>)}
        </ol>
        <form aria-busy={Boolean(busy)} onSubmit={event => { event.preventDefault(); if (step === 3) pay(); else changeStep(step + 1); }}>
          <div className="bk-form-body" tabIndex={-1} ref={panel}>
            <h3>{['Your specialist', 'Choose a date and time', 'Enter patient details', 'Review and pay'][step]}</h3>
            <p className="bk-muted">{[
              'Your in-person consultation is with Dr. Aaliya Amreen.',
              'Choose a date and a shared consultation window. The appointment desk can help with arrival questions.',
              'Enter the details of the person attending the appointment.',
              'Confirm your appointment details before opening Razorpay.'
            ][step]}</p>
            {step === 0 && <>
              {doctor && <div className="bk-selected">
                {doctor.image && <img src={doctor.image} width="60" height="60" alt="" />}
                <div><strong>{doctor.name}</strong><p>{[doctor.qualifications, doctor.experience].filter(Boolean).join(' · ') || doctor.department}</p></div>
                <strong>{money(doctor.fee_paise)}</strong>
              </div>}
              {loading && !data && <p className="bk-status" role="status">Checking online availability…</p>}
              {unavailable && <p className="bk-status">{availabilityError || 'Online payment is currently unavailable.'} <a href={'tel:' + phone}>Call Meddleaff to book.</a></p>}
            </>}
            {step === 1 && (loading ? <p role="status">Checking available times…</p> :
              slots.length ? <Calendar slots={slots} selected={slot} onSelect={setSlot} /> :
                <p className="bk-status">{availabilityError || 'There are no online slots for this doctor at the moment.'} <a href={'tel:' + phone}>Call Meddleaff.</a></p>)}
            {step === 2 && <div className="bk-fields">
              <label>Patient full name<input required minLength="2" maxLength="100" autoComplete="name" value={patient.name}
                onChange={event => setPatient({ ...patient, name: event.target.value })} /></label>
              <label>Indian mobile number<input type="tel" required pattern="(?:\+91)?[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number, with optional +91"
                autoComplete="tel" value={patient.phone} onChange={event => setPatient({ ...patient, phone: event.target.value })} /></label>
              <label>Email address<input type="email" required maxLength="254" autoComplete="email" value={patient.email}
                onChange={event => setPatient({ ...patient, email: event.target.value })} /></label>
              <label>Patient type<select value={patient.type} onChange={event => setPatient({ ...patient, type: event.target.value })}>
                <option value="new">New patient</option><option value="existing">Existing patient</option></select></label>
              {data?.policies && <label className="bk-consent"><input type="checkbox" required checked={consent} onChange={event => setConsent(event.target.checked)} />
                <span>I agree to the <a href={data.policies.privacy} target="_blank" rel="noreferrer">privacy policy</a>, <a href={data.policies.terms} target="_blank" rel="noreferrer">appointment terms</a> and <a href={data.policies.cancellation} target="_blank" rel="noreferrer">refund and cancellation policy</a>.</span></label>}
            </div>}
            {step === 3 && doctor && slot && <dl className="bk-result-details">
              {[
                ['Patient', patient.name], ['Contact', patient.phone + ' · ' + patient.email],
                ['Consultation', doctor.name + ' · ' + doctor.department],
                ['Date and time', formatDate(slot.starts_at) + ' · ' + formatTime(slot.starts_at) + ' – ' + formatTime(slot.ends_at) + ' IST'],
                ['Total payable', money(doctor.fee_paise)]
              ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>}
            {error && <p role="alert" className="bk-error">{error}</p>}
            {step === 3 && unavailable && <p className="bk-status">Online payment is currently unavailable. <a href={'tel:' + phone}>Call Meddleaff to book.</a></p>}
          </div>
          <div className="bk-form-actions">
            {step > 0 && <button type="button" className="bk-back" disabled={Boolean(busy)} onClick={() => changeStep(step - 1)}><ChevronLeft size={18} /> Back</button>}
            <button className="bk-btn" type="submit" disabled={Boolean(busy) || (step === 0 && !doctor) || (step === 1 && !slot) || (step === 3 && (!data?.enabled || !doctor || !slot || !consent))}>
              {step === 3 && <LockKeyhole size={17} />}{busy || (step === 3 ? 'Pay & Book Appointment' : 'Continue')}
            </button>
          </div>
        </form>
      </div>}
    <Summary doctor={doctor} slot={slot} />
    {busy && <span className="sr-only" role="status">{busy}</span>}
  </div>;
}

