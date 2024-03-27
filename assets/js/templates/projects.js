gsap.registerPlugin(ScrollToPlugin, Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("section");

let isDragging = false;
let lastTouch = 0;
let activeProject = null;

let startX = 0;
let endX = 0;
let dragX = 0;

function shrinkTo65vh(project) {
  const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });

  // Uncomment if necessary
  // project.querySelectorAll(".draggable").forEach((element) => {
  //   Draggable.get(element)?.kill();
  // });

  timeline.to(project, {
    height: "65vh",
    onComplete: () => {
      // Add logic if needed
    },
  }, "-=0.75");

  project.classList.remove("shrink");

  sections.forEach((s) => {
    if (s !== project && s.classList.contains("active")) {
      s.classList.remove("active");

      timeline.to(
        s,
        {
          height: "65vh",
          onComplete: () => {
            gsap.set(s, { top: "auto" });
          },
        },
        "-=0.75"
      );
    }
  });

  activeProject = null;
}

function makeElementsDraggable(draggableElements) {
  draggableElements.forEach((element) => {
    gsap.set(element, { pointerEvents: "auto" });
    Draggable.get(element)?.kill();

    Draggable.create(element, {
      type: "x",
      bounds: element.parentElement,
      edgeResistance: 0.9,
      onDrag: function () {
        gsap.set(element);
        dragX = this.x;
      },
      onRelease: function () {
        // Add any necessary logic here when dragging ends
      },
    });

    if (activeProject && activeProject.classList.contains("shrink")) {
      Draggable.get(element).disable();
      gsap.set(element);
    } else {
      Draggable.get(element).enable();
    }
  });
}

function expandProject(project) {
  gsap.to(window, {
    duration: 0.75,
    scrollTo: {
      y: project.offsetTop + (window.innerHeight - project.clientHeight) / 2,
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
          // Show hidden elements after expansion
          const hidden = project.querySelectorAll(".hidden");
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
            gsap.set(s, { top: "auto" });
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

function makeElementsNotDraggable() {
  sections.forEach((section) => {
    if (section !== activeProject) {
      const draggableElements = section.querySelectorAll(".draggable");
      draggableElements.forEach((element) => {
        gsap.set(element, { pointerEvents: "none" });
        Draggable.get(element)?.kill();
      });
    }
  });
}

sections.forEach((section) => {
  const carousel = section.querySelector(".carousel");
  const draggableElements = section.querySelectorAll(".draggable");

  // Mobile specific event listeners
  if (screen.width < 1376) {
    const firstChild = carousel.querySelector('ul').firstElementChild;
    firstChild.addEventListener("click", (e) => {
      gsap.to(carousel.querySelector('ul'), {
        x: "-=300", // Move the carousel to the left by 300px
        duration: 0.5, // Animation duration in seconds
        ease: "power2.out" // Easing function for smoother animation
      });
    });
    makeElementsDraggable(draggableElements);
  }

  // Check for screen width before adding desktop-specific event listeners
  if (screen.width > 1376) {
    carousel.addEventListener("mousedown", (e) => {
      if (section === activeProject) {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        endX = startX;
      }
    });

    carousel.addEventListener("mouseup", (e) => {
      if (isDragging) {
        isDragging = false;
        endX = e.clientX || e.changedTouches[0].clientX;

        const distance = endX - startX;
        const momentum = 0;
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

    section.addEventListener("click", (e) => {
      if (!isDragging && !section.classList.contains("active")) {
        if (activeProject && activeProject !== section) {
          shrinkTo65vh(activeProject);
          makeElementsNotDraggable();
        }

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
            makeElementsDraggable(draggableElements);
          },
        });
      } else if (section.classList.contains("active")) {
        activeProject = section;
      }
    });
  } else { // For mobile devices
    // Make elements draggable on mobile
    makeElementsDraggable(draggableElements);
  }

  section.addEventListener("touchstart", () => {
    isDragging = true;
  });

  section.addEventListener("touchend", () => {
    isDragging = false;
    lastTouch = new Date().getTime();
  });
});

// Variable to store the previous scroll position
let prevScrollPos = window.pageYOffset;

// Update the scroll event listener
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  let scrollDirection;

  // Determine the scroll direction
    if (currentScrollPos > prevScrollPos) {
      scrollDirection = "down"; // Scrolling down
    } else {
      scrollDirection = "up"; // Scrolling up
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;

    // Check if the active project is still visible in the viewport
    const activeRect = activeProject.getBoundingClientRect();
    const isProjectInView = activeRect.top >= 0 && activeRect.bottom <= window.innerHeight;

    // Shrink the active project if it's no longer in view or if scrolling away
    if (!isProjectInView || (scrollDirection === "down" && activeRect.top < 0) || (scrollDirection === "up" && activeRect.bottom > window.innerHeight)) {
      shrinkTo65vh(activeProject);
      activeProject.classList.remove("active");
      activeProject = null;
    }
  });

  window.addEventListener("wheel", (event) => {
    const currentTime = new Date().getTime();
    const isTrackpad = currentTime - lastTouch < 100;

    if (!isDragging) {
      const delta = event.deltaY || event.detail || -event.wheelDelta;

      if (Math.abs(delta) > 1) {
        if (isTrackpad || event.deltaX !== undefined || event.deltaY !== undefined) {
          bodyElement.classList.add("expand");
          setTimeout(() => {
            bodyElement.classList.remove("expand");
          }, 300);
        }
      }
    }
  });

