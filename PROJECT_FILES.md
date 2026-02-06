# 📚 GreyCells Technologies - Complete Project Files Reference

This document contains ALL file contents needed to build the complete GreyCells website.
Use this as your copy-paste reference when setting up locally.

---

## Table of Contents
- [Backend (Google Apps Script)](#backend)
- [Root Configuration Files](#root-config)
- [GitHub Actions](#github-actions)
- [Public Assets](#public-assets)
- [Source Files](#source-files)

---

<a name="backend"></a>
## 🔥 BACKEND: Google Apps Script

### File: `Code.gs` (Google Apps Script Editor)

```javascript
// === GREYCELLS CONTACT FORM BACKEND ===
// Deploy: Web App | Execute as: Me | Access: Anyone

function doPost(e) {
  var lock = LockService.getScriptLock();
  
  try {
    lock.waitLock(10000);
    var data = JSON.parse(e.postData.contents);
    
    // SPAM PROTECTION: Honeypot
    if (data.website_hp && data.website_hp.trim().length > 0) {
      return ContentService
        .createTextOutput(JSON.stringify({"result": "success", "msg": "Honeypot triggered"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads");
    
    if (!sheet) {
      sheet = ss.insertSheet("Leads");
      sheet.appendRow([
        "Timestamp", "Name", "Email", "Phone", "Company", 
        "ServiceInterest", "Budget", "Message", "SourcePage", 
        "Referrer", "UTM_Source", "UTM_Medium", "UTM_Campaign"
      ]);
      sheet.getRange(1, 1, 1, 13).setFontWeight("bold");
    }
    
    var timestamp = new Date();
    sheet.appendRow([
      timestamp, data.name || '', data.email || '', data.phone || '',
      data.company || '', data.service || '', data.budget || '',
      data.message || '', data.sourcePage || '', data.referrer || '',
      data.utm_source || '', data.utm_medium || '', data.utm_campaign || ''
    ]);
    
    // Send email notification
    try {
      MailApp.sendEmail({
        to: "rajeshyou@gmail.com",
        subject: "🔔 New Lead: " + (data.service || 'General'),
        htmlBody: `
          <h2>New Lead from GreyCells Website</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Name</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.name}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Email</td><td style="padding:10px;border:1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Phone</td><td style="padding:10px;border:1px solid #e2e8f0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Company</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.company}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Service</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.service}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Budget</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.budget}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Message</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.message}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Source</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.sourcePage}</td></tr>
          </table>
          <p style="margin-top:20px;color:#64748b;"><small>Submitted: ${timestamp.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}</small></p>
        `,
        noReply: true
      });
    } catch (mailError) {
      Logger.log("Email error: " + mailError.toString());
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput("GreyCells Form Handler is running!");
}
```

**Deployment Steps:**
1. Create Google Sheet: "GreyCells Leads"
2. Extensions > Apps Script
3. Paste code above
4. Deploy > New deployment > Web App
5. Execute as: **Me** | Access: **Anyone**
6. Copy Web App URL
7. Add URL to `src/components/ContactForm.jsx`

---

<a name="root-config"></a>
## ⚙️ ROOT CONFIGURATION FILES

### File: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/greycells/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
```

### File: `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#14b8a6",
        accent: "#f97316",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### File: `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### File: `.gitignore`

```
node_modules
dist
.DS_Store
*.log
.env
.env.local
```

### File: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/greycells/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <title>GreyCells Technologies | Product Development, Digital Marketing & AI Automations</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

<a name="github-actions"></a>
## 🚀 GITHUB ACTIONS

### File: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

---

<a name="public-assets"></a>
## 🏞️ PUBLIC ASSETS

### File: `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://rajeshyou-cloud.github.io/greycells/sitemap.xml
```

### File: `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://rajeshyou-cloud.github.io/greycells/</loc><priority>1.0</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/services</loc><priority>0.9</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/industries</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/case-studies</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/process</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/about</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/blog</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/careers</loc><priority>0.6</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/contact</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/landing</loc><priority>0.9</priority></url>
</urlset>
```

---

## 🔥 CRITICAL NEXT STEPS

1. **First**: Set up Google Apps Script (see BACKEND section above)
2. **Then**: Clone this repo locally:
   ```bash
   git clone https://github.com/rajeshyou-cloud/greycells.git
   cd greycells
   ```
3. Create folder structure:
   ```bash
   mkdir -p .github/workflows public src/components src/data src/pages
   ```
4. Copy each file from this document into the correct location
5. Install dependencies:
   ```bash
   npm install
   ```
6. Test locally:
   ```bash
   npm run dev
   ```
7. Deploy:
   ```bash
   git add .
   git commit -m "Complete website deployment"
   git push origin main
   ```

---

**Continue to PART 2 for all React components and pages...**

Due to file size limits, the complete React component code will be in a separate document.
Check the repo for `PROJECT_FILES_PART2.md` which will contain:
- src/main.jsx
- src/App.jsx
- src/index.css
- All components (Navbar, Footer, ContactForm, SEO, etc.)
- All 13+ pages
- Data files (content.js, services.js, etc.)

---

*Created: February 6, 2026 | GreyCells Technologies, Bangalore*
