// ---------------------------------------------------------------------------
// theme (light / blueprint-dark)
// ---------------------------------------------------------------------------
(function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.classList.add('dark');
})();

document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ---------------------------------------------------------------------------
// mobile menu
// ---------------------------------------------------------------------------
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// ---------------------------------------------------------------------------
// hero typing effect
// ---------------------------------------------------------------------------
const phrases = [
  'backend engineer',
  'systems architect',
  'go / typescript',
  'building tm1go',
];
const typingEl = document.getElementById('typing-text');
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    charIdx++;
    typingEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIdx--;
    typingEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ---------------------------------------------------------------------------
// reveal-on-scroll
// ---------------------------------------------------------------------------
document.querySelectorAll('.about-grid, .projects-grid, .spec-sheet, .contact-form').forEach((el) => {
  el.classList.add('reveal');
});
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------------------------------------------------------------------------
// GitHub projects
// ---------------------------------------------------------------------------
const FALLBACK_REPOS = [
  { name: 'tm1go', description: 'Go package for the IBM TM1 REST API.', language: 'Go', stargazers_count: 0, html_url: 'https://github.com/tanuvnair/tm1go' },
  { name: 'fluxroom', description: 'Real-time collaborative text editor.', language: 'TypeScript', stargazers_count: 0, html_url: 'https://github.com/tanuvnair' },
  { name: 'portfolio', description: 'This site - source available on request.', language: 'HTML', stargazers_count: 0, html_url: 'https://github.com/tanuvnair' },
];

async function loadProjects() {
  const container = document.getElementById('projects-container');
  try {
    const res = await fetch('https://api.github.com/users/tanuvnair/repos?sort=updated&per_page=6');
    if (!res.ok) throw new Error('GitHub API error');
    let repos = await res.json();
    repos = repos.filter((r) => !r.fork).slice(0, 6);
    if (!repos.length) throw new Error('No repos');
    renderProjects(repos);
  } catch (err) {
    renderProjects(FALLBACK_REPOS);
  }
}

function renderProjects(repos) {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';
  repos.forEach((repo) => {
    const card = document.createElement('a');
    card.href = repo.html_url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-name">${repo.name}</span>
      <p class="project-desc">${repo.description || 'No description provided.'}</p>
      <div class="project-meta">
        ${repo.language ? `<span><span class="lang-dot"></span>${repo.language}</span>` : ''}
        <span>★ ${repo.stargazers_count ?? 0}</span>
      </div>
    `;
    container.appendChild(card);
  });
}
loadProjects();

// ---------------------------------------------------------------------------
// contact form (no backend wired up - swap action for your endpoint)
// ---------------------------------------------------------------------------
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  if (!name) return;
  formStatus.textContent = `Thanks, ${name.split(' ')[0]} - message noted. I'll reply soon.`;
  form.reset();
});

// ---------------------------------------------------------------------------
// footer year
// ---------------------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
