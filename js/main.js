const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header");
    if (window.pageYOffset > 600) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

$("#message").keyup(function countWord() {
    var message = document.getElementById("message").value;
    message = message.trim();

    var wordCount = 0;

    for (var i = 0; i < message.length; i++) {
        var currentCharacter = message[i];

        if (currentCharacter == " " && message[i + 1] != " ") {
            wordCount++;
        }
    }

    if (message.length >= 1) {
        wordCount++;
    }

    document.getElementById("currentWordCount").innerHTML = wordCount;
});
