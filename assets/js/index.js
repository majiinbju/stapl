gsap.registerPlugin(Draggable);

const bodyElement = document.querySelector('.wrapper');
const mainElement = document.querySelector('main');
const sections = document.querySelectorAll('section');

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

  section.addEventListener('click', e => {
    if (!isDragging && !section.classList.contains('active')) {
      sections.forEach(s => {
        if (s !== section && s.classList.contains('active')) {
          s.classList.remove('active');
          let projectInfo = s.querySelector('.project-info');
          projectInfo.querySelectorAll('.hidden.showObject').forEach(obj => {
            obj.classList.remove('showObject');
          });
          s.style.transition = 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out';
          s.style.transform = 'none';
          s.style.height = '30vh';
        }
      });

      section.classList.add('active');

      setTimeout(() => {
        hidden.forEach(hide => {
          hide.classList.add('showObject');
        });

        const expandTransitionDuration = 750;
        setTimeout(() => {
          const sectionsBefore = Array.from(sections).slice(0, Array.from(sections).indexOf(section));
          const totalHeightBefore = sectionsBefore.reduce((total, sec) => total + sec.clientHeight, 0);
          const headerHeight = 40;
          const targetScroll = totalHeightBefore + headerHeight - (window.innerHeight - section.clientHeight) / 2;

          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }, expandTransitionDuration);

        bodyElement.classList.add("expand");
        clearTimeout(expandTimeout); // Clear previous timeout if exists
        expandTimeout = setTimeout(() => {
          bodyElement.classList.remove('expand');
        }, 0); // Delay class removal after scrolling stops

      }, 750);

      section.style.transition = 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out';
      section.style.transformOrigin = 'center center';
      section.style.height = '80vh';
      section.style.width = '100%';
    }
  });

 section.addEventListener('touchstart', () => {
   isDragging = true;
 });

 section.addEventListener('touchend', () => {
   isDragging = false;
   lastTouch = new Date().getTime();
 });
});


window.addEventListener('wheel', event => {
  const currentTime = new Date().getTime();
  const isTrackpad = currentTime - lastTouch < 100; // Adjust the time threshold as needed

  if (!isDragging) {
    const delta = event.deltaY || event.detail || (-event.wheelDelta);

    if (Math.abs(delta) > 1) {
      if (isTrackpad || event.deltaX !== undefined || event.deltaY !== undefined) {
        bodyElement.classList.add('expand');

        setTimeout(() => {
          bodyElement.classList.remove('expand');
        }, 100); // Adjust the delay time as needed
      }
    }
  }
});

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  dx = li(dx, sx, 0.07);
  dy = li(dy, sy, 0.07);
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  mainElement.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  document.body.style.height = '0';
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

function updateScroll() {
  if (scrollSpeed !== 0) {
    window.scrollBy(0, scrollSpeed);
    scrollSpeed *= 0.9;

    if (Math.abs(scrollSpeed) < 0.1) {
      scrollSpeed = 0;
    }
  }
  requestAnimationFrame(updateScroll);
}

updateScroll();
