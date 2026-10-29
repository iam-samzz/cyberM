// project1 — login page logic (merged project: dummy auth)

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const sunIcon = `
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2 M12 20v2 M4.93 4.93l1.42 1.42
  M17.65 17.65l1.42 1.42 M2 12h2 M20 12h2
  M4.93 19.07l1.42-1.42 M17.65 6.35l1.42-1.42"></path>
`;

const moonIcon = `
  <path d="M20.9 13A9 9 0 0 1 11 3.1
  9 9 0 1 0 20.9 13Z"></path>
`;

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark-theme", isDark);
  document.body.classList.toggle("dark-theme", isDark);
  document.body.dataset.theme = isDark ? "dark" : "light";
  themeIcon.innerHTML = isDark ? moonIcon : sunIcon;

  document.querySelectorAll("[data-logo-light][data-logo-dark]").forEach(logo => {
    logo.src = isDark ? logo.dataset.logoDark : logo.dataset.logoLight;
  });

  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

try {
  applyTheme(localStorage.getItem("cybermTheme") || "light");
} catch {
  applyTheme("light");
}

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("dark-theme") ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("cybermTheme", next); } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".password-action").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    button.textContent = show ? "Hide" : "Show";
  });
});

/* ===== Dummy auth wiring ===== */
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function showMessage(text, success = false) {
  message.textContent = text;
  message.style.color = success ? "#159447" : "#d64545";
  message.classList.add("show");
}

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;

  if (!window.CyberAuth) {
    showMessage("Authentication system not loaded.");
    return;
  }

  const result = window.CyberAuth.login(emailInput.value.trim(), passwordInput.value);
  if (!result.ok) {
    showMessage(result.error);
    return;
  }

  showMessage("Signed in successfully. Redirecting to your workspace…", true);

  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "dashboard.html";
  setTimeout(() => { window.location.href = next; }, 450);
});

document.getElementById("forgotPassword").addEventListener("click", event => {
  event.preventDefault();
  showMessage("Connect a password-reset service to recover your account.");
});