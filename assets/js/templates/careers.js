gsap.registerPlugin(Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("#section");

let isDragging = false;
let lastTouch = 0;

sections.forEach((section) => {
  const carousel = section.querySelector(".carousel");
  let startX = 0;

  // Loop through each element and make it draggable using GSAP Draggable
  document.querySelectorAll(".draggable").forEach((element) => {
    gsap.set(element, { x: 0 }); // Set initial x position

    Draggable.create(element, {
      type: "x", // Restrict movement to horizontal axis
      bounds: element.parentElement, // Restrict movement within the parent element
      edgeResistance: 1, // Simulate 'endOnly' behavior from interact.js
      onDrag: function () {
        // Update the element's transform during drag
        gsap.set(element, { x: this.x });
      },
      onRelease: function () {
        // This is similar to the 'end' listener in interact.js
        // You can add any necessary logic here when dragging ends
      },
    });
  });

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
  });

  carousel.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      endX = e.clientX || e.changedTouches[0].clientX;

      const distance = endX - startX;
      const momentum = 0.9; // Adjust momentum factor as needed
      const duration = 750; // Adjust duration for animation
      const distanceWithMomentum = distance * momentum;
      const targetX = carousel.scrollLeft + distanceWithMomentum;

      gsap.to(carousel, {
        scrollLeft: targetX,
        duration: duration,
        ease: "power2.out",
      });
    }
  });

  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  const hidden = section.querySelectorAll(".hidden");
  let expandTimeline;
  let expandTimeout;

  if (window.innerWidth > 1366) {
    section.addEventListener("click", (e) => {
      if (!isDragging && !section.classList.contains("active")) {
        const expandTimeline = gsap.timeline({
          defaults: { duration: 0.75, ease: "power2.out" },
        });

        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y:
              section.offsetTop +
              (window.innerHeight - section.clientHeight) / 2,
            offsetY: (window.innerHeight - section.clientHeight) / 2,
          },
          ease: "power2.out",
          onComplete: () => {
            gsap.to(section, {
              duration: 0.75,
              height: "80vh",
              width: "100%",
              ease: "power2.out",
              onComplete: () => {
                // Add showObject class to hidden elements after animation completes
                hidden.forEach((hide) => {
                  hide.classList.add("showObject");
                });
              },
            });
          },
        });

        expandTimeline.to(section, {
          height: "80vh",
          width: "100%",
          top: `calc(50% - 40vh)`, // Center vertically in the viewport
          left: "0",
          x: "0",
          transformOrigin: "center center",
        });

        sections.forEach((s) => {
          if (s !== section && s.classList.contains("active")) {
            s.classList.remove("active");

            expandTimeline.to(
              s,
              {
                height: "80vh",
                width: "100%",
                onComplete: () => {
                  gsap.set(s, { top: "auto", left: "auto", x: "auto" });
                },
              },
              "-=0.75"
            ); // Ensure this happens simultaneously with the current animation
          }
        });

        expandTimeline.to(
          section,
          {
            x: "0",
            left: "0",
            scrollLeft: 0,
            onComplete: () => {
              section.classList.add("active");
            },
          },
          "-=0.75"
        ); // Ensure this happens simultaneously with the current animation
      }
    });
  }

  section.addEventListener("touchstart", () => {
    isDragging = true;
  });

  section.addEventListener("touchend", () => {
    isDragging = false;
    lastTouch = new Date().getTime();
  });
});

window.addEventListener("wheel", (event) => {
  const currentTime = new Date().getTime();
  const isTrackpad = currentTime - lastTouch < 100;

  if (!isDragging) {
    const delta = event.deltaY || event.detail || -event.wheelDelta;

    if (Math.abs(delta) > 1) {
      if (
        isTrackpad ||
        event.deltaX !== undefined ||
        event.deltaY !== undefined
      ) {
        bodyElement.classList.add("expand");
        setTimeout(() => {
          bodyElement.classList.remove("expand");
        }, 100);
      }
    }
  }
});

function easeScroll() {
  const sx = window.pageXOffset;
  const sy = window.pageYOffset;
  let dx = sx;
  let dy = sy;
  dx = li(dx, sx, 0.07);
  dy = li(dy, sy, 0.07);
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  mainElement.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  document.body.style.height = "0";
  window.requestAnimationFrame(easeScroll);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

function updateScroll() {
  let scrollSpeed = 0;

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
