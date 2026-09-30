document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener los elementos del DOM necesarios
  const navbarCollapseEl = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('#nav-menu .nav-link');
  
  // 2. Obtener la instancia del Collapse de Bootstrap creada por los data-attributes
  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl, {
    toggle: false
  });

  // 3. Cerrar automáticamente el menú móvil al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Cambiar la clase activa visualmente al hacer clic
      navLinks.forEach(l => l.classList.remove('nav-link-active'));
      event.currentTarget.classList.add('nav-link-active');

      // Si la barra está desplegada en modo móvil, la cerramos
      if (navbarCollapseEl.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // 4. Detectar eventos de apertura y cierre
  navbarCollapseEl.addEventListener('show.bs.collapse', () => {
    console.log('El menú móvil se está abriendo');
  });

  navbarCollapseEl.addEventListener('hidden.bs.collapse', () => {
    console.log('El menú móvil se ha cerrado');
  });
});