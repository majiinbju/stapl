gsap.registerPlugin(ScrollToPlugin, Draggable);
const carousels = document.querySelectorAll('.draggable');
carousels.forEach(carousel => {
  Draggable.create(carousel, {
    type: 'x', // Restrict movement to horizontal axis
    bounds: carousel.parentElement, // Restrict movement within the parent element
  });
});
