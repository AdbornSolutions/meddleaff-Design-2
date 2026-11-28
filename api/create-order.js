import { BookingError, endpoint, findAppointment, jsonBody, patientDetails, policies, rate,
  razorpay, refreshStatus, sheet, tokenHash } from '../server/booking.js';
import { bookingWindows, consultationFee, doctor } from '../server/bookingSchedule.js';

export default endpoint('POST', async req => {
  const links = policies();
  const fee = consultationFee();
  if (!links || !fee) throw new BookingError(503, 'Online payment is currently unavailable.');
  const input = await jsonBody(req);
  const token = tokenHash(input.token);
  await rate(req, 'order', 15, 10);
  let appointment;
  if (input.retry === true) {
    appointment = await findAppointment('token_hash', token);
    if (!appointment) return { state: 'missing' };
  } else {
    if (typeof input.slot !== 'string' || input.doctor !== doctor.id || input.consent !== true) {
      throw new BookingError(400, 'Select an appointment window and accept the booking policies.');
    }
    const slot = bookingWindows().find(window => window.id === input.slot);
    if (!slot) return { state: 'unavailable' };
    if (input.quotedAmount !== fee) return { state: 'priceChanged' };
    appointment = await sheet('reserve', {
      token, patient: patientDetails(input.patient), amount: fee, slot,
      doctor: { name: doctor.name, department: doctor.department },
      expires_at: new Date(Math.min(Date.now() + 720000, Date.parse(slot.starts_at))).toISOString(),
      consent: { ...links, acceptedAt: new Date().toISOString() }
    });
    if (appointment.conflict) return { state: 'unavailable' };
  }
  if (!appointment.fresh) {
    const status = await refreshStatus(appointment);
    if (!status.canRetry) return status;
  }
  let orderId = appointment.order_id;
  if (appointment.fresh) {
    const order = await razorpay().orders.create({ amount: appointment.amount, currency: 'INR', receipt: appointment.id });
    orderId = order.id;
    await sheet('attachOrder', { token, orderId });
  }
  if (Date.parse(appointment.expires_at) <= Date.now()) return { state: 'expired' };
  const { name, phone, email } = appointment.patient;
  return { state: 'checkout', orderId, key: process.env.RAZORPAY_KEY_ID, amount: appointment.amount,
    expiresAt: appointment.expires_at, prefill: { name, email, contact: '+91' + phone } };
});
