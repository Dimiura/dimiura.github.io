gsap.to('.floating-circle', {
    y: -10, 
    repeat: -1, 
    yoyo: true, 
    duration: 1.5, 
    ease: 'sine.inOut' 
});

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

setTimeout(() => {
    document.getElementById('loader').style.display = 'none'; 
    document.getElementById('content').style.display = 'block'; 
    document.body.style.overflow = 'auto'; 
}, 5000);

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' 
    });
}
 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});