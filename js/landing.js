// project1 — landing page logic (merged project)

// CyberM landing-page interactions: theme toggle, mobile navigation, local AI preview, and auth-aware navigation.
document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = [...document.querySelectorAll('[data-theme-toggle]')];
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('cybermTheme') || 'light'; } catch (_) {}

  function applyTheme(theme) {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.body.dataset.theme = dark ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', dark);
    document.querySelectorAll('[data-logo-light][data-logo-dark]').forEach(logo => {
      const source = dark ? logo.dataset.logoDark : logo.dataset.logoLight;
      if (logo.getAttribute('src') !== source) logo.setAttribute('src', source);
    });
    themeButtons.forEach(button => {
      button.textContent = dark ? '☀' : '☾';
      button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      button.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  themeButtons.forEach(button => button.addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('cybermTheme', next); } catch (_) {}
  }));

  const mobileMenu = document.getElementById('mobileMenu');
  const topLinks = document.querySelector('.top-links');
  if (mobileMenu && topLinks) {
    mobileMenu.addEventListener('click', () => {
      const isOpen = topLinks.classList.toggle('open');
      mobileMenu.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    topLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => topLinks.classList.remove('open')));
  }

  const aiForm = document.getElementById('aiDemoForm');
  const aiInput = document.getElementById('aiDemoInput');
  const aiFeedback = document.getElementById('aiDemoFeedback');
  if (aiForm && aiInput && aiFeedback) {
    aiForm.addEventListener('submit', event => {
      event.preventDefault();
      const question = aiInput.value.trim();
      if (!question) {
        aiFeedback.textContent = 'Enter a cybersecurity topic to preview the demo.';
        aiInput.focus();
        return;
      }
      aiFeedback.textContent = `Demo preview for “${question}”: start by defining the concept, reviewing trusted documentation, identifying relevant risks, and considering defensive monitoring. This is a sample response, not a live AI answer.`;
      aiInput.value = '';
    });
  }

  /* ===== Merged-project addition: auth-aware navigation ===== */
  function syncAuthNavigation() {
    if (!window.CyberAuth) return;
    const logged = window.CyberAuth.isLoggedIn();

    const login = document.getElementById('navLogin');
    const signup = document.getElementById('navSignup');
    const workspace = document.getElementById('navWorkspace');
    const logout = document.getElementById('navLogout');

    if (login) login.classList.toggle('hidden', logged);
    if (signup) signup.classList.toggle('hidden', logged);
    if (workspace) workspace.classList.toggle('hidden', !logged);
    if (logout) logout.classList.toggle('hidden', !logged);

    document.querySelectorAll('[data-enter-workspace]').forEach(link => {
      link.setAttribute('href', logged ? 'dashboard.html' : 'login.html');
    });
  }

  syncAuthNavigation();

  const logoutBtn = document.getElementById('navLogout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      window.CyberAuth.logout();
      window.location.reload();
    });
  }
});