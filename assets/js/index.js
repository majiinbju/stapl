gsap.registerPlugin(ScrollToPlugin, Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("section");

let isDragging = false;
let lastTouch = 0;
let activeProject = null; // To track the active project

sections.forEach((section) => {
  const carousel = section.querySelector(".carousel");
  let startX = 0;

  const draggableElements = section.querySelectorAll(".draggable");

  const makeElementsDraggable = () => {
    draggableElements.forEach((element) => {
      if (section === activeProject) {
        gsap.set(element, { pointerEvents: "auto" });
        Draggable.get(element)?.kill(); // Remove existing Draggable instances

        Draggable.create(element, {
          type: "x",
          bounds: element.parentElement,
          edgeResistance: 1,
          onDrag: function () {
            gsap.set(element, { x: this.x });
          },
          onRelease: function () {
            // Add any necessary logic here when dragging ends
          },
        });
      } else {
        gsap.set(element, { pointerEvents: "none" });
        Draggable.get(element)?.kill(); // Remove Draggable from inactive elements
      }
    });
  };

  carousel.addEventListener("mousedown", (e) => {
    if (section === activeProject) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
    }
  });

  carousel.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      endX = e.clientX || e.changedTouches[0].clientX;

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

  const hidden = section.querySelectorAll(".hidden");

  if (window.innerWidth > 1366) {
    section.addEventListener("click", (e) => {
      if (!isDragging && !section.classList.contains("active")) {
        if (activeProject && activeProject !== section) {
          // Shrink the previously active project
          shrinkProject(activeProject);
          makeElementsNotDraggable(); // Make elements not draggable for inactive project
        }

        // Calculate the scroll position to center the project
        const scrollPosition = section.offsetTop + (section.clientHeight - window.innerHeight) / 2;

        gsap.to(window, {
          duration: 0.75,
          scrollTo: {
            y: scrollPosition,
            offsetY: window.innerHeight / 2,
          },
          ease: "power2.out",
          onComplete: () => {
            expandProject(section);
            activeProject = section;
            makeElementsDraggable(); // Make elements draggable for the newly active project
          },
        });
      } else if (section.classList.contains("active")) {
        activeProject = section; // Update the active project on click if it's already active
      }
    });

    // Function to expand the project
    function expandProject(project) {
      gsap.to(window, {
        duration: 0.75,
        scrollTo: {
          y:
            project.offsetTop +
            (window.innerHeight - project.clientHeight) / 2,
          offsetY: (window.innerHeight - project.clientHeight) / 2,
        },
        ease: "power2.out",
        onComplete: () => {
          gsap.to(project, {
            duration: 0.75,
            height: "80vh",
            width: "100%",
            ease: "power2.out",
            onComplete: () => {
              hidden.forEach((hide) => {
                hide.classList.add("showObject");
              });
            },
          });
        },
      });

      const expandTimeline = gsap.timeline({
        defaults: { duration: 0.75, ease: "power2.out" },
      });

      expandTimeline.to(project, {
        height: "80vh",
        width: "100%",
        top: `calc(50% - 40vh)`,
        transformOrigin: "center center",
      });

      sections.forEach((s) => {
        if (s !== project && s.classList.contains("active")) {
          s.classList.remove("active");

          expandTimeline.to(
            s,
            {
              height: "65vh",
              width: "100%",
              onComplete: () => {
                gsap.set(s, { top: "auto", x: "auto" });
              },
            },
            "-=0.75"
          );
        }
      });

      expandTimeline.to(
        project,
        {
          onComplete: () => {
            project.classList.add("active");
          },
        },
        "-=0.75"
      );
    }

    // Function to shrink the project
    function shrinkProject(project) {
      const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });

      const hidden = project.querySelectorAll(".hidden");

      timeline.to(project, {
        height: "65vh",
        onComplete: () => {
          // Add logic if needed
        },
      },
      "-=0.75"
    );
      sections.forEach((s) => {
        if (s !== project && s.classList.contains("active")) {
          s.classList.remove("active");

          timeline.to(
            s,
            {
              height: "65vh",
              onComplete: () => {
                gsap.set(s, { top: "auto", x: "auto" });
              },
            },
            "-=0.75"
          );
        }
      });

      activeProject = null; // Reset active project after shrinking
    }

    function makeElementsNotDraggable() {
      sections.forEach((section) => {
        if (section !== activeProject) {
          const draggableElements = section.querySelectorAll(".draggable");
          draggableElements.forEach((element) => {
            gsap.set(element, { pointerEvents: "none" });
            Draggable.get(element)?.kill(); // Remove Draggable from inactive elements
          });
        }
      });
    }
  }

  section.addEventListener("touchstart", () => {
    isDragging = true;
  });

  section.addEventListener("touchend", () => {
    isDragging = false;
    lastTouch = new Date().getTime();
  });
});

window.addEventListener("scroll", () => {
  let isProjectInView = false; // Flag to check if any active project is in view

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (activeProject === section && (rect.top > window.innerHeight || rect.bottom < 0)) {
      shrinkProject(activeProject);
      activeProject.classList.remove("active");
      activeProject = null;
    }

    if (section.classList.contains("active")) {
      isProjectInView = true; // Set flag if any project with the 'active' class is in view
    }
  });

  // Remove 'active' class from all projects if no 'active' project is in view
  if (!isProjectInView) {
    sections.forEach((section) => {
      if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }
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
        if (activeProject) {
          shrinkProject(activeProject);
          activeProject = null;
        }
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
