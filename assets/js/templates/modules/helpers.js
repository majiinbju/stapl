export function easeScroll() {
  // Scroll easing logic
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

export function isProjectShrinking(project) {
  // Check if a project is shrinking
  const timeline = gsap.getTweensOf(project);
  return timeline.some((tween) => tween.vars && tween.vars.height === "65vh");
}
