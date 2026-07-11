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

## Planned frontend redesign (ON HOLD)

A full redesign is planned but **blocked until the user supplies real content** (resume PDF, work experience details, real project data, real email/Twitter handle). Do not start implementation until the user explicitly resumes this work and provides that content.

Decisions already made for when this resumes:
- **Visual direction:** polished terminal/CLI theme — keep the current dark, monospace, command-prompt aesthetic but tighten hierarchy/spacing so it reads as more deliberate and professional (not a from-scratch style change).
- **Tech stack:** stay vanilla HTML/CSS/JS, no build step, no framework — restyle in place.
- **New content sections to add:**
  - Work experience section (jobs/roles, dates, responsibilities)
  - Downloadable resume/CV (PDF link/button)
  - Skills/certifications section — surface certs already documented in `blogs/aboutme.html` (AZ-500, CCNA in progress, SC-900, CompTIA A+/Security+/Network+)
- Goal is recruiter-readability: make projects and work experience easy to scan, not just a portfolio/blog feel.

Still outstanding before implementation can start:
- Real project details (title, description, languages/frameworks, link) to replace `Project 1/2/3` placeholders in `back.js`
- Real work experience entries
- Resume PDF file
- Real email and Twitter/X handle (or confirmation to drop Twitter)
- Confirmation that the certs list in `blogs/aboutme.html` is current

## Notes specific to this repo

- No `.gitignore` exists — `node_modules` has been committed to the repo in the past. Don't assume `node_modules` is ignored; be careful about accidentally re-committing large dependency trees.
- `Links.txt` and `toDoList.md` in the repo root are informal personal notes (outstanding items like unifying blog CSS with the main design, and hosting plans), not authoritative specs.
- Several placeholder values still exist in `back.js`/`links.js` (e.g. `Project 1/2/3` with `link: "#"`, `mailto:your-email@example.com`) — treat these as unfilled content, not bugs, unless asked to update them.
