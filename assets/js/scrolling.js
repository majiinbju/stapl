export function handleScrolling() {
  let isDragging = false;
  const bodyElement = document.querySelector('.wrapper');
  const mainElement = document.querySelector('main');

  interact('.draggable').on('dragstart', () => {
    isDragging = true;
  }).on('dragend', () => {
    isDragging = false;
  });

  let isScrolling = false;
  let scrollSpeed = 0;
  let lastScrollTime = 0;
  let lastScrollDelta = 0;
  let scrollTimeout;

  window.addEventListener('wheel', event => {
    if (!isDragging) {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastScrollTime;
      if (!isScrolling || timeDiff > 100) {
        scrollSpeed = 0;
      }
      const delta = event.deltaY || event.detail || (-event.wheelDelta);
      if (Math.abs(delta) > 1) {
        if (delta !== lastScrollDelta) {
          scrollSpeed = delta;
        } else {
          scrollSpeed += delta;
        }
        lastScrollDelta = delta;
        isScrolling = true;
        bodyElement.classList.add('expand');
        mainElement.classList.add('main-expand');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          bodyElement.classList.remove('expand');
          mainElement.classList.remove('main-expand');
        }, 750);
        lastScrollTime = currentTime;
      }
    }
  });

  // rest of your logic for scrolling animation
}
