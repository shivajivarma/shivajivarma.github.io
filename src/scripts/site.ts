// Site behaviour: the theme switch and reveal-on-scroll. Both are enhancements: without
// JavaScript the page follows the system theme and every section is visible.

const root = document.documentElement;
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme(): "light" | "dark" {
  const set = root.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return darkQuery.matches ? "dark" : "light";
}

function syncThemeIcons() {
  const next = currentTheme() === "dark" ? "light_mode" : "dark_mode";
  document.querySelectorAll<HTMLElement>(".theme-toggle wc-icon").forEach((icon) => {
    icon.setAttribute("name", next);
  });
}

document.querySelectorAll(".theme-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const theme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage blocked: the choice lasts for this page only */
    }
    syncThemeIcons();
  });
});
darkQuery.addEventListener("change", syncThemeIcons);
syncThemeIcons();

// Reveal: elements with [data-reveal] fade in the first time they scroll into view.
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (
  revealables.length &&
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealables.forEach((el) => {
    // Already on screen at load: show without animating.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
  root.classList.add("js");
}

// Reading progress bar on journal posts.
const progress = document.querySelector<HTMLElement>(".reading-progress");
const article = document.querySelector<HTMLElement>("[data-progress-target]");
if (progress && article) {
  let ticking = false;
  const update = () => {
    const rect = article.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
    progress.style.transform = `scaleX(${done})`;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}
