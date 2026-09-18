# Meddleaff Healthcare Website

Production-focused React and Tailwind website for Meddleaff Healthcare Pvt Ltd.

## Local development

```bash
npm install
npm run dev
```

## Contact form configuration

Copy `.env.example` to `.env.production` and set the HTTPS endpoint that accepts appointment and patient-query submissions:

```env
VITE_CONTACT_ENDPOINT=https://api.your-domain.com/contact
```

The endpoint must accept JSON `POST` requests with `kind`, `name`, `phone`, `email`, `message`, and `consent`. Apply server-side validation, rate limiting, spam protection, logging, and an origin allowlist; frontend validation is not a security boundary.

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
