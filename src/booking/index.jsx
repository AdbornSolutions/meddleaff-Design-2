import '../index.css';
import './booking.css';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BookingPage } from './BookingPage';

const root = document.getElementById('booking-root');
const app = <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><BookingPage /></BrowserRouter>;
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
