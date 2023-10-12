// Looping all the sections
const sections = document.querySelectorAll('.section')
sections.forEach(section => {
  const hidden = section.querySelectorAll('.hidden')
  const drag = section.querySelector('.draggable')
  hidden.forEach(hide => {
  section.addEventListener('click', e => {
    section.classList.add('active')
    hide.classList.add('show')
    drag.style.transform = "translate(0)"
    drag.style.transition = "all 0s ease-in-out"
    if (e.target !== e.currentTarget) return
    section.classList.remove('active')
    hide.classList.remove('show')
    drag.style.transform = "translate(0)"
    drag.style.transition = "all 0.5s ease-in-out"
  })
  })
})
