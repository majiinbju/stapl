gsap.registerPlugin(Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("section");

let isDragging = false;
let lastTouch = 0;
let activeProject = null; // To track the active project
let activeDraggable = null; // To track the active draggable instance
// Define a flag to track if the project is currently expanding or shrinking
let isAnimating = false;

// Define shrinkProject function outside the forEach loop
function shrinkProject(project, masterTimeline) {
  const hidden = project.querySelectorAll(".hidden");
  const carousel = project.querySelector(".carousel");
  const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });

  // Check if animation (expanding or shrinking) is ongoing
  if (isAnimating) {
    return;
  }

  // Set the animation flag to true
  isAnimating = true;

  gsap.set(carousel, { x: 0 }); // Reset carousel position to start immediately

  hidden.forEach((hide) => {
    hide.classList.add("hidden-during-drag"); // Add a class to keep hidden elements visible during dragging
  });

  timeline.to(
    project, {
      height: "30vh",
      width: "80%",
      top: "50%",
      left: "50%",
      x: "-50%",
      transformOrigin: "center center",
      onComplete: () => {
        hidden.forEach((hide) => {
          timeline.to(
            hide, {
              duration: 0.75,
              opacity: 0,
            },
            "-=0.75"
          );
        });
        if (activeDraggable) {
          activeDraggable[0].kill(); // Disable carousel draggable behavior
        }
      },
    }
  );

  timeline.to(
    project, {
      x: "-50%",
      left: "50%",
      onComplete: () => {
        hidden.forEach((hide) => {
          hide.classList.remove("showObject", "hidden-during-drag"); // Remove the class added during dragging
          gsap.set(hide, { opacity: 0 });
        });

        // Reset carousel position to the start
        gsap.set(carousel, { scrollLeft: 0 });

        project.classList.remove("active");
        gsap.set(project, { top: "auto", left: "auto", x: "auto" });

        // Set the animation flag to false after the animation completes
        isAnimating = false;
      },
    },
    "-=0.75"
  );

  masterTimeline.add(timeline, 0); // Add the shrink timeline to the master timeline at the start
}

// End of shrinkProject

sections.forEach((section) => {
  let carousel = section.querySelector(".carousel");
  let draggableElements = Array.from(section.querySelectorAll(".draggable"));
  let startX = 0;
  let currentDraggable = null; // To track the current draggable element

  draggableElements.forEach((element) => {
    gsap.set(element, { x: 0 }); // Set initial x position
  });

  section.addEventListener("click", (e) => {
    if (!isDragging && !section.classList.contains("active")) {
      const hidden = section.querySelectorAll(".hidden");
      const projectInfo = section.querySelector(".project-info").querySelectorAll(".hidden");
      const timeline = gsap.timeline({
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
          // Add showObject class to hidden elements after animation completes
          hidden.forEach((hide) => {
            hide.classList.add("showObject");
          });
        }
      });

      timeline.to(
        section, {
          height: "80vh",
          width: "100%",
          top: `calc(50% - 40vh)`,
          left: "0",
          x: "0",
          transformOrigin: "center center",
        }
      );

      timeline.to(
        draggableElements, {
          x: 0,
        },
        0 // Start the draggable animation at the beginning of the timeline
      );

      sections.forEach((s) => {
        if (s !== section && s.classList.contains("active")) {
          s.classList.remove("active");
          timeline.to(
            s, {
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

      timeline.to(
        hidden, {
          duration: 0.75,
          opacity: 1,
          stagger: 0.1,
        },
        "-=0.75"
      );

      if (activeProject && activeProject !== section) {
        shrinkProject(activeProject, timeline); // Shrink the previously active project
      }

      activeProject = section; // Set the current section as active
    }
    // Function to enable draggable elements
    const enableDrag = () => {
      activeDraggable = Draggable.create(draggableElements, {
        type: "x",
        bounds: draggableElements[0].parentElement,
        edgeResistance: 1,
        onDrag: function() {
          gsap.set(this.target, { x: this.x });
        },
        onRelease: function() {
          // Add logic for release if needed
        },
      });
    };
    enableDrag(); // Call the enableDrag function to activate draggable functionality

  });

  carousel.addEventListener("mousedown", (e) => {
    if (activeProject === section) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
      currentDraggable = Draggable.create(carousel, {
        type: "x",
        bounds: carousel.parentElement,
        edgeResistance: 1,
        onDrag: function() {
          gsap.set(this.target, { x: this.x });
        },
        onRelease: function() {
          // Add logic for release if needed
        },
      })[0]; // Access the first Draggable instance from the array
    }
  });

  carousel.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      if (currentDraggable) {
        currentDraggable.kill(); // Disable draggable on mouseup
        currentDraggable = null; // Reset the draggable instance
      }
      // rest of your code...
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

  const shrinkProject = (project, masterTimeline) => {
      const hidden = project.querySelectorAll(".hidden");
      const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });

      timeline.to(
        project, {
          height: "30vh",
          width: "80%",
          top: "50%",
          left: "50%",
          x: "-50%",
          transformOrigin: "center center",
          onComplete: () => {
            hidden.forEach((hide) => {
              timeline.to(
                hide, {
                  duration: 0.75,
                  opacity: 0,
                },
                "-=0.75"
              );
            });
          },
        }
      );

      timeline.to(
        project, {
          x: "-50%",
          left: "50%",
          onComplete: () => {
            // Remove showObject class and set opacity to 0 for hidden elements
            hidden.forEach((hide) => {
              hide.classList.remove("showObject");
              gsap.set(hide, { opacity: 0 });
            });

            project.classList.remove("active");
            gsap.set(project, { top: "auto", left: "auto", x: "auto" });
          },
        },
        "-=0.75"
      );

      masterTimeline.add(timeline, 0); // Add the shrink timeline to the master timeline at the start
    };

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
});


// Listen for scroll events
window.addEventListener("scroll", () => {
  if (activeProject && !isInViewport(activeProject)) {
    // If the active project is no longer in the viewport, shrink it
    const timeline = gsap.timeline({
      defaults: { duration: 0.75, ease: "power2.out" },
    });

    shrinkProject(activeProject, timeline);
    activeProject = null; // Clear the active project reference
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
