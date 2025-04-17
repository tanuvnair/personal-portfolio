// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.getElementById("projects-container");

    // Create centered loading spinner
    const loadingDiv = document.createElement("div");
    loadingDiv.className =
        "col-span-full flex flex-col items-center justify-center py-16";
    loadingDiv.innerHTML = `
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p class="mt-4">Loading projects...</p>
    `;
    projectsContainer.appendChild(loadingDiv);

    // Fetch repositories from GitHub API
    fetch(
        "https://api.github.com/users/tanuvnair/repos?sort=updated&direction=desc&per_page=10"
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((repositories) => {
            // Clear loading indicator
            projectsContainer.innerHTML = "";

            // Filter out forks if you only want original projects and limit to 10
            const projects = repositories
                .filter((repo) => !repo.fork)
                .slice(0, 8);

            if (projects.length === 0) {
                projectsContainer.innerHTML =
                    '<p class="text-center col-span-full py-8">No projects found on GitHub.</p>';
                return;
            }

            // Display each project
            projects.forEach((repo) => {
                const projectCard = document.createElement("div");
                projectCard.className =
                    "rounded-lg overflow-hidden bg-background border-2 border-secondary shadow-md hover:shadow-lg transition-shadow";

                projectCard.innerHTML = `
                    <div class="p-4 md:p-6">
                        <h3 class="text-xl font-semibold mb-2">
                            ${repo.name}
                        </h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            ${repo.description || "No description provided"}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            ${
                                repo.language
                                    ? `<span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">${repo.language}</span>`
                                    : ""
                            }
                            <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm">${
                                repo.stargazers_count
                            } ★</span>
                            <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm">Updated ${formatDate(
                                repo.updated_at
                            )}</span>
                        </div>
                        <div class="mt-4">
                            <a href="${
                                repo.html_url
                            }" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-accent hover:underline">
                                View on GitHub
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                            ${
                                repo.homepage
                                    ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="ml-4 inline-flex items-center text-green-600 dark:text-green-400 hover:underline">
                                Live Demo
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>`
                                    : ""
                            }
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch((error) => {
            console.error("Error fetching GitHub projects:", error);
            projectsContainer.innerHTML = `
                <div class="col-span-full text-center py-8 text-red-500">
                    <p>Error loading projects from GitHub.</p>
                    <p class="mt-2">Please try again later or visit <a href="https://github.com/tanuvnair" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">my GitHub profile</a> directly.</p>
                </div>
            `;
        });

    function formatDate(dateString) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
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
