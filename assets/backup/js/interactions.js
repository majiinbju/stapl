export function handleInteractions() {
  const bodyElement = document.querySelector('.wrapper');
  const sections = document.querySelectorAll('section');
  let isDragging = false;

  interact('.draggable').on('dragstart', () => {
    isDragging = true;
  }).on('dragend', () => {
    isDragging = false;
  });

  sections.forEach(section => {
    section.addEventListener('click', () => {
      if (!isDragging && !section.classList.contains('active')) {
        const activeSection = document.querySelector('section.active');
        if (activeSection) {
          activeSection.classList.remove('active');
          // Reset the currently active section
          let projectInfo = activeSection.querySelector('.project-info');
          projectInfo.querySelectorAll('.hidden.showObject').forEach(obj => {
            obj.classList.remove('showObject');
          });
          activeSection.style.transition = 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out';
          activeSection.style.transform = 'none';
          activeSection.style.height = '30vh';
        }

        // Activate the clicked section
        section.classList.add('active');

        const hidden = section.querySelectorAll('.hidden');
        hidden.forEach(hide => {
          hide.classList.add('showObject');
        });

        // Scroll to the activated section
        const totalHeightBefore = Array.from(sections).filter(s => s !== section).reduce((total, sec) => total + sec.clientHeight, 0);
        window.scrollTo({
          top: totalHeightBefore,
          behavior: 'smooth'
        });

        // Expand bodyElement and set section dimensions
        bodyElement.classList.add("expand");
        section.style.transition = 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out';
        section.style.transformOrigin = 'center center';
        section.style.height = '80vh';
        section.style.width = '100%';
      }
    });
  });
}
