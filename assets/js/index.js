// Looping all the sections
const sections = document.querySelectorAll('section');

let isDragging = false;

// Event listener to set dragging flag
interact('.draggable').on('dragstart', () => {
  isDragging = true;
}).on('dragend', () => {
  isDragging = false;
});

sections.forEach(section => {
  // For all the hidden elements in each section
  const hidden = section.querySelectorAll('.hidden');

  // Event listener to handle section expansion
  section.addEventListener('click', e => {
    if (!isDragging) {
      // Collapse other expanded sections and hide their objects
      sections.forEach(s => {
        if (s !== section && s.classList.contains('active')) {
          s.classList.remove('active');
          s.querySelectorAll('.hidden.showObject').forEach(obj => {
            obj.classList.remove('showObject');
            const draggable = section.querySelector('.draggable');

            draggable.style.transform = 'translateX(0)';
            draggable.removeAttribute('data-x');

          });
          // Reset the collapsed section to its original position after a delay
          setTimeout(() => {
            s.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
            s.style.transform = 'none'
            s.style.height = '30vh'; // Adjust the initial height value
          }, 750)
        }
      });



      // Toggle 'active' class for the clicked section
      const isActive = section.classList.toggle('active');

      // Show/hide objects for the clicked section after a slight delay for smoother transition
      setTimeout(() => {
        hidden.forEach(hide => {
          hide.classList.toggle('showObject', isActive);
        });
      }, 750);

      if (isActive) {
        // Calculate the translateX and translateY values to center the clicked section
        const rect = section.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const translateX = (viewportWidth / 2) - (rect.width / 2) - rect.left;
        const translateY = (viewportHeight / 2) - (rect.height / 2) - rect.top;

        // Apply styles to center and expand the clicked section
        section.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
        section.style.transformOrigin = 'center center'; // Set the transform-origin to center before expansion
        section.style.transform = `scale(1.05)`; // Expand
        section.style.height = '80vh'; // Adjust the expanded height value
      } else {
        // Apply styles to collapse the clicked section
        section.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
        section.style.transform = 'none'; // Collapse, reset to initial position
        section.style.height = '30vh'; // Adjust the collapsed height value
        const draggable = section.querySelector('.draggable');
        if (!isActive) {
        draggable.style.transform = 'translateX(0)';
        draggable.removeAttribute('data-x');
        }
      }
    }
  });
});

// Your existing interact code for dragging (remains unchanged)
interact('.draggable').draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
  ],
  autoScroll: true,

  listeners: {
    move: event => {
      const target = event.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      target.style.transform = `translate(${x}px)`;
      target.setAttribute('data-x', x);
    },
    end: event => {}
  }
});


// Intersection Observer for Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("expand");
    } else {
      entry.target.classList.remove("expand");
    }
  })
})
sections.forEach((el) => observer.observe(el));
