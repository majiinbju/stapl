gsap.registerPlugin(ScrollToPlugin, Draggable);

const bodyElement = document.querySelector(".wrapper");
const mainElement = document.querySelector("main");
const sections = document.querySelectorAll("section");

let isDragging = false;
let lastTouch = 0;
let activeProject = null;

let startX = 0;
let endX = 0;
let dragX = 0; // New variable to store the drag distance

// Shrink project
function shrinkTo65vh(project) {
  const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });
  project.querySelectorAll(".draggable").forEach((element) => {
    Draggable.get(element)?.kill();
  });
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
        s, {
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

// Enable Draggable
function makeElementsDraggable(draggableElements) {
  draggableElements.forEach((element) => {
    gsap.set(element, { pointerEvents: "auto" });
    Draggable.get(element)?.kill();
    Draggable.create(element, {
      type: "x",
      bounds: element.parentElement,
      edgeResistance: 1,
      onDrag: function() {
        gsap.set(element);
        dragX = this.x;
      },
      onRelease: function() {
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

// Kill Draggable
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

// Expand Project
function expandProject(project) {
  gsap.to(window, {
    duration: 0.75,
    // Scroll to center
    scrollTo: {
      y: project.offsetTop + (window.innerHeight - project.clientHeight) / 2,
      offsetY: (window.innerHeight - project.clientHeight) / 2,
    },
    ease: "power2.out",
    onComplete: () => {
      gsap.to(project, {
        // Project properties on complete
        duration: 0.75,
        height: "80vh",
        width: "100%",
        ease: "power2.out",
        onComplete: () => {
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
    // transformOrigin: "center center",
  });
  sections.forEach((s) => {
    if (s !== project && s.classList.contains("active")) {
      s.classList.remove("active");
      expandTimeline.to(
        s, {
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
    project, {
      onComplete: () => {
        project.classList.add("active");
      },
    },
    "-=0.75"
  );
}

sections.forEach((section) => {
  const carousel = section.querySelector(".carousel");
  const draggableElements = section.querySelectorAll(".draggable");
  // Mobile specific event listeners
if (screen.width < 1376) {
    let isFirstClick = true; // Boolean flag to track the first click/tap

    section.addEventListener("click", (e) => {
      const scrollPosition = section.offsetTop + (section.clientHeight - window.innerHeight) / 2;
      gsap.to(window, {
        duration: 0.25, // Increase duration for smoother scroll
        scrollTo: {
          y: scrollPosition
        },
        ease: "power2.inOut", // Use ease-in-out for smoother transition
        onComplete: () => {
          // Scroll animation complete, now slide the carousel
          gsap.to(carousel.querySelector('ul'), {
            x: "-=300", // Move the carousel to the left by 300px
            delay: isFirstClick ? 0.5 : 0, // Apply delay only on the first click/tap
            duration: 0.75, // Adjust duration for smoother slide
            ease: "power2.out" // Use power2 easing for smoother animation
          });

          // Set active project and make elements draggable after sliding
          activeProject = section;
          makeElementsDraggable(draggableElements);

          isFirstClick = false; // Update the flag after the first click/tap
        },
      });
    });

    makeElementsDraggable(draggableElements);
  }


  // End of mobile specific event listeners

  // Check for screen width before adding desktop-specific event listeners
  if (screen.width > 1376) {
    carousel.addEventListener("mousedown", (e) => {
      if (section === activeProject) {
        isDragging = true;
        startX = e.clientX || (e.touches && e.touches[0].clientX);
        endX = startX;
      }
    });
    carousel.addEventListener("mouseup", (e) => {
      if (isDragging) {
        isDragging = false;
        endX = e.clientX || (e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0].clientX : 0);
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
// End of Desktop listeners

window.addEventListener("scroll", () => {
  let isProjectInView = false;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (activeProject === section && (rect.top > window.innerHeight || rect.bottom < 0)) {
      shrinkProject(activeProject);
      activeProject.classList.remove("active");
      activeProject = null;
    }
    if (section.classList.contains("active")) {
      isProjectInView = true;
    }
  });
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
      if (isTrackpad || event.deltaX !== undefined || event.deltaY !== undefined) {
        bodyElement.classList.add("expand");
        setTimeout(() => {
          bodyElement.classList.remove("expand");
        }, 300);
      }
    }
  }
});

function easeScroll() {
  const sx = window.pageXOffset;
  const sy = window.pageYOffset;
  let dx = sx;
  let dy = sy;
  if (activeProject && isDragging) {
    if (!isProjectShrinking(activeProject)) {
      dx = li(dx, sx, 0.07);
      dy = li(dy, sy, 0.07);
    }
  } else {
    dx = li(dx, sx, 0.07);
    dy = li(dy, sy, 0.07);
  }
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  mainElement.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
  document.body.style.height = "0";
  window.requestAnimationFrame(easeScroll);
}

function isProjectShrinking(project) {
  const timeline = gsap.getTweensOf(project);
  return timeline.some((tween) => tween.vars && tween.vars.height === "65vh");
}

window.requestAnimationFrame(easeScroll);
