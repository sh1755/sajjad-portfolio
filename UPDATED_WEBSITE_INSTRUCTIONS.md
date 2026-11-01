# Portfolio update — 31 October 2026

Changes included in this updated version:

- Your chosen portrait replaces the homepage and About profile photo. The OG share preview uses it too.
- Removed visible author/coauthor listings on publication cards, the coauthor directory on the Research page, and publication copy-citation buttons. Complete authorship metadata remains in `content/publications.ts`, but is not displayed on the website.
- Added attendance at ICSR + ART 2026, London (1–4 July 2026).
- Marked multilingual manipulation as **Published** in IEEE ICARM 2025 with DOI `10.1109/ICARM65671.2025.11293725`.
- Marked the Hybrid RL+LLM paper as **Published** in IEEE EmergIN 2025 with DOI `10.1109/EMERGIN67762.2025.11450758`. Kept the separate arXiv link as the open preprint version.
- Added compact subtopic groups for robot kinematics, robot dynamics, control, simulation, LLMs, VLMs, reinforcement learning, manipulation, ROS 2/MoveIt 2 and more.
- Verified that the website is branded as Dr Sajjad Hussain; no "ChatGPT" site title is present. Its hostname can only change with an actual deployment/custom domain.

## Run locally in Ubuntu / VS Code

Unzip into your Downloads directory, open the `sajjad-portfolio` folder and run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

If an old `sajjad-portfolio` folder already exists, rename it as a backup before extracting this ZIP, or carefully copy only the changed files. Do not delete any personal edits you have made to the earlier project.

## Adding more published or submitted papers

Edit `content/publications.ts` and add a record with verified title, venue, year, status and link. Do not list submissions without confirmation of their details. The author lists may stay in source metadata but are not shown to visitors.

## Update checks

The TypeScript and TSX source files were syntax-checked (37 files, no parse errors). A full Next.js production build could not be completed in this isolated environment because npm dependency installation timed out. Run `npm run build` on your Ubuntu machine to check the production build before deploying.
