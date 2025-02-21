document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const rightContainer = document.querySelector(".overflow-y-auto");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const containerTop = rightContainer.getBoundingClientRect().top;
                const targetTop = targetSection.getBoundingClientRect().top;
                const scrollTarget = targetTop - containerTop;

                rightContainer.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            }
        });
    });
});

async function fetchGitHubProjects() {
    const username = "tanuvnair";
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`
        );
        const projects = await response.json();

        const sortedProjects = projects
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 3);

        const projectsContainer = document.querySelector("#projects .grid");
        projectsContainer.innerHTML = "";

        sortedProjects.forEach((project) => {
            const technologies = project.topics || [];
            const projectCard = `
                <div class="border-2 border-primary rounded-lg overflow-hidden backdrop-blur-xl">
                    <div class="p-8">
                        <h3 class="text-xl font-bold mb-2">
                         <a href="${
                             project.html_url
                         }" class="text-primary hover:text-text transition-colors">
                            ${project.name}
                         </a>
                    </h3>
                        <p class="text-sm mb-4 opacity-75">
                            ${project.description || "No description available"}
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${technologies
                                .map(
                                    (tech) =>
                                        `<span class="px-2 py-1 bg-primary/20 rounded-full text-xs">${tech}</span>`
                                )
                                .join("")}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchGitHubProjects);

function validateForm(name, email, subject, message) {
    const errors = {};

    if (!name.trim()) {
        errors.name = "Name is required";
    }

    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!subject.trim()) {
        errors.subject = "Subject is required";
    }

    if (!message.trim()) {
        errors.message = "Message is required";
    }

    return errors;
}

function showError(inputId, message) {
    const errorDiv = document.getElementById(`${inputId}-error`);
    if (errorDiv) {
        errorDiv.textContent = message;
    } else {
        const input = document.getElementById(inputId);
        const div = document.createElement("div");
        div.id = `${inputId}-error`;
        div.className = "text-red-500 text-sm mt-1";
        div.textContent = message;
        input.parentNode.appendChild(div);
    }
}

function clearErrors() {
    const errorDivs = document.querySelectorAll('[id$="-error"]');
    errorDivs.forEach((div) => div.remove());
}

document
    .getElementById("contact-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);

        const errors = validateForm(
            formProps.name,
            formProps.email,
            formProps.subject,
            formProps.message
        );

        clearErrors();

        if (Object.keys(errors).length > 0) {
            for (const [field, message] of Object.entries(errors)) {
                showError(field, message);
            }
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML =
            '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch("https://formspree.io/f/myzkodgr", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                form.reset();
                alert(
                    "Thank you for your message! I will get back to you soon."
                );
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            alert(
                "Sorry, there was an error sending your message. Please try again later."
            );
        } finally {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    });
