# Saravanan R — Portfolio

React + Vite portfolio site. The hero is an interactive architecture diagram of the
stack: click any box to see what it does and what was built there.

## Run it locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173

## Edit the content

**Everything you'd want to change lives in `src/data/content.js`.** Name, contact,
intro text, the diagram nodes and their detail panels, case studies, experience,
skills, education. Edit that one file — you don't need to touch the components.

To change the resume PDF, replace `public/Saravanan_R_Resume.pdf` with the new file
(keep the same name, or update `profile.resume` in `content.js`).

### Adding or moving a diagram box

Two files:
- `src/data/content.js` — add the node to `systemNodes` and wire it in `systemEdges`
- `src/components/SystemMap.jsx` — add its position to `geo` and its wire to `wirePath`

The SVG uses a `0 0 925 316` coordinate space. Keep labels short enough to fit
inside the box width you give it.

## Deploy to Vercel

**Option A — GitHub (recommended, auto-deploys on every push)**

1. Create a new repo on GitHub and push this folder to it
2. Go to vercel.com → Add New → Project → import the repo
3. Vercel detects Vite automatically. Leave the defaults:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

Every `git push` after that redeploys automatically.

**Option B — command line**

```bash
npm i -g vercel
vercel
```

Follow the prompts. Use `vercel --prod` for a production deploy.

## Custom domain

Vercel → Project → Settings → Domains → add your domain, then point the DNS record
where Vercel tells you to.

## Before you publish

- Check the dates and figures in `content.js` match your resume
- No real customer names, ERP screenshots or internal URLs anywhere
- Add the live link to your LinkedIn profile and your resume header
