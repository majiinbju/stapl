// Looping all the sections
const sections = document.querySelectorAll('section');

let isDragging = false;

interact('.draggable').on('dragstart', () => {
  isDragging = true;
}).on('dragend', () => {
  isDragging = false;
});

sections.forEach(section => {
  const hidden = section.querySelectorAll('.hidden');

  section.addEventListener('click', e => {
    if (!isDragging) {
      sections.forEach(s => {
        if (s !== section && s.classList.contains('active')) {
          s.classList.remove('active');
          let projectInfo = s.querySelector('.project-info');
          projectInfo.querySelectorAll('.hidden.showObject').forEach(obj => {
            obj.classList.remove('showObject');
          });
          s.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
          s.style.transform = 'none';
          s.style.height = '30vh';
        }
      });

      const isActive = section.classList.toggle('active');

      setTimeout(() => {
        hidden.forEach(hide => {
          hide.classList.add('showObject', isActive);
        });

        // After the expansion animation finishes
        const expandTransitionDuration = 750; // Change this value if the transition duration changes
        setTimeout(() => {
          // Calculate the total height of the sections before and after the expanded section
          const sectionsBefore = Array.from(sections).slice(0, Array.from(sections).indexOf(section));
          const sectionsAfter = Array.from(sections).slice(Array.from(sections).indexOf(section) + 1);
          const totalHeightBefore = sectionsBefore.reduce((total, sec) => total + sec.clientHeight, 0);
          const totalHeightAfter = sectionsAfter.reduce((total, sec) => total + sec.clientHeight, 0);
          const headerHeight = 0; // Change this value based on your header height or any other fixed offset

          // Set the scroll position to center the expanded section
          window.scrollTo({
            top: totalHeightBefore + headerHeight, // Consider header or any fixed offset
            behavior: 'smooth'
          });
        }, expandTransitionDuration);
      }, 750);

      if (isActive) {
        // Calculate the necessary styles for expanding the section
        section.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
        section.style.transformOrigin = 'center center';
        section.style.height = '80vh';
      } else {
        section.style.transition = 'transform 0.75s ease-in-out, height 0.75s ease-in-out';
        section.style.height = '30vh';
      }
    }
  });
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
});
sections.forEach((el) => observer.observe(el));
