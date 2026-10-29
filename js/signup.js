// project1 — signup page logic (merged project: dummy auth)

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

/* ===== Dummy signup wiring ===== */
const signupForm = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const message = document.getElementById("message");

function showMessage(text, success = false) {
  message.textContent = text;
  message.style.color = success ? "#159447" : "#d64545";
  message.classList.add("show");
}

signupForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!signupForm.reportValidity()) return;

  if (fullName.value.trim().length < 2) {
    showMessage("Please enter your full name.");
    fullName.focus();
    return;
  }
  if (password.value.length < 8) {
    showMessage("Your password must have at least 8 characters.");
    password.focus();
    return;
  }
  if (password.value !== confirmPassword.value) {
    showMessage("Your passwords do not match.");
    confirmPassword.focus();
    return;
  }
  if (!terms.checked) {
    showMessage("Please accept the terms and conditions.");
    terms.focus();
    return;
  }
  if (!window.CyberAuth) {
    showMessage("Authentication system not loaded.");
    return;
  }

  const result = window.CyberAuth.signup({
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    password: password.value
  });

  if (!result.ok) {
    showMessage(result.error);
    return;
  }

  showMessage("Account created! Redirecting to your workspace…", true);
  setTimeout(() => { window.location.href = "dashboard.html"; }, 600);
});

document.getElementById("termsLink").addEventListener("click", event => {
  event.preventDefault();
  showMessage("Add your actual Terms of Service page.");
});

document.getElementById("privacyLink").addEventListener("click", event => {
  event.preventDefault();
  showMessage("Add your actual Privacy Policy page.");
});