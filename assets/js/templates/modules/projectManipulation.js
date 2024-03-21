export function expandProject(project) {
  // Expansion logic

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

export function shrinkProject(project) {
  // Shrinking logic
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
