
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



// const container = document.getElementById('globe-container');
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(container.clientWidth, container.clientHeight);
// container.appendChild(renderer.domElement);


// const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
// const globeMaterial = new THREE.MeshBasicMaterial({
//     color: 0x000000, 
//     wireframe: true,
//     opacity: 0.5,
//     transparent: true
// });
// const globe = new THREE.Mesh(globeGeometry, globeMaterial);
// scene.add(globe);


// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);


// camera.position.z = 3;


// function addSkillIcon(iconClass, latitude, longitude) {
//     const spriteMaterial = new THREE.SpriteMaterial({
//         map: createIconTexture(iconClass), 
//         transparent: true,
//     });

//     const sprite = new THREE.Sprite(spriteMaterial);
//     sprite.scale.set(0.15, 0.15, 1);  

//     const sphericalCoords = new THREE.Spherical(1.5, latitude, longitude); 
//     const iconPosition = new THREE.Vector3().setFromSpherical(sphericalCoords);
//     sprite.position.set(iconPosition.x, iconPosition.y, iconPosition.z);


//     scene.add(sprite);


//     sprite.on('mouseover', function () {
//         gsap.to(sprite.position, { z: 2, duration: 0.5 }); 
//     });

//     sprite.on('mouseout', function () {
//         gsap.to(sprite.position, { z: 1.5, duration: 0.5 }); 
//     });
// }


// function createIconTexture(iconClass) {
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');
//     context.font = '50px FontAwesome';
//     context.fillStyle = '#ffffff';
//     context.fillText(iconClass, 0, 50);

//     const texture = new THREE.CanvasTexture(canvas);
//     return texture;
// }


// addSkillIcon('fa-html5', Math.PI / 4, Math.PI / 4);  
// addSkillIcon('fa-css3-alt', Math.PI / 4, -Math.PI / 4); 
// addSkillIcon('fa-js-square', -Math.PI / 4, Math.PI / 4); 
// addSkillIcon('fa-python', -Math.PI / 4, -Math.PI / 4);  
// addSkillIcon('fa-database', Math.PI / 6, Math.PI / 2); 
// addSkillIcon('fa-server', Math.PI / 3, -Math.PI / 3);
// addSkillIcon('fa-hubspot', Math.PI / 3, Math.PI / 3); 
// addSkillIcon('fa-php', -Math.PI / 6, -Math.PI / 3);    
// addSkillIcon('fa-wordpress', -Math.PI / 6, Math.PI / 3);  
// addSkillIcon('fa-bolt', Math.PI / 3, Math.PI / 2);   
// addSkillIcon('fa-plug', -Math.PI / 3, -Math.PI / 2);   


// function animate() {
//     requestAnimationFrame(animate);
//     globe.rotation.y += 0.01; 
//     renderer.render(scene, camera);
// }
// animate();

// window.addEventListener('resize', () => {
//     camera.aspect = container.clientWidth / container.clientHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(container.clientWidth, container.clientHeight);
// });

// Button Sound do Portfólio:


document.addEventListener('click', () => {
  const hoverSound = document.getElementById('hoverSound');
  hoverSound.play().catch(() => {
    console.log('Áudio habilitado após a interação do usuário.');
  });
}, { once: true }); 

const hoverButton = document.getElementById('hoverButton');
const hoverSound = document.getElementById('hoverSound');

hoverButton.addEventListener('mouseenter', () => {
  hoverSound.currentTime = 0; 
  hoverSound.play().catch(error => {
    console.error('Erro ao reproduzir o som:', error);
  });
});

// curriculo pdf

function openPDF() {
  window.open('assets/Curriculo_Diego_Miura.pdf', '_blank');
}
