// Módulo principal para encapsular todas as funcionalidades da aplicação
const App = (function () {
    // Módulo para o efeito de imersão no h2 (id="titulo")
    // Aplica uma animação de escala ao passar o mouse
    const TitleHoverEffect = (function () {
        const init = () => {
            const titulo = document.getElementById("titulo");
            if (!titulo) {
                console.warn("Elemento com id='titulo' não encontrado.");
                return;
            }

            titulo.addEventListener("mouseenter", () => {
                gsap.to(titulo, {
                    scale: 1.1, // Aumenta a escala em 10%
                    duration: 0.3,
                    ease: "power1.out"
                });
            });

            titulo.addEventListener("mouseleave", () => {
                gsap.to(titulo, {
                    scale: 1, // Retorna à escala original
                    duration: 0.3,
                    ease: "power1.out"
                });
            });
        };

        return { init };
    })();

    // Módulo para configurar os carrosséis Swiper
    const SwiperModule = (function () {
        // Carrossel principal (.mySwiper)
        const initMainSwiper = () => {
            new Swiper(".mySwiper", {
                loop: true,
                pagination: {
                    el: ".swiper-pagination-main", // Classe única para paginação
                    clickable: true,
                },
                autoplay: {
                    delay: 3000, // Troca de slides a cada 3 segundos
                    disableOnInteraction: false,
                },
                speed: 500, // Velocidade da transição
            });
        };

        // Carrossel de projetos (.mySwiperProjects)
        const initProjectsSwiper = () => {
            new Swiper(".mySwiperProjects", {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination-projects", // Classe única para paginação
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
        };

        const init = () => {
            initMainSwiper();
            initProjectsSwiper();
        };

        return { init };
    })();

   
    const TypingEffect = (function () {
        const titles = ["Diego Miura Fogacio", "Front-End Developer"];
        let index = 0; 
        let charIndex = 0; 
        const typingSpeed = 100; 
        const deletingSpeed = 50;
        const pauseDuration = 1000; 
        const titleElement = document.getElementById("titulo");

        const type = () => {
            if (!titleElement) {
                console.warn("Elemento com id='titulo' não encontrado para efeito de digitação.");
                return;
            }
            const currentTitle = titles[index];
            titleElement.textContent = currentTitle.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentTitle.length) {
                setTimeout(deleteTitle, pauseDuration);
            } else {
                setTimeout(type, typingSpeed);
            }
        };

        const deleteTitle = () => {
            const currentTitle = titles[index];
            titleElement.textContent = currentTitle.slice(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                index = (index + 1) % titles.length; 
                charIndex = 0;
                setTimeout(type, pauseDuration);
            } else {
                setTimeout(deleteTitle, deletingSpeed);
            }
        };

        const init = () => {
            type();
        };

        return { init };
    })();

    const NavActive = (function () {
        const updateActiveLink = () => {
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
        };

        const init = () => {
            document.addEventListener("scroll", updateActiveLink);
            document.addEventListener("DOMContentLoaded", updateActiveLink);
        };

        return { init };
    })();

    const ExperienceCards = (function () {
        const init = () => {
            const cards = document.querySelectorAll('.experience-card');
            if (!cards.length) {
                console.warn("Nenhum elemento com classe '.experience-card' encontrado.");
                return;
            }
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
        };

        return { init };
    })();

    const ParticlesEffect = (function () {
        const init = () => {
            if (!document.getElementById('particles-js')) {
                console.warn("Elemento com id='particles-js' não encontrado.");
                return;
            }
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
        };

        return { init };
    })();

    const SkillsAnimation = (function () {
        const init = () => {
            const skillBoxes = document.querySelectorAll(".skill-box");
            if (!skillBoxes.length) {
                console.warn("Nenhum elemento com classe '.skill-box' encontrado.");
                return;
            }
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
                    }
                }
            );
        };

        return { init };
    })();

    const ProjectsCarousel = (function () {
        const init = () => {
            const carousel = document.querySelector('#projectsCarousel');
            if (!carousel) {
                console.warn("Elemento com id='projectsCarousel' não encontrado.");
                return;
            }
            const carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 3000,
                wrap: true,
                touch: true
            });

            carousel.addEventListener('mouseenter', () => {
                carouselInstance.pause();
            });

            carousel.addEventListener('mouseleave', () => {
                carouselInstance.cycle();
            });
        };

        return { init };
    })();

    const init = () => {
        TitleHoverEffect.init();
        SwiperModule.init();
        TypingEffect.init();
        NavActive.init();
        ExperienceCards.init();
        ParticlesEffect.init();
        SkillsAnimation.init();
        ProjectsCarousel.init();
    };

    return { init };
})();

const buttons = document.querySelectorAll('#tab-buttons button');
const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const tabId = button.getAttribute('data-tab');
            contents.forEach(content => {
                content.classList.remove('active', 'fade-in');
                if (content.id === tabId) {
                    content.classList.add('active');
                    void content.offsetWidth;
                    content.classList.add('fade-in');
                }
            });
        });
    });

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    App.init();
});


