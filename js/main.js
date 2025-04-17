// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

html.classList.add(savedTheme);

themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    html.classList.toggle("light");

    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

// Get the current year for the footer
document.getElementById("year").textContent = new Date().getFullYear();
