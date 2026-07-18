# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal portfolio site (terminal/CLI-themed) for Omar, a cybersecurity engineer, plus a tiny Express backend whose only job is to serve the static files and log visitor analytics to a local file.

## Commands

- `npm install` — install dependencies (just `express`)
- `npm start` — runs `node server.js`, serves the site at `http://localhost:3000`
- There is no build step, bundler, test suite, or linter configured. Static HTML/CSS/JS is served as-is.

## Architecture

**Frontend (static, no framework/bundler):**
- `index.html` — home page. Loads `back.js` (project data + typed.js animation) and `scroll.js` (smooth-scroll nav) as plain `<script>` tags in load order.
- `links.html` — blog list + social links page. Loads `links.js`.
- `blogs/*.html` — individual blog post pages (`aboutme.html`, `Az500.html`), styled by `blogs/blog.css`.
- `style.css` — single global stylesheet driving the terminal aesthetic (dark background, green `#00ff88` / cyan `#00d4ff` accents, monospace font). CSS custom properties for the palette are defined at the top (`--bg-primary`, `--accent-primary`, etc.) — reuse these instead of hardcoding colors.
- Content (projects, blog entries, social links) lives as plain JS arrays inside `back.js` and `links.js` and is rendered into `#projects-container` / `#blogs-container` / `#socials-container` via `innerHTML` on `DOMContentLoaded`. To add/edit a project, blog post, or social link, edit the corresponding array — there is no CMS or data file.

**Backend (`server.js`, Express) — local dev only, not used in production:**
- Every request (except `/track`) passes through a logging middleware that builds a "who/what/where/why" entry (IP, user agent, method/path, referrer, `why` query param) and appends it as JSON-lines to `access.log` in the project root.
- `POST /track` is an analytics endpoint that `analytics.js` beacons to (via `navigator.sendBeacon`, falling back to `fetch`); it logs a `page-view` event with page title, referrer, locale, and screen size. `analytics.js` is no longer referenced from `index.html`/`links.html` since the site now deploys to Azure Static Web Apps, which has no server to receive `/track` — the file and this endpoint are dead code kept around in case analytics gets reimplemented (e.g. as an Azure Function) later.
- `GET /health` returns a simple JSON status check.
- After the above routes/middleware, `express.static(__dirname)` serves the whole project root directly — so any file placed in the repo root or `blogs/` becomes web-accessible.
- Unmatched routes get a plain-text 404.

## Recruiter-focused redesign — structure done, content outstanding

The structural revamp (recruiter-readability pass) has been implemented: work experience section, skills/certifications section (surfaced from `blogs/aboutme.html` onto the homepage), header resume/contact CTAs, fixed project card links, removed dead code (unused typed.js target, orphaned blog-preview render path), removed broken Twitter/email links, and added favicon/Open Graph/robots.txt/sitemap.xml. Visual direction stayed polished terminal/CLI (dark, monospace, command-prompt aesthetic), vanilla HTML/CSS/JS, no build step — per the original decision.

**Real content now in place (sourced from `resume.pdf`):**
- `experience` array in `back.js` — consolidated into a single "Security Engineer" @ Boeing Employee Credit Union entry (per user request) merging the strongest bullets across all 4 roles held there (Intern -> Contractor -> Administrator -> Engineer); no dates shown. The Allied Universal (IT Technical Support) role was intentionally left off the homepage as less relevant to a Security Engineer narrative — full role-by-role history with dates is still in `resume.pdf`.
- `education`, `certifications`, `additionalTraining`, `coreSkills` in `back.js` — updated to match the resume exactly (CCNA is no longer "in progress"; added AZ-900, Oracle Cloud Foundations Associate, and the two additional-training entries; skills list expanded to reflect the resume's actual tooling — Varonis, Purview, MDCA, Sentinel, KQL, etc.).
- Email — `Omarsecure30@gmail.com` (from the resume header) now wired into `index.html`'s header Contact CTA and `links.js`'s `socials` array, replacing the sentinel.
- `resume.pdf` exists in the repo root and the header Resume button resolves correctly.

**Still outstanding — grep for these before treating the site as launch-ready:**
- `projects` array in `back.js` still has 3 placeholder entries (`[ADD REAL PROJECT] Project 1/2/3`, empty `demoUrl`/`repoUrl`) — replace with real project data. `demoUrl` can stay empty if a project has no live demo (the "View" link only renders when set); `repoUrl` should point to the GitHub repo.
- Twitter/X is disabled (commented out) in both `index.html` and `links.js` until a real handle exists — re-enable once there is one, or leave it dropped permanently. (Not on the resume, so likely intentional.)
- `og:url` meta tags in `index.html`/`links.html` and all `<loc>` entries in `sitemap.xml` use a placeholder domain (`https://omardevsec.example.com`) — replace with the real deployed domain once hosted.
- `og:image` is not set — add one for richer LinkedIn/Slack link previews (optional).
- Resume lists a phone number and Austin, TX location — not currently surfaced anywhere on the site; add if wanted.
- Azure Static Web Apps: repo is now prepped for it (`staticwebapp.config.json`, `404.html`, analytics beacon removed from pages — see below); the Azure resource itself still needs to be created via the Portal and connected to this GitHub repo.

`blogs/aboutme.html`'s certs/education list is now slightly stale relative to `back.js` (missing AZ-900, Oracle cert, and shows CCNA as "in progress") — update it to match if it's worth keeping in sync, or leave as a personal/informal blog post distinct from the authoritative resume-sourced homepage data.

## Notes specific to this repo

- No `.gitignore` exists — `node_modules` has been committed to the repo in the past. Don't assume `node_modules` is ignored; be careful about accidentally re-committing large dependency trees.
- `Links.txt` and `toDoList.md` in the repo root are informal personal notes, not authoritative specs. The blog-CSS-unification item in `toDoList.md` is now done (`blogs/blog.css` uses `var(--font-mono)` like the main site); hosting is still outstanding.
- Placeholder values still exist in `back.js`/`links.js`/`index.html` — see the outstanding-content checklist above (`[ADD REAL ...]` markers and `REPLACE_WITH_REAL_EMAIL@example.com`) — treat these as unfilled content, not bugs, unless asked to update them.
