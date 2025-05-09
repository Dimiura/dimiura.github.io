


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

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  speed: 500,
});

const swiperProjects = new Swiper(".mySwiperProjects", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

 
// Efeito de digitação:
const titles = ["Diego Miura Fogacio", "Front-End Developer"];
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

// Particles:


particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ff00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ff00",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});


// Skills Section

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
      ".skill-box",
      { opacity: 0, y: 50 },
      {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
              trigger: "#skills",
              start: "top 80%",
          },
      }
  );
});


 
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('#projectsCarousel');
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true,
            touch: true
        });
        
        carousel.addEventListener('mouseenter', function() {
            carouselInstance.pause();
        });
        
        carousel.addEventListener('mouseleave', function() {
            carouselInstance.cycle();
        });
    });


