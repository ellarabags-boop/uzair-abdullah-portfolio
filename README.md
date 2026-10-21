# Uzair Abdullah – Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev
```
## Deploy on Netlify
Push to GitHub, then "Add new site → Import from Git". Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
The contact form uses **Netlify Forms** (works automatically after deploy; view messages in Netlify → Forms). It will show the error state on local dev because Netlify handles the POST.

## Edit content
All text, links and project data live in `src/config.js`. Set `links.github` there to enable the GitHub button.
Replace `public/Uzair_Abdullah_CV.pdf` to update the CV.
