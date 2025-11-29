// Script pour les interactions du portfolio

// Récupérer les éléments du modal UNE SEULE FOIS
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeModal = document.querySelector(".close-modal");

// Fonction pour ouvrir le modal
function openModal(img) {
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
}

// Fermer le modal
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

// Fermer en cliquant en dehors de l'image
if (modal) {
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// Fermer avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal) {
        modal.style.display = "none";
    }
});

// Animation de la navigation au scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation d'apparition des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    // Animer les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animer les compétences
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(30px)';
        skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(skill);
    });

    // Animer les loisirs
    const hobbyCards = document.querySelectorAll('.hobby-card');
    hobbyCards.forEach(hobby => {
        hobby.style.opacity = '0';
        hobby.style.transform = 'translateY(30px)';
        hobby.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(hobby);
    });

    // AJOUTER LES ÉVÉNEMENTS DE CLIC AUX IMAGES DES LOISIRS
    // Section Peinture
    const peintureImages = document.querySelectorAll('.hobby-images-grid .image-item img');
    peintureImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });
    
    // Section Dessin
    const dessinImages = document.querySelectorAll('.hobby-images-grid-3 .image-item img');
    dessinImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des compétences au hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.background = '#2c5aa0';
        this.style.color = 'white';
        this.style.transform = 'scale(1.05)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.color = '#495057';
        this.style.transform = 'scale(1)';
    });
});

// Contrôle de la navigation mobile (pour futur responsive)
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.className = 'menu-toggle';
    menuToggle.style.display = 'none';
    
    const navMenu = document.querySelector('.nav-menu');
    document.querySelector('.nav-container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Cacher le toggle menu sur desktop
    function checkWindowSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
}

// Démarrer les fonctions
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Ajouter l'année actuelle dans le footer
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.textContent = footer.textContent.replace('2024', year);
    }
});

// Effet de typing pour le hero (optionnel)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Démarrer l'effet typing sur le titre hero (optionnel)
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Animation de compteur pour les statistiques (pour futur utilisation)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Console log de bienvenue
console.log('🚀 Portfolio chargé avec succès!');
console.log('✨ Développé avec HTML, CSS et JavaScript');
console.log('🎯 Bonne navigation!');