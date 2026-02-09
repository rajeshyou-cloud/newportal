# QUICKSTART: Deploy GreyCells (Current Repo)

Last Updated: February 9, 2026 | Status: Ready for deployment

This guide matches the current repo layout. It assumes the full site code is already present in `src/` and configuration files already exist in the repo.

---

## Phase 1: Backend Setup (Google Sheets + Apps Script)

1. Create a Google Sheet named `GreyCells Leads`.
2. Open `Extensions > Apps Script`.
3. Replace the default script with the backend code from `PROJECT_FILES.md`.
4. Deploy as Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the Web App URL.
6. Test the URL in a browser. It should return a simple success message.

---

## Phase 2: Configure the Frontend

1. Open `src/components/ContactForm.jsx`.
2. Replace `APPS_SCRIPT_URL` with your deployed Web App URL (from Phase 1).

---

## Phase 3: Local Development

```bash
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells

npm install
npm run dev
```

Open: `http://localhost:5173/greycells/`

---

## Phase 4: Fix GitHub Actions Workflow (Required)

The repo currently contains merge conflict markers in `.github/workflows/deploy.yml`. You must resolve them before pushing.

Recommended resolution (choose one consistent configuration):
- Use `actions/checkout@v4`
- Use `actions/setup-node@v4` with Node 20
- Use `npm ci` for installs
- Use `JamesIves/github-pages-deploy-action@v4` for deployment

After resolving, commit the cleaned file.

---

## Phase 5: Deploy to GitHub Pages

```bash
git add .
git commit -m "Fix workflow and deploy"
git push origin main
```

Then in GitHub:
1. Go to `Settings > Pages`.
2. Set Source to `Deploy from a branch`.
3. Select `gh-pages` and `/ (root)`.

Your site will publish to:
`https://rajeshyou-cloud.github.io/greycells/`

---

## Validate

1. Visit the live site.
2. Open the Contact page.
3. Submit the form.
4. Confirm a new row appears in your Google Sheet.

---

## Notes

- The Vite base path is already set to `/greycells/` in `vite.config.js`.
- All pages and components already exist in `src/pages` and `src/components`.
- No `.env` file is required.
