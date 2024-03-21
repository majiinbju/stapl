// Function to set up event listeners for mobile devices
export function setupMobileListeners() {
  // Example: Add event listener for carousel navigation
  const carousel = document.querySelector(".carousel");
  const firstChild = carousel.querySelector('ul').firstElementChild;
  firstChild.addEventListener("click", handleCarouselClick);
}

// Example function to handle carousel click on mobile
function handleCarouselClick(event) {
  gsap.to(event.currentTarget.closest('.carousel').querySelector('ul'), {
    x: "-=300", // Move the carousel to the left by 300px
    duration: 0.5, // Animation duration in seconds
    ease: "power2.out" // Easing function for smoother animation
  });
}

// Function to set up event listeners for desktop devices
export function setupDesktopListeners(sections, activeProject, isDragging, startX, endX, dragX, bodyElement, mainElement) {
  sections.forEach(section => {
    const carousel = section.querySelector(".carousel");

    // Add event listeners related to desktop interactions
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    section.addEventListener("click", handleClick);
  });

  // Additional desktop-specific event listeners and logic can be added here

  // Event handler for mouse down event on carousel
  function handleMouseDown(e) {
    if (section === activeProject) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
      endX = startX;
    }
  }

  // Event handler for mouse up event on carousel
  function handleMouseUp(e) {
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
  }

  // Event handler for mouse leave event on carousel
  function handleMouseLeave() {
    isDragging = false;
  }

  // Event handler for section click
  function handleClick(e) {
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

