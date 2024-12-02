// Mensaje de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido al tutorial interactivo de HTML, CSS y JavaScript!');
});

// Añadir efecto de desplazamiento suave a los enlaces del índice
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar color de fondo de las secciones al pasar el mouse
const sections = document.querySelectorAll('main section');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#f0f8ff';
    });

    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = 'white';
    });
});
