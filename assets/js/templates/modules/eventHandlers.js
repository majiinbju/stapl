

// Function to set up event listeners for both desktop and mobile devices
export function setupEventListeners(sections, activeProject, isDragging, lastTouch, bodyElement, mainElement) {
  // Initialize variables here
  sections.forEach(section => {
    const carousel = section.querySelector(".carousel");
    const draggableElements = section.querySelectorAll(".draggable");

    // Add event listeners for mobile-specific interactions
    if (screen.width < 1376) {
      const firstChild = carousel.querySelector('ul').firstElementChild;
      firstChild.addEventListener("click", handleMobileCarouselClick);
    }

    // Add event listeners for desktop-specific interactions
    if (screen.width > 1376) {
      carousel.addEventListener("mousedown", handleCarouselMouseDown);
      carousel.addEventListener("mouseup", handleCarouselMouseUp);
      carousel.addEventListener("mouseleave", handleCarouselMouseLeave);
      section.addEventListener("click", handleSectionClick);
    }

    // Add touch event listeners
    section.addEventListener("touchstart", handleTouchStart);
    section.addEventListener("touchend", handleTouchEnd);
  });

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Add wheel event listener
  window.addEventListener("wheel", handleWheel);

  // Function to handle click on mobile carousel
  function handleMobileCarouselClick(e) {
    gsap.to(carousel.querySelector('ul'), {
      x: "-=300", // Move the carousel to the left by 300px
      duration: 0.5, // Animation duration in seconds
      ease: "power2.out" // Easing function for smoother animation
    });
  }

  // Function to handle mouse down event on carousel
  function handleCarouselMouseDown(e) {
    if (section === activeProject) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
      endX = startX;
    }
  }

  // Function to handle mouse up event on carousel
  function handleCarouselMouseUp(e) {
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

  // Function to handle mouse leave event on carousel
  function handleCarouselMouseLeave() {
    isDragging = false;
  }

  // Function to handle click on section
  function handleSectionClick(e) {
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

  // Function to handle touch start event
  function handleTouchStart() {
    isDragging = true;
  }

  // Function to handle touch end event
  function handleTouchEnd() {
    isDragging = false;
    lastTouch = new Date().getTime();
  }


  // Function to handle wheel event
  function handleWheel(event) {
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
  }
}

export function handleScroll() {
  // Scroll event handling logic

  const currentScrollPos = window.pageYOffset;
  let scrollDirection;

  if (currentScrollPos > prevScrollPos) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }

  prevScrollPos = currentScrollPos;

  const activeRect = activeProject.getBoundingClientRect();
  const isProjectInView = activeRect.top >= 0 && activeRect.bottom <= window.innerHeight;

  if (!isProjectInView || (scrollDirection === "down" && activeRect.top < 0) || (scrollDirection === "up" && activeRect.bottom > window.innerHeight)) {
    shrinkProject(activeProject);
    activeProject.classList.remove("active");
    activeProject = null;
  }
}
