// docs/javascripts/section-color.js
(function () {
  function getPath() {
    return (window.location && window.location.pathname) ? window.location.pathname.toLowerCase() : '';
  }

  function applySectionClass() {
    try {
      var path = getPath();
      // remove any previous classes we set
      document.documentElement.classList.remove('pm516a');
      document.documentElement.classList.remove('pm516b');

      if (path.indexOf('/pm516a/') !== -1 || path.indexOf('/pm516a') !== -1) {
        document.documentElement.classList.add('pm516a');
        console.debug('section-color: applied pm516a (path=' + path + ')');
        return 'pm516a';
      } else if (path.indexOf('/pm516b/') !== -1 || path.indexOf('/pm516b') !== -1) {
        document.documentElement.classList.add('pm516b');
        console.debug('section-color: applied pm516b (path=' + path + ')');
        return 'pm516b';
      } else {
        // no section match (home or other)
        console.debug('section-color: no section matched (path=' + path + ')');
        return null;
      }
    } catch (e) {
      console.warn('section-color error', e);
      return null;
    }
  }

  // Run once on load
  var last = applySectionClass();

  // Listen for history API changes (pushState/replaceState)
  (function(history) {
    var pushState = history.pushState;
    var replaceState = history.replaceState;
    history.pushState = function() {
      pushState.apply(history, arguments);
      window.dispatchEvent(new Event('locationchange'));
    };
    history.replaceState = function() {
      replaceState.apply(history, arguments);
      window.dispatchEvent(new Event('locationchange'));
    };
  })(window.history);

  // handle popstate
  window.addEventListener('popstate', function() {
    window.dispatchEvent(new Event('locationchange'));
  });

  // when location changes (SPA navigation) re-run
  window.addEventListener('locationchange', function() {
    var now = applySectionClass();
    last = now;
  });

  // Last-resort: periodic check (handles some edge cases)
  setInterval(function() {
    var nowPath = getPath();
    if (typeof window._section_color_last_path === 'undefined') {
      window._section_color_last_path = nowPath;
    }
    if (nowPath !== window._section_color_last_path) {
      window._section_color_last_path = nowPath;
      applySectionClass();
    }
  }, 300);
})();