import { endpoint, findAppointment, jsonBody, rate, refreshStatus, tokenHash } from '../server/booking.js';

export default endpoint('POST', async req => {
  const { token } = await jsonBody(req);
  const digest = tokenHash(token);
  await rate(req, 'status', 60);
  return refreshStatus(await findAppointment('token_hash', digest));
});
