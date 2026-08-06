// ---------------------------------------------------------------------------
// boot overlay cleanup (CSS hides it; this removes it regardless)
// ---------------------------------------------------------------------------
setTimeout(() => {
  document.querySelector('.boot')?.remove();
}, 1200);

// ---------------------------------------------------------------------------
// menu bar clock (updates on the minute, like the original)
// ---------------------------------------------------------------------------
(function initClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;

  function tick() {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const time = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    clock.textContent = `${day} ${time}`;
  }

  tick();
  const msToNextMinute = (60 - new Date().getSeconds()) * 1000;
  setTimeout(() => {
    tick();
    setInterval(tick, 60000);
  }, msToNextMinute);
})();

// ---------------------------------------------------------------------------
// menus (click to open, hover to switch, Esc to close, arrows to move)
// ---------------------------------------------------------------------------
(function initMenus() {
  const menus = Array.from(document.querySelectorAll('[data-menu]'));
  let openMenu = null;

  function closeAll() {
    menus.forEach((menu) => {
      menu.classList.remove('open');
      menu.querySelector('.menu-title').setAttribute('aria-expanded', 'false');
    });
    openMenu = null;
  }

  function open(menu) {
    closeAll();
    menu.classList.add('open');
    menu.querySelector('.menu-title').setAttribute('aria-expanded', 'true');
    openMenu = menu;
  }

  menus.forEach((menu) => {
    const title = menu.querySelector('.menu-title');
    const items = Array.from(menu.querySelectorAll('.menu-list a'));

    title.addEventListener('click', (event) => {
      event.stopPropagation();
      if (openMenu === menu) {
        closeAll();
      } else {
        open(menu);
      }
    });

    title.addEventListener('mouseenter', () => {
      if (openMenu && openMenu !== menu) open(menu);
    });

    title.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' && openMenu === menu) {
        event.preventDefault();
        items[0]?.focus();
      }
    });

    items.forEach((item, index) => {
      item.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          items[(index + 1) % items.length].focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          items[(index - 1 + items.length) % items.length].focus();
        }
      });
      item.addEventListener('click', closeAll);
    });
  });

  document.addEventListener('click', (event) => {
    if (openMenu && !openMenu.contains(event.target)) closeAll();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openMenu) {
      const title = openMenu.querySelector('.menu-title');
      closeAll();
      title.focus();
    }
  });
})();

// ---------------------------------------------------------------------------
// windowshade (double-click title bar or click close box to roll a window up)
// ---------------------------------------------------------------------------
(function initWindowShade() {
  document.querySelectorAll('.window').forEach((windowEl) => {
    const titlebar = windowEl.querySelector('.titlebar');
    const closeBox = windowEl.querySelector('.close-box');

    function toggle() {
      windowEl.classList.toggle('collapsed');
    }

    closeBox.addEventListener('click', toggle);
    titlebar.addEventListener('dblclick', (event) => {
      if (event.target === closeBox) return;
      toggle();
    });
  });
})();

// ---------------------------------------------------------------------------
// navigation flash (marching ants on the window you jump to)
// ---------------------------------------------------------------------------
(function initNavFlash() {
  const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
  let flashTimer = null;

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target || !target.classList.contains('window')) return;

      document.querySelectorAll('.window.ants').forEach((el) => el.classList.remove('ants'));
      clearTimeout(flashTimer);
      requestAnimationFrame(() => {
        target.classList.add('ants');
        flashTimer = setTimeout(() => target.classList.remove('ants'), 1600);
      });
    });
  });
})();

// ---------------------------------------------------------------------------
// footer year
// ---------------------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
