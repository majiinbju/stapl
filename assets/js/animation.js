// Function to handle page transitions
const loadPage = async (url) => {
  const mainContent = document.querySelector('main');

  // Animate exit
  await pageTransition(mainContent);

  // Fetch new content
  try {
    const response = await fetch(url);
    const html = await response.text();

    // Update content
    mainContent.innerHTML = html;

    // Animate enter
    await pageTransition(mainContent);
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
};

// Page transition animation function
const pageTransition = async (element) => {
  const tl = gsap.timeline();

  tl.to(element, { opacity: 0, duration: 0.5 }); // Replace with your transition animation

  // Additional animations or transitions as needed

  tl.to(element, { opacity: 1, duration: 0.5 }); // Replace with your transition animation
};

document.addEventListener('DOMContentLoaded', () => {
  const sideBar = document.getElementById('offCanvasSide');
  const links = sideBar.querySelectorAll('nav a');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');

      // Load new page content
      loadPage(href);
    });
  });
});
