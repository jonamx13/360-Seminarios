import { Viewer } from '@photo-sphere-viewer/core';

// Ruta a las imágenes panorámicas
const baseUrl = './';  // Ruta relativa

// Las dos imágenes panorámicas
const image1 = baseUrl + 'Untitled_Panorama-1.png'; // Sala 1
const image2 = baseUrl + 'Untitled_Panorama-3.png'; // Sala 2

// Selección del contenedor y el botón
const viewerContainer = document.getElementById('viewer');
const button = document.getElementById('toggle-button');

// Inicializamos el visor con la imagen de la "Sala 1"
const viewer = new Viewer({
  container: viewerContainer,
  panorama: image1, // Imagen inicial

  mousewheel: true,  // Habilitar el uso de la rueda del ratón
});

// Estado actual de la imagen
let currentImage = image1;

// Función para cambiar la imagen con transición de fade
function toggleImage() {
  // Hacer fade out de la imagen actual
  viewer.container.style.opacity = 0; // Hacer la imagen actual transparente

  // Esperar un tiempo para completar la transición (mismo tiempo que la duración de la transición)
  setTimeout(() => {
    // Alternar entre las dos imágenes
    currentImage = currentImage === image1 ? image2 : image1;
    viewer.setPanorama(currentImage);  // Cambiar la imagen del visor

    // Hacer fade in de la nueva imagen
    viewer.container.style.opacity = 1; // Volver a mostrar la nueva imagen

    // Cambiar el texto del botón
    button.textContent = currentImage === image1 ? 'Cambiar a Sala 2' : 'Cambiar a Sala 1';
  }, 1000);  // Tiempo de espera para la transición
}

// Añadir el evento de clic al botón para cambiar la imagen
button.addEventListener('click', (event) => {
  event.preventDefault();  // Prevenir cualquier acción de recarga que el navegador pueda estar intentando
  toggleImage();
});
