gsap.registerPlugin(Draggable);


const bodyElement = document.querySelector('.wrapper');
const mainElement = document.querySelector('main');
const sections = document.querySelectorAll('#section');

let isDragging = false;
let lastTouch = 0;
let isScrolling = false;
let scrollSpeed = 0;
let lastScrollTime = 0;
let lastScrollDelta = 0;
let sx = 0,
  sy = 0;
let dx = sx,
  dy = sy;
let scrollTimeout;
let expandTimeout;

sections.forEach(section => {
  const carousel = section.querySelector('.carousel');
  let isDragging = false;
  let startX = 0;
  let endX = 0;

  // Loop through each element and make it draggable using GSAP Draggable
  document.querySelectorAll('.draggable').forEach(element => {
    gsap.set(element, { x: 0 }); // Set initial x position

    Draggable.create(element, {
      type: 'x', // Restrict movement to horizontal axis
      bounds: element.parentElement, // Restrict movement within the parent element
      edgeResistance: 1, // Simulate 'endOnly' behavior from interact.js
      onDrag: function() {
        // Update the element's transform during drag
        gsap.set(element, { x: this.x });
      },
      onRelease: function() {
        // This is similar to the 'end' listener in interact.js
        // You can add any necessary logic here when dragging ends
      }
    });
  });
  carousel.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
  });

  carousel.addEventListener('mouseup', e => {
    if (isDragging) {
      isDragging = false;
      endX = e.clientX || e.changedTouches[0].clientX;

      const distance = endX - startX;
      const momentum = 0.9; // Adjust momentum factor as needed
      const duration = 750; // Adjust duration for animation

      const distanceWithMomentum = distance * momentum;
      const targetX = carousel.scrollLeft + distanceWithMomentum;

      gsap.to(carousel, { scrollLeft: targetX, duration: duration, ease: 'power2.out' });
    }
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
  });
  const hidden = section.querySelectorAll('.hidden');

});
