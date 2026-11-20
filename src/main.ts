import "./style.css";

type Theme = "light" | "dark";

const THEME_KEY = "theme";
const root = document.documentElement;
const toggle = document.querySelector<HTMLButtonElement>("#theme-toggle");

function currentTheme(): Theme {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage can be unavailable; the theme still applies for this visit.
  }
}

function renderToggle(theme: Theme): void {
  if (!toggle) return;

  const next = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} theme`;
  toggle.setAttribute("aria-label", label);
  toggle.title = label;
}

function applyTheme(theme: Theme): void {
  root.dataset.theme = theme;
  renderToggle(theme);
}

applyTheme(currentTheme());

toggle?.addEventListener("click", () => {
  const next: Theme = currentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  storeTheme(next);
});

// Follow the system theme until the visitor picks one themselves.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (storedTheme() === null) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

const year = document.querySelector<HTMLSpanElement>("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
