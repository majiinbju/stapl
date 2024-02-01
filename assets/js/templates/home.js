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

function shrinkProject(project) {
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

sections.forEach((section) => {
  const carousel = section.querySelector(".carousel");
  const draggableElements = section.querySelectorAll(".draggable");

  const makeElementsDraggable = () => {
    draggableElements.forEach((element) => {
      if (section === activeProject) {
        gsap.set(element, { pointerEvents: "auto" });
        Draggable.get(element)?.kill();

        Draggable.create(element, {
          type: "x",
          bounds: element.parentElement,
          edgeResistance: 1,
          onDrag: function () {
            gsap.set(element);
            dragX = this.x; // Update dragX during dragging
          },
          onRelease: function () {
            // Add any necessary logic here when dragging ends
          },
        });

        if (activeProject.classList.contains("shrink")) {
          Draggable.get(element).disable();
          gsap.set(element); // Use the last dragX value when releasing
        } else {
          Draggable.get(element).enable();
        }
      } else {
        gsap.set(element, { pointerEvents: "none" });
        Draggable.get(element)?.kill();
      }
    });
  };

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
          shrinkProject(activeProject);
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
            makeElementsDraggable();
          },
        });
      } else if (section.classList.contains("active")) {
        activeProject = section;
      }
    });

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
      dx = lerp(dx, sx, 0.07);
      dy = lerp(dy, sy, 0.07);
    }
  } else {
    dx = lerp(dx, sx, 0.07);
    dy = lerp(dy, sy, 0.07);
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
