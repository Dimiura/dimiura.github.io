// Efeito na foto Floating:
gsap.to('.floating-circle', {
    y: -10, 
    repeat: -1, 
    yoyo: true, 
    duration: 1.5, 
    ease: 'sine.inOut' 
});

// Efeito de imersão h2:
const titulo = document.getElementById("titulo");

titulo.addEventListener("mouseenter", () => {
    gsap.to(titulo, {
        scale: 1.1, 
        color: "#fff", 
        duration: 0.3, 
        ease: "power1.out" 
    });
});

titulo.addEventListener("mouseleave", () => {
    gsap.to(titulo, {
        scale: 1, 
        color: "#fff", 
        duration: 0.3, 
        ease: "power1.out" 
    });
});

// Efeito Loading:



// SmoothScroll Efeito:

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' 
    });
}
 
// Efeito de digitação:
const titles = ["Diego Miura Fogacio", "Full Stack Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; 
const deletingSpeed = 50; 
const pauseDuration = 1000; 

function type() {
    const currentTitle = titles[index];
    document.getElementById("titulo").textContent = currentTitle.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentTitle.length) {
        setTimeout(() => {
            deleteTitle();
        }, pauseDuration);
    } else {
        setTimeout(type, typingSpeed);
    }
}

function deleteTitle() {
    const currentTitle = titles[index];
    document.getElementById("titulo").textContent = currentTitle.slice(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
        index = (index + 1) % titles.length;
        charIndex = 0;
        setTimeout(type, pauseDuration);
    } else {
        setTimeout(deleteTitle, deletingSpeed);
    }
}


type();


// Underline NAV:
function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
            });

            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active'); 
            }
        }
    });
}


document.addEventListener("scroll", updateActiveLink);


document.addEventListener("DOMContentLoaded", updateActiveLink);


// Cards Experience:



    const cards = document.querySelectorAll('.experience-card');

    gsap.from(cards, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%', 
            toggleActions: 'play none none reverse'
        }
    });

