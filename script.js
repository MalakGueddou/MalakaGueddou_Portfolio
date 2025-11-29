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
        if (captionText) captionText.innerHTML = img.alt;
    }
}

// Fermer le modal
if (closeModal) {
    closeModal.onclick = function() {
        if (modal) modal.style.display = "none";
    }
}

// Fermer en cliquant en dehors
if (modal) {
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// Fermer avec Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal) {
        modal.style.display = "none";
    }
});

// INITIALISATION - Tout dans un seul DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Portfolio initialisé");
    
    // Ajouter les événements aux images
    const allHobbyImages = document.querySelectorAll('.hobby-images-grid img, .hobby-images-grid-3 img');
    allHobbyImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });
    
    // Le reste de votre code existant (animations, etc.)
    // ... (gardez tout votre code d'animation ici)
    
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

    // VOTRE CODE EXISTANT - copiez tout le reste ici
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
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ... (TOUT VOTRE AUTRE CODE)
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

// Le reste de vos fonctions existantes...
// ... (copiez toutes vos autres fonctions ici)