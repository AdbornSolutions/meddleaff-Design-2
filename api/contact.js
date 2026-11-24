/* eslint-env node */
import { site } from '../src/data/site.js';

const DEFAULT_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx3prNPlfldRXklmcmfqWF0wAoW436muIp5rFaFyqlScqWwGTXzvmpvczw_bsIj5fbvpQ/exec';

export default async function contact(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.headers['content-type']?.split(';')[0] !== 'application/json') {
    return res.status(415).json({ error: 'JSON required' });
  }

  const { kind, name, phone, email = '', message, consent, website } = req.body ?? {};
  if (website) return res.status(400).json({ error: 'Invalid submission' });

  const validEmail = typeof email === 'string' && email.length <= 160 &&
    (!email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  if ((kind !== 'appointment' && kind !== 'query') ||
      typeof name !== 'string' || name.trim().length < 2 || name.length > 100 ||
      typeof phone !== 'string' || !/^\+?[0-9\s()-]{7,18}$/.test(phone) ||
      phone.replace(/\D/g, '').length < 7 || !validEmail ||
      typeof message !== 'string' || message.trim().length < 10 || message.length > 2000 ||
      (kind === 'query' && consent !== true)) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const { APPS_SCRIPT_URL, APPS_SCRIPT_SECRET, RESEND_API_KEY, CONTACT_FROM_EMAIL } = process.env;
  if (APPS_SCRIPT_URL || APPS_SCRIPT_SECRET) {
    if (!APPS_SCRIPT_SECRET) {
      return res.status(503).json({ error: 'Lead storage is unavailable' });
    }

    try {
      const response = await fetch(APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(25000),
        body: JSON.stringify({ kind, name, phone, email, message, consent, secret: APPS_SCRIPT_SECRET }),
      });
      const result = response.ok ? await response.json() : null;
      if (result?.saved === true) {
        return res.status(200).json({ received: true, sent: result.sent === true });
      }
    } catch {
      return res.status(502).json({ error: 'Lead storage failed' });
    }
    return res.status(502).json({ error: 'Lead storage failed' });
  }
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    return res.status(503).json({ error: 'Email delivery is unavailable' });
  }

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [site.email],
        reply_to: email || undefined,
        subject: kind === 'query' ? 'New Meddleaff patient query' : 'New Meddleaff appointment request',
        text: [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email || 'Not provided'}`, '', message].join('\n'),
      }),
    });
    if (delivery.ok) return res.status(200).json({ received: true, sent: true });
  } catch {
    return res.status(502).json({ error: 'Email delivery failed' });
  }
  return res.status(502).json({ error: 'Email delivery failed' });
}
