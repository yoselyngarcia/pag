document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las imágenes del carrusel
    const images = document.querySelectorAll('.gallery-image');
    let index = 0;

    function changeImage() {
        // Ocultar todas las imágenes
        images.forEach(img => {
            img.style.display = 'none';
        });

        // Mostrar la imagen actual
        images[index].style.display = 'block';

        // Incrementar el índice, volviendo al inicio si se llega al final
        index = (index + 1) % images.length;
    }

    // Cambiar la imagen cada 3 segundos (3000 milisegundos)
    setInterval(changeImage, 3000);
});
