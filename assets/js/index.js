// Draggable carousel function
let sliderContainer = document.querySelectorAll('.slider-container');
let innerSlider = document.querySelectorAll('.inner-slider');

let pressed = false;
let startX;
let x;

sliderContainer.forEach(slider => {
  let sliderContainer = document.querySelector('.slider-container');
  let innerSlider = slider.querySelector('.inner-slider');
  // console.log(innerSlider.innerHTML)
  slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    pressed = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    // checkBoundary();
  });

// Function to check boundary of slider
  const checkBoundary = () => {

      let outer = sliderContainer.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();


      if (parseInt(innerSlider.style.left) > 0) {
          innerSlider.style.left = "0px";
      }

      if (inner.right < outer.right) {
          innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
  };
})



// Looping all the sections
const sections = document.querySelectorAll('.section')
sections.forEach(section => {
  const hidden = section.querySelectorAll('.hidden')
  hidden.forEach(hide => {
  section.addEventListener('click', e => {
    section.classList.add('active')
    hide.classList.add('show')
    if (e.target !== e.currentTarget) return
    section.classList.remove('active')
    hide.classList.remove('show')
  })
  })
})

// Animation on load

const tl = gsap.timeline()
tl.add('start')

tl.to(".wall", {
  height: '0vh',
  duration: 2,
  delay: 1
}, 'start')
tl.to(".animation", {
  fontSize: '16px',
  position: 'absolute',
  height: '100px',
  width: '150px',
  color: 'black',
  duration: 2,
  delay: 1
}, 'start')

