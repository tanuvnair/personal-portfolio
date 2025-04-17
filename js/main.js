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
