(function () {
  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function gatherAnalytics() {
    return {
      event: 'page-view',
      pageTitle: document.title,
      pagePath: window.location.pathname,
      why: getQueryParam('why') || getQueryParam('utm_source') || 'general visit',
      referrer: document.referrer || 'direct',
      locale: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      clientTimestamp: new Date().toISOString()
    };
  }

  const payload = gatherAnalytics();
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/track', new Blob([body], { type: 'application/json' }));
  } else {
    fetch('/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    }).catch(() => {});
  }
})();
