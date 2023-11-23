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
