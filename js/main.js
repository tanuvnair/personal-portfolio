// ---------------------------------------------------------------------------
// mobile menu
// ---------------------------------------------------------------------------
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = [...mobileMenu.querySelectorAll('a')];

function setMenuOpen(isOpen) {
  mobileMenu.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) {
    mobileLinks[0]?.focus();
  } else {
    menuBtn.focus();
  }
}

menuBtn.addEventListener('click', () => {
  setMenuOpen(!mobileMenu.classList.contains('open'));
});

mobileLinks.forEach((a) =>
  a.addEventListener('click', () => {
    setMenuOpen(false);
  })
);

document.addEventListener('keydown', (event) => {
  if (!mobileMenu.classList.contains('open')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    setMenuOpen(false);
    return;
  }

  if (event.key !== 'Tab' || !mobileLinks.length) return;

  const first = mobileLinks[0];
  const last = mobileLinks[mobileLinks.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && (active === first || active === menuBtn)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || active === menuBtn)) {
    event.preventDefault();
    if (active === menuBtn) {
      first.focus();
    } else {
      menuBtn.focus();
    }
  }
});

// ---------------------------------------------------------------------------
// nav active state on scroll
// ---------------------------------------------------------------------------
const navLinks = [...document.querySelectorAll('.nav-pill a')];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function setActiveNav(href) {
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === href);
  });
}

function updateActiveNav() {
  if (!sections.length) return;

  const last = sections[sections.length - 1];
  // Short trailing sections (Contact) never hit a mid-viewport band; pin when
  // the last section reaches the upper half, or the page is at the bottom.
  const atPageEnd =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  if (atPageEnd || last.getBoundingClientRect().top < window.innerHeight * 0.55) {
    setActiveNav(`#${last.id}`);
    return;
  }

  const marker = window.innerHeight * 0.35;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) {
      current = section;
    }
  }
  setActiveNav(`#${current.id}`);
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveNav(link.getAttribute('href'));
  });
});

let navRaf = 0;
window.addEventListener(
  'scroll',
  () => {
    if (navRaf) return;
    navRaf = requestAnimationFrame(() => {
      navRaf = 0;
      updateActiveNav();
    });
  },
  { passive: true }
);
window.addEventListener('resize', updateActiveNav);
updateActiveNav();

// ---------------------------------------------------------------------------
// Busy LED: pause loop when offscreen
// ---------------------------------------------------------------------------
const busyDot = document.querySelector('.busy-dot');
if (busyDot && 'IntersectionObserver' in window) {
  const busyObserver = new IntersectionObserver(
    ([entry]) => {
      busyDot.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    },
    { threshold: 0 }
  );
  busyObserver.observe(busyDot);
}

// ---------------------------------------------------------------------------
// GitHub: recently pushed (exclude featured)
// ---------------------------------------------------------------------------
const FEATURED = new Set(['tm1go', 'fluxroom', 'circacal', 'aideas', 'tanuvnair.github.io']);

const FALLBACK_REPOS = [
  {
    name: 'snag',
    description: 'A simple URL shortener in Go.',
    language: 'Go',
    html_url: 'https://github.com/tanuvnair/snag',
  },
  {
    name: 'pixgo',
    description: 'A simple image to pixel art generator.',
    language: 'Go',
    html_url: 'https://github.com/tanuvnair/pixgo',
  },
  {
    name: 'unfold',
    description: 'Find hidden subscriptions in seconds.',
    language: 'TypeScript',
    html_url: 'https://github.com/tanuvnair/unfold',
  },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function loadRecent() {
  try {
    const res = await fetch(
      'https://api.github.com/users/tanuvnair/repos?sort=updated&per_page=12'
    );
    if (!res.ok) throw new Error('GitHub API error');
    let repos = await res.json();
    repos = repos
      .filter((r) => !r.fork && !FEATURED.has(r.name) && r.description)
      .slice(0, 3);
    if (!repos.length) throw new Error('No repos');
    renderRecent(repos);
  } catch (err) {
    renderRecent(FALLBACK_REPOS);
  }
}

function renderRecent(repos) {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';
  if (!repos.length) {
    container.innerHTML =
      '<p class="projects-empty">No other public repos to show right now.</p>';
    return;
  }
  repos.forEach((repo) => {
    const a = document.createElement('a');
    a.href = repo.html_url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'recent-item';
    const lang = repo.language
      ? `<span class="recent-lang">${escapeHtml(repo.language)}</span>`
      : '';
    a.innerHTML = `
      <span class="recent-main">
        <span class="recent-name">${escapeHtml(repo.name)}</span>
        ${lang}
      </span>
      <span class="recent-desc">${escapeHtml(repo.description)}</span>
      <span class="recent-cta">Open →</span>
    `;
    container.appendChild(a);
  });
}
loadRecent();

// ---------------------------------------------------------------------------
// copy email
// ---------------------------------------------------------------------------
const copyBtn = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Copied to clipboard.';
  } catch (err) {
    copyStatus.textContent = 'Copy failed; use the email link instead.';
  }
  setTimeout(() => {
    copyStatus.textContent = '';
  }, 2500);
});
