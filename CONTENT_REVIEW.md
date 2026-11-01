# Content review checklist

Items that need your confirmation before they are published, or that could not be verified automatically. Nothing on this list is shown on the website as fact unless noted.

Sources checked (31 October 2026): University of Brighton research portal, Wiley Online Library listing, arXiv, alphaXiv, the AIR Lab site repository, AIRoC/MBZUAI event listings and all public `sh1755` repositories. Google Scholar, LinkedIn and the AIRoC speakers page could not be read directly.

## 🔴 Urgent — security

- [ ] **Revoke the OpenAI API key committed in `sh1755/LLM_HRI`** (`openaiLLM.py`, and possibly `from openai import OpenAI.py`). The repository is public, so the key should be treated as compromised: revoke it in the OpenAI dashboard, then remove it from the code and git history (e.g. `git filter-repo`) or recreate the repository. The website links to this repository.
- [ ] `sh1755/constructagent-nlp` contains a committed `venv/` folder — remove it and add it to `.gitignore`.
- [ ] `Franka_MediaPipe_BodyPose_HandGesture_Control` README lists lab network addresses. Low risk (private range), but consider replacing with placeholders. The website does not reproduce them.

## Photographs and media

- [x] **Portrait** — updated `public/images/profile/portrait.jpg` to the portrait selected in this conversation.
- [ ] **Franka Panda lab photograph** — none was available publicly. A good photo of you with the Panda would strengthen the hero and the AI-RTGM case study. Add it to `public/images/` and reference it in `content/research.ts` (`image` field).
- [ ] **AI-RTGM figures** — the paper is open access (CC licence to be confirmed). Adding its architecture figure to `/research/ai-rtgm/` would be ideal; confirm the licence first.
- [ ] **AIRoC 2025 photo** — add a speaker or event photo if you have permission to publish it.
- [ ] **Employer and institution logos** — not included (official files could not be downloaded). Place official logos in `public/images/logos/` and set `logo: "/images/logos/…"` in `content/experience.ts`. Monogram tiles are shown until then.
- [ ] **CV** — add a PDF to `public/cv/` and set `cvPath` in `content/siteConfig.ts`; CV buttons appear automatically.

## Publications

- [x] **ICARM 2025 IEEE DOI** — recorded as published with DOI `10.1109/ICARM65671.2025.11293725` (IEEE proceedings, pp. 452–457).
- [ ] **AI-RTGM latency (< 70 ms)** — shown on the case-study page as reported in the paper. The publisher page could not be read in full; please confirm the figure and wording.
- [ ] **AI-RTGM pipeline** — the diagram follows the paper's description (camera → GESTID → task mapping → TAGEM → controller). If the implementation used MediaPipe and libfranka/ROS explicitly, add them to the `pipeline` and `stack` fields.
- [ ] **SN Computer Science DOI** (`10.1007/s42979-025-04119-6`) — taken from your brief; Brighton confirms the article (vol. 6, art. 588) but the DOI string itself was not visible. Quick check recommended.
- [ ] **Energy-efficient planning author order** — arXiv: Hussain, Saad, Baimagambetov, Saeed. Brighton record: Hussain, Saad, Saeed, Baimagambetov. The site uses the arXiv order.
- [ ] **Agriculture review** — listed as "Working paper" with no link. Add a link or venue when available.
- [ ] **"Thermal modelling of PVT-CPC integrated vapour absorption refrigeration system"** (Materials Today: Proceedings, 2021) appears on a co-author's alphaXiv page with a truncated author list. Not included — add it to `content/publications.ts` if you are an author.
- [ ] Any other Google Scholar records not listed here (Scholar could not be accessed).
- [ ] `AI_RTGM_Realtime_HRI_…` repository is empty, so it is not linked. Push the code and add it to `content/projects.ts`.

## Teaching

- [ ] **Module list** — published as "teaching contributions" exactly as given in the brief (Robotics, Automation and Control Engineering; Machine Learning L6; CI401; CI453; Enterprise Networking; Cyber Security Management). Remove any you no longer teach.
- [ ] **Module leadership** — not claimed anywhere. If you are formally Module Leader for a module, add it to the module title in `content/teaching.ts`.
- [ ] **Fellowship (FHEA/AFHEA)** — not mentioned. Add only once awarded.
- [ ] **Brighton Students' Union Inspirational and Motivational Teaching Award (2025)** — hidden (`confirmed: false` in `content/awards.ts`). Set to `true` once you have the evidence; it then appears on Teaching and About.

## Experience and background

- [ ] **Assistant Professor in Mechanical Engineering, 2021–2022** — hidden from the experience list until the college name and dates are confirmed (`hidden: true` in `content/experience.ts`). The journey timeline and Teaching page mention 2021–22 undergraduate teaching in general terms only.
- [ ] Bosch location shown as "India" and Chegg as "India" — adjust if different.
- [ ] Hourly Paid Lecturer (Oct 2025 – Sep 2026) overlaps the Research Officer and Lecturer roles as given in the brief — confirm the end date.
- [ ] **IEEE RAS membership** and **NVIDIA Isaac Sim certification** — hidden (`confirmed: false`). Switch on if current.

## Talks

- [ ] **AIRoC 2025 talk title** — "Multimodal Human–Robot Interaction Using Gesture and Language Models" is taken from the brief. Event (8–9 December 2025, "Dialogue on Humanoids", organised by MBZUAI's Robotics Department) was confirmed independently; the speaker page itself could not be read.
- [ ] Departmental seminars, workshops, session-chair or committee roles — add to `content/events.ts` once confirmed.

## Before launch

- [ ] Set `NEXT_PUBLIC_SITE_URL` (or edit `url` in `content/siteConfig.ts`) to the final domain.
- [ ] Proofread the biography in `content/profile.ts` — it is written in the first person from the brief and your publications.

## Changes made 31 October 2026

- [x] Removed visible publication author lists and the collaborators/co-authors directory, as requested. Formal bibliography metadata is kept in content files for archival and citation accuracy; the public website no longer shows a citation-copy tool.
- [x] Added ICSR + ART 2026 attendance in London, 1–4 July 2026, with the official conference link.
- [x] Marked the ICARM 2025 multilingual paper as Published and added its IEEE DOI.
- [x] Marked the hybrid RL + LLM paper as Published in IEEE EmergIN 2025 and linked its DOI; the 2026 arXiv version is retained as an open preprint.
- [x] Added robotics kinematics, dynamics, control, simulation and AI/LLM/VLM/RL/manipulation subtopic groups.
- [x] Replaced the profile image with the user-selected portrait; site metadata remains solely branded Dr Sajjad Hussain.
- [ ] Any extra submitted or accepted papers: add once details and dates are supplied; do not fabricate entries.
- [ ] Set a custom domain in `NEXT_PUBLIC_SITE_URL` if you want your name to appear in the URL, not just the browser title.
