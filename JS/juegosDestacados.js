//arreglo para los juegos destacados
const juegosDestacados = [
    {//juego destacado 1
        id: 1,
        imagen:"./IMAGE/eldenring.jpg",
        nombre: "Elden Ring",
        categoria: "RPG",
        consola : "PC/PS5/XBOX",
    },
    // juego destacado 2
    {
        id: 2,
        imagen:"./IMAGE/baldurs.jpg",
        nombre: "Baldur's Gate 3",
        categoria: "RPG",
        consola : "PC/PS5",
    },

    {//juego destacado 3
        id: 3,
        imagen:"./IMAGE/",
        nombre: "God of War Ragnarok",
        categoria: "Accion",
        consola : "PS5/PS4",
    },

    {// juego destacado 4
        id: 4,
        imagen:"./IMAGE/",
        nombre: "Zelda BofTWfh",
        categoria: "RPG",
        consola : "Nintendo Switch",
    },
];
const imagenesRespaldo = "";

// Imagen gris
const imagenRespaldo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 200 200'><rect width='100%' height='100%' fill='%23e2e2e2'/><path d='M60 140 L90 100 L115 125 L135 95 L165 140 Z' fill='%23cccccc'/><circle cx='90' cy='80' r='10' fill='%23cccccc'/></svg>";

function cargarJuegosDestacados() {
  const contenedor = document.getElementById("container-juegos-destacados");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  juegosDestacados.forEach((juego) => {
    // Definir la fuente de la imagen (respaldo si está vacía)
    const srcImagen = juego.imagen && juego.imagen.trim() !== "" 
      ? juego.imagen 
      : imagenRespaldo;

    // Crear la columna de Bootstrap
    const col = document.createElement("div");
    col.classList.add("col");

    // Estructura interna de la imagen
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm rounded-3">
        <!-- Imagen superior del juego -->
        <div class="p-2">
          <img 
            src="${srcImagen}" 
            class="card-img-top rounded-3" 
            alt="${juego.nombre}"
            style="height: 220px; object-fit: cover; background-color: #e2e2e2;"
          >
        </div>
        
        <!-- Detalles del juego -->
        <div class="card-body pt-1 pb-3 px-3 d-flex flex-column justify-content-end">
          <p class="card-title text-dark mb-1 fw-normal" style="font-size: 0.95rem;">
            ${juego.nombre}
          </p>
          <p class="card-text fw-bold text-dark mb-1" style="font-size: 0.9rem;">
            ${juego.categoria}
          </p>
          <p class="card-text text-muted mb-0" style="font-size: 0.8rem; font-weight: 500;">
            ${juego.consola}
          </p>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
}// fin cargarJuegosDestacados

// Cargar al iniciar la página
document.addEventListener("DOMContentLoaded", cargarJuegosDestacados);


