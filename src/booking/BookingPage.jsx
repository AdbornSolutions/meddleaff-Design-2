import { useState } from 'react';
import { Activity, Baby, CalendarCheck, CalendarDays, ChevronDown, CreditCard, HeartHandshake,
  HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { directions, phone } from './BookingResult';
import { doctors } from '../data/doctors';
import { site } from '../data/site';
import { specialities } from '../data/specialities';
import { money } from './bookingUi';

const featureIcons = [HeartPulse, Baby, Activity, Stethoscope, HeartHandshake, Activity];
const consultationSteps = [
  [Stethoscope, 'Review your specialist', 'See who will be providing your in-person consultation.'],
  [CalendarDays, 'Select a date and time', 'Choose a morning, afternoon or evening window from Monday to Saturday.'],
  [CreditCard, 'Pay securely', 'Review your consultation fee and complete payment with Razorpay.'],
  [CalendarCheck, 'Get confirmation', 'View your verified appointment details and download a receipt.']
];
const faqs = [
  ['How do I book an appointment online?', 'Review the doctor, pick an available date and time window, enter the patient’s details and complete the consultation payment.'],
  ['Who can I book online?', 'Dr. Aaliya Amreen is currently available for online booking. Each time window is shared by multiple patients.'],
  ['How can I pay my consultation fee?', 'Razorpay Checkout displays the payment methods available for your transaction. Options may include UPI, cards and net banking.'],
  ['Is my online payment secure?', 'Razorpay hosts the payment form. Meddleaff verifies the payment with Razorpay before confirming an appointment.'],
  ['What happens if my payment fails?', 'Use the payment status check first. If checkout is still available for your reservation, you can retry on the same order.'],
  ['Can I cancel or reschedule my appointment?', 'Call Meddleaff with your appointment reference for help with cancellation or rescheduling. Review the policy linked at checkout before paying.'],
  ['What happens if the doctor is unavailable?', 'Check the calendar for another time or call the appointment desk for help finding an alternative.'],
  ['Will I receive an appointment receipt?', 'You can download or print a receipt from the confirmation screen after the appointment is verified.'],
  ['What if money was deducted but my appointment is unconfirmed?', 'Check your payment status before paying again. Contact Meddleaff with your Razorpay payment reference if you still need help.'],
  ['Can I book for a family member?', 'Yes. Use the name of the person attending and contact details the hospital can use for the appointment.']
];

function BookingHero() {
  return <section className="bk-hero">
    <div className="bk-container bk-brand">
      <a href="/" aria-label="Meddleaff Healthcare home"><img className="bk-logo" src="/booking-logo.webp" width="480" height="162" alt="Meddleaff Healthcare" /></a>
      <a href={'tel:' + phone}><Phone size={16} /> <span>{site.phones[0]}</span></a>
    </div>
    <div className="bk-container bk-hero-grid">
      <div className="bk-hero-copy">
        <p className="bk-kicker"><span /> Your health. Our priority.</p>
        <h1>Expert care begins<br className="bk-hero-break" /> with an <em>appointment.</em></h1>
        <p className="bk-lede">Book an in-person consultation with Dr. Aaliya Amreen at Meddleaff Healthcare in Nagpur, Monday to Saturday.</p>
        <div className="bk-actions">
          <a className="bk-btn" href="#booking"><CalendarDays size={19} /> Book Your Appointment</a>
          <a className="bk-btn bk-outline" href="#booking-specialities">Explore Specialities</a>
        </div>
        <ul className="bk-trust">
          <li><HeartHandshake /> Patient-centred care</li>
          <li><ShieldCheck /> Secure online booking</li>
        </ul>
      </div>
      <div className="bk-hero-photo">
        <img src="/booking-care.webp" alt="A clinician talking with a patient and her family in a consultation room" width="725" height="900" fetchpriority="high" />
        <div className="bk-photo-caption"><span><MapPin size={21} /></span><div><strong>Visit us in Nagpur</strong><p>Prayag Paradise, Friends Colony</p></div></div>
      </div>
    </div>
  </section>;
}

function BookingFooter({ policies }) {
  return <footer className="bk-footer"><div className="bk-container">
    <div className="bk-footer-grid">
      <div><a href="/"><img className="bk-logo" width="480" height="162" src="/booking-logo.webp" alt="Meddleaff Healthcare" /></a><p>In-person care for women, children and families in Nagpur.</p></div>
      <div><h2>Explore</h2><a href="/">Home</a><a href="/about">About Meddleaff</a><a href="/specialities">Specialities</a><a href="#booking-doctors">Our doctors</a></div>
      <div><h2>Appointments</h2><a href="#booking">Book an appointment</a><a href="#booking-faqs">FAQs</a><a href="/contact">Contact us</a><a href={'tel:' + phone}>Appointment support</a></div>
      <div><h2>Find us</h2><a href={directions}>{site.address}</a><a href={'tel:' + phone}>{site.phones[0]}</a><a href={'mailto:' + site.email}>{site.email}</a></div>
    </div>
    <div className="bk-footer-bottom"><p>© {site.legalName}</p>
      {policies && <div><a href={policies.privacy}>Privacy Policy</a> <a href={policies.terms}>Terms & Conditions</a> <a href={policies.cancellation}>Refund & Cancellation</a></div>}
    </div>
  </div></footer>;
}

export function BookingPage() {
  const [catalog, setCatalog] = useState(null);
  const attending = catalog?.doctors?.length ? catalog.doctors : doctors.map(doctor => ({
    ...doctor, id: '', department: doctor.speciality, department_slug: 'womens-health-reproductive-medicine',
    image: '/booking-doctor.webp'
  }));
  return <div className="bk-page">
    <a className="bk-skip" href="#main-booking">Skip to content</a>
    <main id="main-booking">
      <BookingHero />
      <section className="bk-section bk-booking" id="booking" aria-labelledby="booking-heading">
        <div className="bk-container">
          <div className="bk-section-title"><p className="bk-kicker"><span /> Online consultation booking</p>
            <h2 id="booking-heading">Book your appointment</h2>
            <p>Choose a morning, afternoon or evening consultation window, then securely complete your booking.</p>
          </div>
          <AppointmentForm onCatalog={setCatalog} />
        </div>
      </section>
      <section className="bk-section" id="booking-specialities">
        <div className="bk-container">
          <div className="bk-section-title"><p className="bk-kicker"><span /> Medical specialities</p>
            <h2>Comprehensive care for every stage of life</h2>
            <p>Find the department that can help you with your next visit.</p>
          </div>
          <div className="bk-speciality-grid">
            {specialities.map(({ slug, title, subtitle }, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return <article className="bk-speciality" key={slug}><span className="bk-feature-icon"><Icon size={24} /></span>
                <h3><a href={'/specialities/' + slug}>{title.replace(/^Department of /, '')}</a></h3><p>{subtitle}</p>
                {slug === 'womens-health-reproductive-medicine' && <a href="#booking" className="bk-link">Book consultation</a>}
              </article>;
            })}
          </div>
        </div>
      </section>
      <section className="bk-section bk-soft" id="booking-doctors">
        <div className="bk-container">
          <div className="bk-section-title"><p className="bk-kicker"><span /> Our doctors</p>
            <h2>Meet the experts behind your care</h2>
          </div>
          <div className="bk-doctor-grid">
            {attending.map(doctor => <article key={doctor.id || doctor.name} className="bk-doctor">
              {doctor.image ? <img src={doctor.image} width="250" height="310" alt={doctor.name} loading="lazy" /> :
                <div className="bk-doctor-placeholder"><Stethoscope size={36} /></div>}
              <div><p className="bk-kicker">{doctor.department}</p><h3>{doctor.name}</h3>
                {doctor.qualifications && <p>{doctor.qualifications}</p>}{doctor.experience && <p>{doctor.experience}</p>}
                {doctor.fee_paise && <p><strong>{money(doctor.fee_paise)}</strong> per consultation</p>}
                <a href="#booking" className="bk-btn bk-outline">Book appointment</a>
              </div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="bk-section" id="booking-process">
        <div className="bk-container">
          <div className="bk-section-title"><p className="bk-kicker"><span /> How it works</p><h2>Book your appointment in 4 easy steps</h2></div>
          <ol className="bk-process">{consultationSteps.map(([Icon, title, copy]) =>
            <li key={title}><span className="bk-feature-icon"><Icon size={24} /></span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </div>
      </section>
      <section className="bk-section bk-care">
        <div className="bk-container bk-care-grid">
          <div><p className="bk-kicker"><span /> Your visit</p><h2>Healthcare that puts you first</h2>
            <p>Plan your in-person consultation around a time that works for you. See the consultation fee before you pay and keep your appointment details handy for your visit.</p>
            <a className="bk-link" href="/patient-guide/prepare-for-your-visit">Prepare for your visit</a></div>
          <figure><img src="/booking-care.webp" loading="lazy" alt="A patient and a family member speaking with a clinician" width="725" height="900" /></figure>
        </div>
      </section>
      <section className="bk-section" id="booking-faqs">
        <div className="bk-container bk-faq">
          <div className="bk-section-title"><p className="bk-kicker"><span /> Appointment help</p><h2>Frequently asked questions</h2>
            <p>Need help with your visit? <a className="bk-link" href={'tel:' + phone}>Call Meddleaff</a>.</p></div>
          <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>
      <section className="bk-container bk-emergency" aria-labelledby="emergency-title">
        <span className="bk-feature-icon"><HeartPulse size={23} /></span><div><h2 id="emergency-title">Need immediate medical assistance?</h2>
          <p>Online booking is for scheduled consultations. For urgent care, seek immediate medical assistance.</p></div>
        <a href={'tel:' + phone} className="bk-btn bk-outline"><Phone size={16} /> Call Meddleaff</a>
      </section>
      <section className="bk-final"><div className="bk-container"><div><h2>Better health starts here.</h2><p>Schedule your consultation with Meddleaff Healthcare.</p></div>
        <a href="#booking" className="bk-btn"><CalendarDays size={18} /> Book Your Appointment</a></div></section>
    </main>
    <BookingFooter policies={catalog?.policies} />
    <div className="bk-mobile-cta"><a href={'tel:' + phone} className="bk-icon" aria-label="Call Meddleaff"><Phone size={21} /></a>
      <a href="#booking" className="bk-btn"><CalendarDays size={18} /> Book Appointment</a></div>
  </div>;
}
