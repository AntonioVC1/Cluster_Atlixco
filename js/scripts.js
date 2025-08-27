document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el Menú Hamburguesa ---
    const header = document.querySelector('.header'); // Seleccionamos el header
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const overlay = document.querySelector('.overlay');

    const toggleMenu = () => {
        // Activamos/desactivamos las clases necesarias
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        header.classList.toggle('menu-open'); // Clase para elevar el z-index del header
    };

    const closeMenu = () => {
        // Al cerrar, quitamos todas las clases activas
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        header.classList.remove('menu-open');
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    overlay.addEventListener('click', closeMenu);

    // --- Lógica para la Animación de Scroll (con Stagger) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.section__title.hidden, .section__subtitle.hidden, .contact__grid.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const grids = document.querySelectorAll('.vocation__grid.hidden, .ecosystem__grid.hidden');
    grids.forEach(grid => {
        const cards = grid.querySelectorAll('.vocation__card, .ecosystem__card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
        });
        observer.observe(grid);
    });
});
