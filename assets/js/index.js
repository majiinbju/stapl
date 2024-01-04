gsap.registerPlugin(Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("section");

let isDragging = false;
let lastTouch = 0;
let activeProject = null; // To track the active project
let activeDraggable = null; // To track the active draggable instance

sections.forEach((section) => {
  let carousel = section.querySelector(".carousel");
  let draggableElements = Array.from(section.querySelectorAll(".draggable"));
  let startX = 0;

  draggableElements.forEach((element) => {
    gsap.set(element, { x: 0 }); // Set initial x position
  });

  section.addEventListener("click", (e) => {
    if (!isDragging && !section.classList.contains("active")) {
      const hidden = section.querySelectorAll(".hidden");
      const expandTimeline = gsap.timeline({
        defaults: { duration: 0.75, ease: "power2.out" },
      });

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section.offsetTop + (window.innerHeight - section.clientHeight) / 2,
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
              hidden.forEach((hide) => {
                hide.classList.add("showObject");
              });
              enableDrag(); // Enable draggable elements after animation completes
              activeProject = section; // Set the current section as active
              disableInactiveDraggable(); // Disable dragging on inactive projects
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
          );
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
      );
    }
  });

  carousel.addEventListener("mousedown", (e) => {
    if (activeProject === section) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
    }
  });

  carousel.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      const endX = e.clientX || e.changedTouches[0].clientX;
      const distance = endX - startX;
      const momentum = 0.9;
      const duration = 750;
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

  section.addEventListener("touchstart", () => {
    if (activeProject === section) {
      isDragging = true;
    }
  });

  section.addEventListener("touchend", () => {
    isDragging = false;
    lastTouch = new Date().getTime();
  });

  // Function to enable draggable elements
  const enableDrag = () => {
    activeDraggable = Draggable.create(draggableElements, {
      type: "x",
      bounds: draggableElements[0].parentElement,
      edgeResistance: 1,
      onDrag: function () {
        gsap.set(draggableElements, { x: this.x });
      },
      onRelease: function () {
        // Add logic for release if needed
      },
    });
  };

  // Function to disable dragging on inactive projects
  const disableInactiveDraggable = () => {
    sections.forEach((s) => {
      if (s !== section && s !== activeProject) {
        if (s.activeDraggable) {
          s.activeDraggable[0].kill(); // Disable the inactive draggable instance
        }
      }
    });
  };
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
