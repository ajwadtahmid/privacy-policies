(function () {
  var root = document.documentElement;

  // Theme toggle (dark is the default; choice is remembered on this device only)
  var btn = document.querySelector('.theme-toggle');
  function sync() {
    var dark = root.getAttribute('data-theme') !== 'light';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (btn) {
    sync();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  }

  var content = document.getElementById('content');
  if (!content) return;

  // Wrap tables so they scroll sideways on small screens; the first table with an empty header is the info card
  content.querySelectorAll('table').forEach(function (t, i) {
    var w = document.createElement('div');
    w.className = 'table-wrap';
    var emptyHead = Array.prototype.every.call(t.querySelectorAll('thead th'), function (th) { return !th.textContent.trim(); });
    if (i === 0 && emptyHead) w.classList.add('info');
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  // Table of contents from h2 headings (policy pages only)
  var toc = document.getElementById('toc');
  var heads = content.querySelectorAll('h2');
  if (!toc || document.querySelector('main.home') || heads.length < 3) return;

  var ol = document.createElement('ol');
  var links = [];
  heads.forEach(function (h, i) {
    if (!h.id) h.id = 'section-' + (i + 1) + '-' + h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ol.appendChild(li);
    links.push(a);
  });
  var title = document.createElement('p');
  title.className = 'toc-title';
  title.textContent = 'On this page';
  toc.appendChild(title);
  toc.appendChild(ol);
  toc.hidden = false;

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    heads.forEach(function (h) { io.observe(h); });
  }
})();
