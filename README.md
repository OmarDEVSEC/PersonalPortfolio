PersonalPortfolio now includes a simple Node.js backend to log visitor access and page-view analytics.

Usage:
1. Run `npm install` in the project root.
2. Start the server with `npm start`.
3. Open `http://localhost:3000` in your browser.

What it logs:
- who: visitor IP and user agent
- what: requested path and HTTP method
- where: referrer and host information
- why: optional `why` query parameter or client-provided reason via the `/track` endpoint

Analytics are written to `access.log` in the project root.
