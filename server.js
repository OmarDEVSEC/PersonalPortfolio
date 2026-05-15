const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const LOG_FILE = path.join(__dirname, 'access.log');

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function writeLog(entry) {
  const payload = JSON.stringify(entry) + '\n';
  fs.appendFile(LOG_FILE, payload, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error('Unable to write analytics log:', err);
    }
  });
}

function buildRequestEntry(req) {
  return {
    timestamp: new Date().toISOString(),
    who: getClientIp(req),
    userAgent: req.headers['user-agent'] || 'unknown',
    what: `${req.method} ${req.originalUrl}`,
    where: {
      host: req.headers.host || 'unknown',
      referer: req.headers.referer || req.headers.referrer || 'direct',
      ip: getClientIp(req)
    },
    why: req.query.why || 'unknown',
    query: req.query || {},
    path: req.path,
    route: req.originalUrl
  };
}

app.use(express.json({ limit: '20kb' }));

app.use((req, res, next) => {
  if (req.path === '/track') {
    return next();
  }

  const entry = buildRequestEntry(req);
  writeLog(entry);
  console.log('[access]', entry.what, '- who:', entry.who, '- where:', entry.where.referer || 'direct');
  next();
});

app.post('/track', (req, res) => {
  const clientEntry = buildRequestEntry(req);
  const payload = {
    ...clientEntry,
    event: req.body.event || 'page-view',
    why: req.body.why || clientEntry.why || 'unknown',
    details: req.body.details || null,
    pageTitle: req.body.pageTitle || null,
    referrer: req.body.referrer || clientEntry.where.referer
  };

  writeLog(payload);
  console.log('[track]', payload.event, '- why:', payload.why);

  res.json({ status: 'ok', timestamp: payload.timestamp });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.status(404).send('404 - page not found');
});

app.listen(PORT, () => {
  console.log(`PersonalPortfolio backend running at http://localhost:${PORT}`);
  console.log(`Analytics are being written to ${LOG_FILE}`);
});
