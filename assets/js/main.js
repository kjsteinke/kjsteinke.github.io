(function () {
  var root = document.documentElement;

  // Dark / light toggle (remembers the visitor's choice)
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Open external links in post content in a new tab
  document.querySelectorAll('.prose a[href^="http"]').forEach(function (a) {
    if (a.hostname !== location.hostname) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });
})();
