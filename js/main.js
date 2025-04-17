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

// Typing animation
const typingText = document.getElementById("typing-text");
const phrases = [
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Thinker",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(typeWriter, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
    } else {
        const speed = isDeleting ? 100 : 150;
        setTimeout(typeWriter, speed);
    }
}

// Start the typing effect when page loads
window.addEventListener("load", () => {
    setTimeout(typeWriter, 1000);
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
