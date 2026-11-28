import { BookingError, endpoint, findAppointment, jsonBody, paymentPattern, rate,
  razorpay, recordPayment, refreshStatus, signed, tokenHash } from '../server/booking.js';

export default endpoint('POST', async req => {
  const input = await jsonBody(req);
  const token = tokenHash(input.token);
  await rate(req, 'verify', 30);
  const appointment = await findAppointment('token_hash', token);
  if (!appointment?.order_id || input.razorpay_order_id !== appointment.order_id ||
      typeof input.razorpay_payment_id !== 'string' || !paymentPattern.test(input.razorpay_payment_id) ||
      !signed(process.env.RAZORPAY_KEY_SECRET, appointment.order_id + '|' + input.razorpay_payment_id, input.razorpay_signature)) {
    throw new BookingError(400, 'Payment could not be verified.');
  }
  const updated = await recordPayment(appointment, await razorpay().payments.fetch(input.razorpay_payment_id));
  return refreshStatus(updated);
});
