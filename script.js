window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add("active");

            });

        }

    });

};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});



const roles = [

    "Front-End Developer",

    "React Developer",

    "Web Designer",

    "UI Developer"

];

let roleIndex = 0;

let charIndex = 0;

const typingElement = document.querySelector(".home-content h2");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 2000);

    }

}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 60);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeText, 400);

    }

}

typingElement.textContent = "";

typeText();


ScrollReveal({

    distance: "60px",

    duration: 2000,

    delay: 200,

    reset: false

});

ScrollReveal().reveal(".home-content", {

    origin: "left"

});

ScrollReveal().reveal(".home-image", {

    origin: "right"

});

ScrollReveal().reveal(".about-card", {

    origin: "bottom"

});

ScrollReveal().reveal(".skill-card", {

    interval: 150

});

ScrollReveal().reveal(".project-card", {

    interval: 200

});

ScrollReveal().reveal(".contact-box", {

    interval: 150

});


const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};