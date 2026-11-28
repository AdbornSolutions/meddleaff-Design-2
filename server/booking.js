import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import Razorpay from 'razorpay';

export class BookingError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function endpoint(method, handler) {
  return async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method !== method) {
      res.setHeader('Allow', method);
      return res.status(405).json({ error: 'Method not allowed.' });
    }
    try {
      return res.status(200).json(await handler(req));
    } catch (error) {
      if (!(error instanceof BookingError)) console.error('Booking request failed', error.name);
      return res.status(error instanceof BookingError ? error.status : 503).json({
        error: error instanceof BookingError ? error.message : 'Booking is temporarily unavailable. Please try again shortly.'
      });
    }
  };
}

export async function rawBody(req, limit) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    const bytes = Buffer.from(chunk);
    size += bytes.length;
    if (size > limit) throw new BookingError(413, 'Request too large.');
    chunks.push(bytes);
  }
  return Buffer.concat(chunks);
}

export async function jsonBody(req) {
  if (req.headers['content-type']?.split(';')[0] !== 'application/json') {
    throw new BookingError(415, 'JSON is required.');
  }
  const raw = await rawBody(req, 8192);
  let data;
  try { data = JSON.parse(raw); } catch { throw new BookingError(400, 'Invalid JSON.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new BookingError(400, 'Invalid request.');
  return data;
}

export function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

export function tokenHash(token) {
  if (typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token)) {
    throw new BookingError(400, 'Invalid booking reference.');
  }
  return hash(token);
}

export function signed(secret, payload, signature) {
  if (!secret) throw new Error('Missing signature configuration');
  return typeof signature === 'string' && /^[a-f0-9]{64}$/i.test(signature) &&
    timingSafeEqual(createHmac('sha256', secret).update(payload).digest(), Buffer.from(signature, 'hex'));
}

export function policies() {
  const links = {
    privacy: process.env.BOOKING_PRIVACY_URL,
    terms: process.env.BOOKING_TERMS_URL,
    cancellation: process.env.BOOKING_CANCELLATION_URL
  };
  const valid = Object.values(links).every(value => {
    try { return new URL(value).protocol === 'https:'; } catch { return false; }
  });
  return valid && process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET &&
    process.env.RAZORPAY_WEBHOOK_SECRET ? links : null;
}

export function razorpay() {
  return new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
}

export async function sheet(action, data) {
  const { BOOKING_SCRIPT_URL: url, BOOKING_SCRIPT_SECRET: secret } = process.env;
  if (!url || !secret) throw new Error('Missing booking storage configuration');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bookingAction: action, secret, data }),
    signal: AbortSignal.timeout(12000)
  });
  if (!response.ok) throw new Error('Booking storage request failed');
  const result = await response.json();
  if (result.ok !== true) throw new Error('Booking storage rejected the request');
  return result.data;
}

export async function rate(req, action, limit, minutes = 1) {
  const ip = req.headers['x-vercel-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const interval = Math.floor(Date.now() / (60000 * minutes));
  const allowed = await sheet('rate', { key: interval + ':' + action + ':' + hash(String(ip)), limit, seconds: minutes * 60 });
  if (!allowed) throw new BookingError(429, 'Too many requests. Please try again shortly.');
}

export const orderPattern = /^order_[A-Za-z0-9]+$/;
export const paymentPattern = /^pay_[A-Za-z0-9]+$/;

export function patientDetails(patient) {
  const name = typeof patient?.name === 'string' ? patient.name.trim().replace(/\s+/gu, ' ') : '';
  const phone = typeof patient?.phone === 'string' ? patient.phone.replace(/[\s-]/g, '').replace(/^\+91/, '') : '';
  const email = typeof patient?.email === 'string' ? patient.email.trim().toLowerCase() : '';
  const type = patient?.type;
  if (name.length < 2 || name.length > 100 || !/^[\p{L}\p{M}.'’ -]+$/u.test(name) ||
      !/^[6-9]\d{9}$/.test(phone) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !['new', 'existing'].includes(type)) {
    throw new BookingError(400, 'Enter a valid patient name, Indian mobile number and email address.');
  }
  return { name, phone, email, type };
}

export async function findAppointment(column, value) {
  return sheet('find', { column, value });
}

export async function recordPayment(appointment, payment) {
  if (!paymentPattern.test(payment.id) || payment.order_id !== appointment.order_id ||
      payment.amount !== appointment.amount || payment.currency !== 'INR') {
    throw new BookingError(400, 'Payment details could not be verified.');
  }
  return sheet('recordPayment', {
    orderId: payment.order_id, payment: {
      id: payment.id, amount: payment.amount, status: payment.status,
      refunded_amount: payment.amount_refunded || 0
    }
  });
}

export async function bookingStatus(appointment, payments = []) {
  if (!appointment) return { state: 'missing' };
  const { id, status, slot, doctor, patient, amount, payment_id: paymentId, expires_at: expiresAt } = appointment;
  const final = payments.find(payment => payment.id === paymentId);
  const refund = final?.amount_refunded ?? final?.refunded_amount ?? 0;
  const expired = Date.parse(expiresAt) <= Date.now();
  let state = status;
  if (status === 'confirmed' && refund >= amount) state = 'refunded';
  else if (status === 'reconciliation' && refund >= amount) state = 'refunded';
  else if (status === 'pending' && payments.some(payment => ['authorized', 'captured'].includes(payment.status))) state = 'processing';
  else if (status === 'pending' && expired) state = 'expired';
  else if (status === 'pending' && payments.some(payment => payment.status === 'failed')) state = 'failed';
  return {
    state, expiresAt, canRetry: ['failed', 'pending'].includes(state) && Boolean(appointment.order_id),
    ...(['confirmed', 'reconciliation', 'refunded'].includes(state) && {
      reference: id, patientName: patient.name, doctor: doctor.name, department: doctor.department,
      startsAt: slot.starts_at, endsAt: slot.ends_at, amount, paymentId, refundedAmount: refund
    })
  };
}

export async function refreshStatus(appointment) {
  if (!appointment) return { state: 'missing' };
  let payments = [];
  if (appointment.status === 'pending' && appointment.order_id) {
    const collection = await razorpay().orders.fetchPayments(appointment.order_id);
    payments = collection.items ?? [];
    for (const payment of payments) appointment = await recordPayment(appointment, payment);
  } else if (appointment.payment_id) {
    payments = Object.values(appointment.payments || {});
  }
  return bookingStatus(appointment, payments);
}
