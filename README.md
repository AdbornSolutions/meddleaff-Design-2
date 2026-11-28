# Meddleaff Healthcare Website

Production-focused React and Tailwind website for Meddleaff Healthcare Pvt Ltd.

## Local development

```bash
npm install
npm run dev
```

To send form submissions locally, set `APPS_SCRIPT_SECRET` in `.env.local` to the Apps Script `CONTACT_SECRET` value and restart Vite. The dev server and `npm run preview` handle `/api/contact` locally.

## Contact form configuration

Both forms post to `/api/contact` on Vercel. Apps Script saves leads to the `Website Leads` tab and emails `meddleaff@gmail.com`.

1. Open the team's Google Sheet, choose **Extensions → Apps Script**, and paste [Code.gs](apps-script/Code.gs).
2. In Apps Script **Project Settings → Script properties**, set `SPREADSHEET_ID` to the value between `/d/` and `/edit` in the Sheet URL. Set `CONTACT_SECRET` to a long random value.
3. Choose **Deploy → New deployment → Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then authorize Sheets and Mail access. Copy the `/exec` URL. Keep the spreadsheet private and share it only with the staff who handle enquiries.
4. In Vercel's project environment settings, set `APPS_SCRIPT_SECRET` to the Apps Script `CONTACT_SECRET` value. The backend already has the Meddleaff `/exec` URL. Set `APPS_SCRIPT_URL` only to override it if the URL changes. If `VITE_CONTACT_ENDPOINT` was set, remove it so the forms use `/api/contact`. Redeploy.
5. Submit a test enquiry and check the row and the Gmail inbox. A new `Website Leads` tab uses `Full name`, `Phone number`, `Email (optional)`, and `Message / reason for visit`. Existing tabs with the original eight headers keep that layout. Check Apps Script **Executions** if a lead is saved and the email is missing.

For email-only delivery on Vercel, configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` with a verified Resend sender and leave both Apps Script variables unset.

For static hosting, set `VITE_CONTACT_ENDPOINT` at build time to the HTTPS URL of your own backend. Configure that backend to deliver to `meddleaff@gmail.com` and accept JSON `POST` requests with `kind`, `name`, `phone`, `email`, `message`, and `consent`.

## Production build

```bash
npm run lint
npm run build
```

Deploy the generated `dist/` directory as static files. A Node/PM2 process is not required for this frontend.

## Nginx routing

Add the SPA fallback only inside this website's own `server` block so other domains on the VPS are unaffected:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Serve `dist/` as the site root, enable HTTPS, and cache hashed files under `/assets/` with a long immutable cache policy. Do not cache `index.html` permanently.

## Online appointment booking

The booking landing page is at `/bookapointment`. Vite builds a separate pre-rendered HTML entry for the page, and React hydrates the booking form. Vercel routes `/bookapointment/status` to the same entry with a noindex header. The booking APIs live under `/api`.

### Configure the doctor schedule and private booking sheet

The page automatically selects Dr. Aaliya Amreen. The shared consultation windows are Monday through Saturday, 9 am–12 pm, 12–4 pm, and 4–8 pm IST. Each window accepts multiple appointments. Sunday and windows that have already started are excluded. Edit [bookingSchedule.js](server/bookingSchedule.js) to change the weekly schedule. Set the approved fee in paise with `BOOKING_FEE_PAISE` once.

1. Create a private Google spreadsheet for paid bookings. Share it only with staff authorized to see booking data.
2. Update the existing Apps Script project with [Code.gs](apps-script/Code.gs). Leave the existing contact form properties in place. Add `BOOKING_SPREADSHEET_ID` for the private sheet and a strong random `BOOKING_SECRET` in **Project Settings → Script properties**.
3. Deploy a new version of the existing web app, with **Execute as → Me** and **Who has access → Anyone**. Set its `/exec` URL in Vercel as `BOOKING_SCRIPT_URL` and the matching secret as `BOOKING_SCRIPT_SECRET`. The script creates the **Appointments** tab when the first checkout starts.
4. Set public HTTPS links for the approved privacy, appointment terms, and refund and cancellation policies. See [.env.example](.env.example). Publish the approved fee and confirm the time window boundaries before accepting payments.

### Configure Razorpay Test Mode and Vercel

1. Generate Test Mode API keys in Razorpay Dashboard and enable automatic capture.
2. Connect the GitHub repository to Vercel with the Vite preset. Set the server variables in [.env.example](.env.example) for the deployment environment and redeploy.
3. Create a Razorpay webhook at `https://<deployment-host>/api/razorpay-webhook` with the same value as `RAZORPAY_WEBHOOK_SECRET`. Subscribe to `payment.captured`, `payment.failed`, `order.paid`, and `refund.processed`. Razorpay must be able to reach the endpoint.
4. In Test Mode, book two different patients into the same time window. Confirm both captured payments appear in the private sheet. Test a failed payment, a retry, dismissed checkout, browser closure, invalid signatures, webhook retries and refunds. After a successful test, configure the production deployment with Live Mode keys and its own webhook settings.

Use `npm run dev` for local development, `npm run build` to build the prerendered page, or `npx vercel dev` to use Vercel's runtime. Without credentials, the doctor and time windows remain visible and the page offers a phone booking link.

A checkout can be retried for up to 12 minutes or until the selected window starts, whichever comes first. A captured payment reported after checkout expiry goes to `reconciliation`. Hospital staff can look it up in the sheet by Razorpay order or payment reference and follow the approved rescheduling or refund policy. Patient records belong in the private sheet. Confirmation and the receipt are displayed on the web page.

- [Razorpay Standard Checkout](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)
- [Razorpay webhook validation](https://razorpay.com/docs/webhooks/validate-test/)