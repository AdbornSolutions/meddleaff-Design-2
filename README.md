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
