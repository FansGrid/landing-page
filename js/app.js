/**
 * =========================================================================
 * FANSGRID · Landing Page
 * Interacciones mínimas: navegación, equipo, contacto y vídeos del prototipo.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderTeamMembers();
  initCopyEmail();
  initLazyVideos();
  initScrollGifs();
});

/* -------------------------------------------------------------------------
 * Navegación
 * ------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('nav-links');

  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (!toggle || !nav) return;

  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

/* -------------------------------------------------------------------------
 * Equipo (los datos viven en js/team-config.js)
 * ------------------------------------------------------------------------- */
function renderTeamMembers() {
  const container = document.getElementById('team-grid-container');
  if (!container) return;

  const team = window.FANSGRID_TEAM || [];
  container.innerHTML = '';

  team.forEach((member) => {
    const card = document.createElement('article');
    card.className = 'team-card';

    const name = escapeHtml(member.name || 'Integrante');
    const role = escapeHtml(member.role || '');
    const bio = escapeHtml(member.bio || '');
    const linkedin = typeof member.linkedin === 'string' ? member.linkedin.trim() : '';

    const avatar = member.avatar
      ? `<img src="${escapeHtml(member.avatar)}" alt="${name}" loading="lazy">`
      : `<span class="team-initials">${escapeHtml(name.charAt(0).toUpperCase())}</span>`;

    card.innerHTML = `
      <div class="team-avatar">${avatar}</div>
      <h3 class="team-name">${name}</h3>
      <div class="team-role">${role}</div>
      <p class="team-bio">${bio}</p>
      ${linkedin ? `
        <a class="team-linkedin" href="${escapeHtml(linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de ${name}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.75v20.5c0 .97.79 1.75 1.77 1.75h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
          </svg>
          <span>LinkedIn</span>
        </a>` : ''}
    `;

    container.appendChild(card);
  });
}

/* -------------------------------------------------------------------------
 * Copiar correo
 * ------------------------------------------------------------------------- */
function initCopyEmail() {
  const button = document.getElementById('copy-email');
  if (!button) return;

  const email = 'admin@fans-grid.es';

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast('Correo copiado al portapapeles');
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}

/* -------------------------------------------------------------------------
 * Vídeos: se reproducen al entrar en pantalla. Si el navegador lo bloquea
 * (autoplay restrictivo), se muestran los controles para poder arrancarlos.
 * ------------------------------------------------------------------------- */
function initLazyVideos() {
  const videos = document.querySelectorAll('.lazy-video');
  if (!videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(playVideo);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) playVideo(entry.target);
    });
  }, { rootMargin: '80px', threshold: 0.15 });

  videos.forEach((video) => observer.observe(video));
}

function playVideo(video) {
  if (!video.paused) return;

  video.muted = true;
  const attempt = video.play();

  if (attempt && typeof attempt.catch === 'function') {
    attempt.catch(() => { video.controls = true; });
  }
}

/* -------------------------------------------------------------------------
 * Imágenes animadas: solo se animan cuando entran en pantalla
 * ------------------------------------------------------------------------- */
function initScrollGifs() {
  const images = document.querySelectorAll('.scroll-gif');
  if (!images.length) return;

  if (!('IntersectionObserver' in window)) {
    images.forEach((img) => { if (img.dataset.anim) img.src = img.dataset.anim; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const img = entry.target;
      const next = entry.isIntersecting ? img.dataset.anim : img.dataset.still;
      if (next && img.getAttribute('src') !== next) img.src = next;
    });
  }, { rootMargin: '60px', threshold: 0.2 });

  images.forEach((img) => observer.observe(img));
}

/* -------------------------------------------------------------------------
 * Utilidades
 * ------------------------------------------------------------------------- */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(message) {
  let toast = document.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
