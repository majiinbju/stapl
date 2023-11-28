import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const bodyElement = document.querySelector('.wrapper');
const mainElement = document.querySelector('main');
const sections = document.querySelectorAll('section');


$(document).ready(function() {
  const sections = $('section');

  sections.each(function() {
	const section = $(this);
	const carousel = section.find('.carousel');

	carousel.on('mousedown', function(e) {
	  // Your existing mouse down logic
	  isDragging = true;
	  startX = e.clientX || e.touches[0].clientX;
	});

	carousel.on('mouseup', function(e) {
	  // Your existing mouse up logic
	  if (isDragging) {
		isDragging = false;
		const distance = e.clientX || e.changedTouches[0].clientX - startX;
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

	// Other touch event listeners...

	section.on('click', function(e) {
	  if (!isDragging && !section.hasClass('active')) {
		sections.each(function() {
		  const s = $(this);
		  if (s !== section && s.hasClass('active')) {
			// Your existing logic to remove active class and transition properties

			  s.classList.remove('active');
			  const projectInfo = s.querySelector('.project-info');
			  projectInfo.querySelectorAll('.hidden.showObject').forEach(obj => {
				obj.classList.remove('showObject');
			  });
			  s.style.transition = 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out';
			  s.style.transform = 'none';
			  s.style.height = '30vh';
		  }
		});

		section.addClass('active').css({
		  transition: 'transform 0.75s ease-in-out, height 0.75s, width 0.75s ease-in-out',
		  transformOrigin: 'center center',
		  height: '80vh',
		  width: '100%'
		});

		section.one('transitionend', function(event) {
		  if (event.originalEvent.propertyName === 'width') {
			$('html, body').addClass('scrolling');
			$('html, body').animate({ scrollTop: section.offset().top }, 750, 'easeInOutCubic', function() {
			  $('html, body').removeClass('scrolling');
			});
		  }
		});

		$('body').addClass('expand');
		clearTimeout(expandTimeout);
		expandTimeout = setTimeout(() => {
		  $('body').removeClass('expand');
		}, 0);
	  }
	});
  });

  // Your existing window, scroll, and animation logic...
  window.addEventListener('wheel', event => {
	const currentTime = new Date().getTime();
	const isTrackpad = currentTime - lastTouch < 100; // Adjust the time threshold as needed

	if (!isDragging) {
	  const delta = event.deltaY || event.detail || -event.wheelDelta;

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


});
