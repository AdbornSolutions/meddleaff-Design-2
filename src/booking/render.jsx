import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { BookingPage } from './BookingPage';

export function renderBooking() {
  return renderToString(<StaticRouter location="/bookapointment"><BookingPage /></StaticRouter>);
}
