// docs/js/section-color.js
(function () {
  try {
    var path = window.location.pathname || '';
    path = path.toLowerCase();

    // If your site is published under a subpath (e.g. /PM516/pm516a/),
    // the toLowerCase() above will normalize that. Adjust strings if needed.
    if (path.indexOf('/pm516a/') !== -1 || path.indexOf('/pm516a') !== -1) {
      document.documentElement.classList.add('pm516a');
    } else if (path.indexOf('/pm516b/') !== -1 || path.indexOf('/pm516b') !== -1) {
      document.documentElement.classList.add('pm516b');
    }
  } catch (e) {
    // don't break the page if something unexpected happens
    console.warn('section-color.js error', e);
  }
})();