(function () {
  function getPath() {
    return (window.location && window.location.pathname)
      ? window.location.pathname.toLowerCase()
      : '';
  }

  function applySectionClass() {
    const path = getPath();

    // Remove any prior identifiers (lowercase)
    document.documentElement.classList.remove('pm516home');
    document.documentElement.classList.remove('pm516a');
    document.documentElement.classList.remove('pm516b');

    // Add lowercase class based on path
    if (path === '/pm516/' || path === '/pm516' || path === '/pm516/index.html') {
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
