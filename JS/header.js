document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  // Abrir y cerrar el menú móvil mediante el botón hamburguesa
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');

      // Cambia el ícono de hamburguesa a una "X" al abrir
      const icon = navToggle.querySelector('i');
      if (navMenu.classList.contains('show-menu')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
      } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
      }
    });
  }

  // Cerrar el menú automáticamente al hacer clic en cualquier sección
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
      }
    });
  });
});