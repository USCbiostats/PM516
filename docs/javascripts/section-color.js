(function () {
  function getPath() {
    return (window.location && window.location.pathname)
      ? window.location.pathname.toLowerCase()
      : '';
  }

  function applySectionClass() {
    const path = getPath();

    // Clear previous classes
    document.documentElement.classList.remove('PM516A');
    document.documentElement.classList.remove('PM516B');
    document.documentElement.classList.remove('pm516home');

    if (path.endsWith('/pm516/') || path === '/pm516') {
      document.documentElement.classList.add('pm516home');
    } else if (path.indexOf('/PM516A') !== -1) {
      document.documentElement.classList.add('PM516A');
    } else if (path.indexOf('/PM516B') !== -1) {
      document.documentElement.classList.add('PM516B');
    }
  }

  applySectionClass();

  window.addEventListener('popstate', applySectionClass);
})();
