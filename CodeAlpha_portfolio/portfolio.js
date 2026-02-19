const home = document.getElementById("home");
home.addEventListener("click", () =>{
    window.location.href = "portfolio.html";
})

const photo = document.getElementById("photo");
photo.addEventListener("click", () =>{
    window.location.href = "photo.html";
})

const about = document.getElementById("about");         
about.addEventListener("click", () =>{
    window.location.href = "about.html";
})

const contact = document.getElementById("contact");
contact.addEventListener("click", () =>{
    window.location.href = "contact.html";
})

const button = document.getElementById("button");
button.addEventListener("click", () =>{
    window.location.href = "photo.html";
})

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "pink";
        }
    });
});
