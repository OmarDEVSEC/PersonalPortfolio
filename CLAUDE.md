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
- `index.html` — home page. Loads `back.js` (project data + typed.js animation), `scroll.js` (smooth-scroll nav), `analytics.js` (page-view tracking beacon), all as plain `<script>` tags in load order.
- `links.html` — blog list + social links page. Loads `links.js` and `analytics.js`.
- `blogs/*.html` — individual blog post pages (`aboutme.html`, `Az500.html`), styled by `blogs/blog.css`.
- `style.css` — single global stylesheet driving the terminal aesthetic (dark background, green `#00ff88` / cyan `#00d4ff` accents, monospace font). CSS custom properties for the palette are defined at the top (`--bg-primary`, `--accent-primary`, etc.) — reuse these instead of hardcoding colors.
- Content (projects, blog entries, social links) lives as plain JS arrays inside `back.js` and `links.js` and is rendered into `#projects-container` / `#blogs-container` / `#socials-container` via `innerHTML` on `DOMContentLoaded`. To add/edit a project, blog post, or social link, edit the corresponding array — there is no CMS or data file.

**Backend (`server.js`, Express):**
- Every request (except `/track`) passes through a logging middleware that builds a "who/what/where/why" entry (IP, user agent, method/path, referrer, `why` query param) and appends it as JSON-lines to `access.log` in the project root.
- `POST /track` is the client-side analytics endpoint that `analytics.js` beacons to on every page load (via `navigator.sendBeacon`, falling back to `fetch`); it logs a `page-view` event with page title, referrer, locale, and screen size.
- `GET /health` returns a simple JSON status check.
- After the above routes/middleware, `express.static(__dirname)` serves the whole project root directly — so any file placed in the repo root or `blogs/` becomes web-accessible.
- Unmatched routes get a plain-text 404.

## Recruiter-focused redesign — structure done, content outstanding

The structural revamp (recruiter-readability pass) has been implemented: work experience section, skills/certifications section (surfaced from `blogs/aboutme.html` onto the homepage), header resume/contact CTAs, fixed project card links, removed dead code (unused typed.js target, orphaned blog-preview render path), removed broken Twitter/email links, and added favicon/Open Graph/robots.txt/sitemap.xml. Visual direction stayed polished terminal/CLI (dark, monospace, command-prompt aesthetic), vanilla HTML/CSS/JS, no build step — per the original decision.

**Outstanding content — grep for these before treating the site as launch-ready:**
- `resume.pdf` does not exist yet. The header "Resume" button in `index.html` links to it and will 404 until the file is dropped in the repo root.
- `experience` array in `back.js` has one placeholder entry (`[ADD REAL ROLE]` / `[ADD REAL COMPANY]` / `[ADD REAL DATES]`) — replace with real work history.
- `projects` array in `back.js` still has 3 placeholder entries (`[ADD REAL PROJECT] Project 1/2/3`, empty `demoUrl`/`repoUrl`) — replace with real project data. `demoUrl` can stay empty if a project has no live demo (the "View" link only renders when set); `repoUrl` should point to the GitHub repo.
- Email is a sentinel (`REPLACE_WITH_REAL_EMAIL@example.com`) in both `index.html` (header CTA + mailto) and `links.js` (`socials` array) — replace with a real address.
- Twitter/X is disabled (commented out) in both `index.html` and `links.js` until a real handle exists — re-enable once there is one, or leave it dropped permanently.
- `og:url` meta tags in `index.html`/`links.html` and all `<loc>` entries in `sitemap.xml` use a placeholder domain (`https://omardevsec.example.com`) — replace with the real deployed domain once hosted.
- `og:image` is not set — add one for richer LinkedIn/Slack link previews (optional).
- Azure Static Web Apps: still the intended hosting target for deployment; not yet set up.

The certifications/education list is treated as real/current (sourced directly from `blogs/aboutme.html`: AZ-500, CCNA in progress, SC-900, CompTIA A+/Security+/Network+, BS Cybersecurity @ WGU, AS Programming @ Seattle Central) and is now duplicated onto the homepage in `back.js`'s `certifications`/`education`/`coreSkills` data — keep both in sync if either changes.

## Notes specific to this repo

- No `.gitignore` exists — `node_modules` has been committed to the repo in the past. Don't assume `node_modules` is ignored; be careful about accidentally re-committing large dependency trees.
- `Links.txt` and `toDoList.md` in the repo root are informal personal notes, not authoritative specs. The blog-CSS-unification item in `toDoList.md` is now done (`blogs/blog.css` uses `var(--font-mono)` like the main site); hosting is still outstanding.
- Placeholder values still exist in `back.js`/`links.js`/`index.html` — see the outstanding-content checklist above (`[ADD REAL ...]` markers and `REPLACE_WITH_REAL_EMAIL@example.com`) — treat these as unfilled content, not bugs, unless asked to update them.
