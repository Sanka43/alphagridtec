# Alphagrid Technology

Black & white, animation-led multi-page site for **Alphagrid Technology** — a full digital agency.

## Stack

- [Astro](https://astro.build) (static multi-page HTML)
- GSAP + ScrollTrigger
- PHP contact handler for Namecheap / XAMPP

## Local development

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

For the contact form with PHP locally, build and serve under XAMPP:

```bash
npm run build
```

Copy/serve `dist/` from `http://localhost/alphagridtec/dist/` (or point a vhost at `dist/`). Ensure Apache + PHP are running so `/contact.php` works.

## Build & Namecheap deploy

### Manual deploy

1. Update placeholders:
   - Email / phone in `src/components/Footer.astro` and `src/pages/contact.astro`
   - `CONTACT_TO` and `CONTACT_FROM` in `public/contact.php`
   - Work case studies in `src/pages/work.astro`
2. Build:

```bash
npm run build
```

3. Upload **everything inside** `dist/` to Namecheap `public_html` via FTP/cPanel File Manager.
4. Confirm `contact.php` is at the site root (Astro copies `public/` into `dist/`).
5. On Namecheap, create an email like `noreply@yourdomain.com` and set it as `CONTACT_FROM`. Test the contact form.

### CI/CD (GitHub Actions)

Pushing to `main` builds the site and deploys `dist/` to Namecheap over FTP.

Add these **repository secrets** (Settings → Secrets and variables → Actions):

| Secret | Example |
|--------|---------|
| `FTP_SERVER` | `ftp.alphagridtec.com` (or hostname from cPanel) |
| `FTP_USERNAME` | Your FTP / cPanel username |
| `FTP_PASSWORD` | Your FTP password |
| `FTP_SERVER_DIR` | `/public_html/` |

Then push to `main`, or run **Actions → Build and Deploy → Run workflow**.

## Pages

| Path | File |
|------|------|
| `/` | `src/pages/index.astro` |
| `/services` | `src/pages/services.astro` |
| `/work` | `src/pages/work.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |

## Notes

- Animations respect `prefers-reduced-motion`.
- Shared hosting has no Node runtime — only upload the static `dist/` output.
