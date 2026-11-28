import { BookingError, endpoint, findAppointment, orderPattern, paymentPattern, rawBody,
  razorpay, recordPayment, signed } from '../server/booking.js';

export const config = { api: { bodyParser: false } };

export default endpoint('POST', async req => {
  const raw = await rawBody(req, 128000);
  if (!signed(process.env.RAZORPAY_WEBHOOK_SECRET, raw, req.headers['x-razorpay-signature'])) {
    throw new BookingError(401, 'Invalid webhook signature.');
  }
  let event;
  try { event = JSON.parse(raw); } catch { throw new BookingError(400, 'Invalid event.'); }
  if (!['payment.captured', 'payment.failed', 'order.paid', 'refund.processed'].includes(event?.event)) {
    return { received: true };
  }
  const payload = event.payload;
  const paymentId = payload?.payment?.entity?.id ?? payload?.refund?.entity?.payment_id;
  if (typeof paymentId === 'string' && paymentPattern.test(paymentId)) {
    const payment = await razorpay().payments.fetch(paymentId);
    if (orderPattern.test(payment.order_id)) {
      const appointment = await findAppointment('order_id', payment.order_id);
      if (appointment) await recordPayment(appointment, payment);
    }
  } else if (event.event === 'order.paid' && orderPattern.test(payload?.order?.entity?.id)) {
    const orderId = payload.order.entity.id;
    const appointment = await findAppointment('order_id', orderId);
    if (appointment) {
      const { items } = await razorpay().orders.fetchPayments(orderId);
      for (const payment of items) await recordPayment(appointment, payment);
    }
  }
  return { received: true };
});
