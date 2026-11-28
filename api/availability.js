import { endpoint, policies } from '../server/booking.js';
import { bookingWindows, consultationFee, doctor } from '../server/bookingSchedule.js';

export default endpoint('GET', async () => {
  const links = policies();
  const fee = consultationFee();
  return {
    enabled: Boolean(links && fee && process.env.BOOKING_SCRIPT_URL && process.env.BOOKING_SCRIPT_SECRET),
    doctors: [{ ...doctor, fee_paise: fee }],
    policies: links,
    slots: bookingWindows()
  };
});
