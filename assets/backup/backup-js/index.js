// Looping all the sections
const sections = document.querySelectorAll('.section')
sections.forEach(section => {
  // Setting variables
  const hidden = section.querySelectorAll('.hidden')
  const drag = section.querySelector('.draggable')
  const summary = section.querySelector('.summary')
  // For all the hidden elements in each section
  hidden.forEach(hide => {
    // Event listener to add 'active' and 'show classes'
    section.addEventListener('click', e => {
      for(var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active')
        hide.classList.remove('showObject')
      }
      section.classList.add('active')
      hide.classList.add('showObject')
      // No delay on drag
      drag.style.transition = "all 0s ease-in-out"
      })
  })
// End of section loop
})

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


