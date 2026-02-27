(function () {
  function getPath() {
    return (window.location && window.location.pathname)
      ? window.location.pathname.toLowerCase()
      : '';
  }

  function applySectionClass() {
    const path = getPath();

    // Clear previous classes
    document.documentElement.classList.remove('PM516A', 'PM516B', 'PM516home');

    // Home (handle both with and without trailing slash)
    if (path === '/pm516' || path === '/pm516/') {
      document.documentElement.classList.add('PM516home');
    } else if (path.indexOf('/pm516a') !== -1) {
      document.documentElement.classList.add('PM516A');
    } else if (path.indexOf('/pm516b') !== -1) {
      document.documentElement.classList.add('PM516B');
    }
  }

  applySectionClass();

  window.addEventListener('popstate', applySectionClass);
})();
