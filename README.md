# GreyCells Technologies

Corporate Website | Product Development - Digital Marketing - AI Automations

[![Deploy Status](https://github.com/rajeshyou-cloud/greycells/actions/workflows/deploy.yml/badge.svg)](https://github.com/rajeshyou-cloud/greycells/actions/workflows/deploy.yml)

Live Site: https://rajeshyou-cloud.github.io/greycells/

---

## Quick Start

Want to deploy immediately? Start here:

Option A: 30-Minute Deploy (Recommended)
- QUICKSTART.md - Get your site live in 30 minutes

Option B: Full Documentation
- DEPLOYMENT_GUIDE.md - Comprehensive deployment guide

Option C: Code Reference
- PROJECT_FILES.md - Complete file contents and backend code

---

## Project Overview

Company: GreyCells Technologies, Bangalore  
Tagline: Empowering businesses through innovative Product Development, Digital Marketing, and AI Automations

Features:
- 13+ Pages: Home, Services, Landing, Industries, Case Studies, Process, About, Blog, Careers, Contact, Privacy, Terms, FAQ, Resources
- Working Contact Form: Submissions to Google Sheets + Email notifications
- GitHub Pages Hosting: Automatic deployment via GitHub Actions
- SEO Optimized: Meta tags, sitemap, robots.txt, structured data
- Mobile Responsive: Tailwind CSS, tested on all devices
- 3 CTAs: Book a Call, WhatsApp, Email

---

## Tech Stack

- Frontend: React 18 + Vite
- Styling: Tailwind CSS
- Routing: React Router DOM
- SEO: React Helmet Async
- Icons: Lucide React
- Backend: Google Apps Script (serverless)
- Database: Google Sheets
- Hosting: GitHub Pages
- CI/CD: GitHub Actions

---

## Documentation Index

| Document | Purpose | When to Use |
|----------|---------|-------------|
| QUICKSTART.md | 30-minute deployment guide | First-time deployment |
| DEPLOYMENT_GUIDE.md | Comprehensive step-by-step | Detailed reference |
| PROJECT_FILES.md | All file contents + backend code | Copy-paste code reference |
| README.md (this file) | Project overview | Navigation hub |

---

## Key URLs and Contacts

Live URLs:
- Website: https://rajeshyou-cloud.github.io/greycells/
- Landing Page: https://rajeshyou-cloud.github.io/greycells/landing
- Contact Form: https://rajeshyou-cloud.github.io/greycells/contact

Company Contact:
- Email: hello@greycellstech.com
- Phone: +91 98807 74315
- WhatsApp: https://wa.me/919880774315
- Book a Call: https://calendar.app.google/31YgUYzPYVRUB5yR6
- Location: Bangalore, Karnataka, India

---

## Local Development

```bash
# Clone
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells

# Install
npm install

# Dev server
npm run dev
# -> http://localhost:5173/greycells/

# Build
npm run build

# Preview build
npm run preview
```

---

## Project Structure

```
greycells/
├── .github/workflows/    # GitHub Actions (auto-deploy)
├── public/               # Static assets (robots, sitemap)
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/            # Content + constants
│   ├── pages/           # All 13+ pages
│   ├── App.jsx          # Main app + routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML template
├── vite.config.js       # Vite config (base: /greycells/)
├── tailwind.config.js   # Tailwind config
└── package.json         # Dependencies
```

---

## Next Steps

1. Set up Google Apps Script backend -> QUICKSTART.md (Phase 1)
2. Clone repo and install dependencies
3. Deploy: push to `main` -> GitHub Actions will deploy automatically
4. Verify: visit https://rajeshyou-cloud.github.io/greycells/

---

## Environment Variables

No `.env` file needed. The Google Apps Script Web App URL is hardcoded in `src/components/ContactForm.jsx` after you deploy your backend.

---

## Support

Have questions? Check the documentation:
- QUICKSTART.md - Fast deployment
- DEPLOYMENT_GUIDE.md - Detailed guide
- PROJECT_FILES.md - Code reference

Still stuck? Email: hello@greycellstech.com

---

## License

Proprietary - (c) 2026 GreyCells Technologies, Bangalore

---

Built with care in Bangalore | Last Updated: February 6, 2026
