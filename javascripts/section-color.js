(function () {
  function getPath() {
    return (window.location && window.location.pathname)
      ? window.location.pathname.toLowerCase()
      : '';
  }

  function applySectionClass() {
    const path = getPath();

    // Clear previous classes
    document.documentElement.classList.remove('pm516a');
    document.documentElement.classList.remove('pm516b');
    document.documentElement.classList.remove('pm516home');

    if (path.endsWith('/pm516/') || path === '/pm516') {
      document.documentElement.classList.add('pm516home');
    } else if (path.indexOf('/pm516a') !== -1) {
      document.documentElement.classList.add('pm516a');
    } else if (path.indexOf('/pm516b') !== -1) {
      document.documentElement.classList.add('pm516b');
    }
  }

  applySectionClass();

  window.addEventListener('popstate', applySectionClass);
})();
