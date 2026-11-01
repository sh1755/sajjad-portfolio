# Dr Sajjad Hussain — academic portfolio

Personal research website: robotics, human–robot interaction and embodied AI at the University of Brighton.

**Stack:** Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS 3 · Motion · Lucide · Geist fonts. No database or backend.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm start          # serve ./out locally
```

Node 18.18+ is required (Node 20 or 22 recommended).

## Editing content

All text lives in typed files in `content/` — you should rarely need to touch the components.

| File | What it controls |
|---|---|
| `content/siteConfig.ts` | Name, site URL, email, profile links, navigation, CV path |
| `content/profile.ts` | Hero text, biography, education, skills |
| `content/research.ts` | Four research themes, grouped technical research areas and six case-study pages (`/research/<slug>/`) |
| `content/publications.ts` | Bibliography, paper statuses, verified DOI links; coauthor lists stored as metadata but not displayed |
| `content/projects.ts` | GitHub repository cards and the "All repositories" table |
| `content/experience.ts` | Experience timeline and "My journey" |
| `content/teaching.ts` | Teaching philosophy, modules, practice, workshops |
| `content/events.ts` | Talks and conference activity |
| `content/awards.ts` | Awards, invitations and memberships (only `confirmed: true` entries render) |

**Add a publication:** copy an entry in `content/publications.ts`, give it a unique `id`, choose `type` (journal, conference, review, preprint, chapter, thesis) and `status` (published, presented, accepted, preprint, abstract, working-paper). Set `featured: true` to show it on the home page.

**Add a case study:** add an object to `caseStudies` in `content/research.ts`. The page is generated automatically from its `slug`.

**Images:** put files in `public/images/…` and reference them as `/images/…`. Replace `public/images/profile/portrait.jpg` to update the portrait everywhere. Logos go in `public/images/logos/` and are referenced from `content/experience.ts`.

See **`CONTENT_REVIEW.md`** for the items that still need your confirmation.

## Project structure

```
app/                  routes: /, /research, /research/[slug], /publications,
                      /projects, /teaching, /about, /contact, sitemap, robots
components/           UI building blocks (cards, publication browser, timeline, …)
content/              all editable content
public/               images, demo video, og.png
.github/workflows/    GitHub Pages deployment
```

## Deploying

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repository. The defaults are correct (framework: Next.js; output is the static export).
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your final URL (e.g. `https://sajjadhussain.co.uk`).
4. Deploy. Every push to `main` redeploys.

### GitHub Pages

1. Push to GitHub. In the repository, **Settings → Pages → Source: GitHub Actions**.
2. **Settings → Secrets and variables → Actions → Variables**:
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://sh1755.github.io/portfolio`
   - `NEXT_PUBLIC_BASE_PATH` — `/portfolio` if the site is served from `https://sh1755.github.io/portfolio/`. Leave unset for a user site (`sh1755.github.io` repository) or a custom domain.
3. Push to `main`; the workflow in `.github/workflows/deploy-pages.yml` builds and publishes `out/`.

### Custom domain

- **Vercel:** Project → Settings → Domains → add the domain, then create the DNS records Vercel shows (an `A` record to `76.76.21.21` for the apex and a `CNAME` to `cname.vercel-dns.com` for `www`).
- **GitHub Pages:** Settings → Pages → Custom domain. Create a `CNAME` DNS record for `www` pointing to `sh1755.github.io`, and `A` records for the apex pointing to GitHub's Pages IPs (185.199.108.153, .109.153, .110.153, .111.153). Add a `public/CNAME` file containing the domain, and leave `NEXT_PUBLIC_BASE_PATH` empty.
- Update `NEXT_PUBLIC_SITE_URL` to the new domain so canonical links and the sitemap are correct.

## Publishing the source to GitHub

```bash
git init
git add .
git commit -m "Academic portfolio"
git branch -M main
git remote add origin https://github.com/sh1755/<repo-name>.git
git push -u origin main
```

## Notes

- Accessibility: semantic landmarks, skip link, visible focus states, labelled controls, `prefers-reduced-motion` respected (scroll reveals, hero animation and demo autoplay all switch off), and content remains fully visible without JavaScript.
- No citation counts or h-index are hard-coded; the site links to Google Scholar instead.
- Organisation names identify affiliations only and do not imply endorsement.
