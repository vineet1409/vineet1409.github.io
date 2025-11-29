// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      navToggle.classList.add("is-open");
    } else {
      navToggle.classList.remove("is-open");
    }
  });

  // Close nav when a link is clicked (on mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("is-open");
      }
    });
  });
}

// Simple hamburger animation (optional)
const style = document.createElement("style");
style.textContent = `
  .nav-toggle.is-open span:first-child {
    transform: translateY(3.5px) rotate(45deg);
  }
  .nav-toggle.is-open span:last-child {
    transform: translateY(-3.5px) rotate(-45deg);
  }
`;
document.head.appendChild(style);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
