document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el Menú Hamburguesa ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const closeMenu = () => {
        navMenu.classList.remove('active');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    // --- Lógica para la Animación de Scroll ---
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: deja de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // El elemento se activa cuando un 10% es visible
    });

    hiddenElements.forEach((el) => observer.observe(el));

});
