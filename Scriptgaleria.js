const galleryCarousel = document.querySelector('.gallery-carousel');
let currentIndex = 0;

function moveNext() {
   const imageWidth = galleryCarousel.querySelector('img').offsetWidth;
    currentIndex++;
    if (currentIndex >- galleruCarousel.children.length) {
        currentIndex = 0;
    }
    galleryCarousel.style.transform = 'translatex (-{imsgeWidth * currentIndex}px')
setInterval(moveNext, 2000); // mueve autometicamente cad dos segundos