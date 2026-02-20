// docs/javascripts/section-color.js
(function () {
  // path detection: adjust if your site is hosted under a subpath
  var path = window.location.pathname.toLowerCase();
  
  // var path = (window.location.pathname + window.location.search).toLowerCase();

  if (path.indexOf('/PM516/pm516a/') !== -1) {
    document.documentElement.classList.add('pm516a');
  } else if (path.indexOf('/PM516/pm516b/') !== -1) {
    document.documentElement.classList.add('pm516b');
  }
})();