// Scroll suave con offset para header fijo
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modo oscuro/claro con persistencia
const btn = document.getElementById('modo');
const body = document.body;

// Cargar preferencia guardada
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);
btn.textContent = savedTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';

btn.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        btn.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        btn.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
    }
});

// Animación de entrada para las tarjetas
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a cards y sections
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .skill-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});