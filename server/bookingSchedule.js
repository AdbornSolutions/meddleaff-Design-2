export const doctor = {
  id: 'aaliya-amreen',
  name: 'Dr. Aaliya Amreen',
  department: 'Obstetrics & Gynaecology',
  department_slug: 'womens-health-reproductive-medicine',
  qualifications: 'Consultant Obstetrician & Gynaecologist',
  image: '/booking-doctor.webp'
};

// IST windows shared by all patients. Sundays are excluded.
const windows = [
  ['morning', '09:00', '12:00'],
  ['afternoon', '12:00', '16:00'],
  ['evening', '16:00', '20:00']
];
const dayMs = 86400000;
const istOffset = 330 * 60000;

export function consultationFee() {
  const amount = Number(process.env.BOOKING_FEE_PAISE);
  return Number.isSafeInteger(amount) && amount >= 100 && amount <= 2147483647 ? amount : null;
}

export function bookingWindows(now = Date.now()) {
  const today = Math.floor((now + istOffset) / dayMs) * dayMs;
  return Array.from({ length: 60 }, (_, index) => new Date(today + index * dayMs))
    .filter(day => day.getUTCDay() !== 0)
    .flatMap(day => {
      const date = day.toISOString().slice(0, 10);
      return windows.map(([name, start, end]) => ({
        id: date + '-' + name,
        starts_at: new Date(date + 'T' + start + ':00+05:30').toISOString(),
        ends_at: new Date(date + 'T' + end + ':00+05:30').toISOString()
      }));
    })
    .filter(slot => Date.parse(slot.starts_at) > now + 60000);
}
