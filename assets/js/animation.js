// document.addEventListener('DOMContentLoaded', function() {
//   const mainContent = document.getElementById('main-content');
//   const sideNav = document.getElementById('sideNavigation')
//   const navLinks = sideNav.querySelectorAll('nav a');
//
//   // Variable to track initial page load
//   let initialLoad = true;
//
//   navLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const href = this.getAttribute('href');
//       loadPage(href);
//       sideNav.classList.remove('active'); // Close the navbar upon link click
//     });
//   });
//
//   function loadPage(url) {
//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const newDoc = parser.parseFromString(html, 'text/html');
//         const newContent = newDoc.querySelector('main').innerHTML;
//
//         if (initialLoad) {
//           // For initial load, directly set the content without animation class
//           mainContent.innerHTML = newContent;
//           initialLoad = false;
//         } else {
//           // For subsequent transitions, apply animation class
//           mainContent.innerHTML = newContent;
//           mainContent.classList.add('active'); // Add class to trigger the animation
//           setTimeout(() => {
//             mainContent.classList.remove('page-enter'); // Remove initial animation class
//           }, 300); // Adjust according to your CSS transition duration
//         }
//       })
//       .catch(error => console.error('Error:', error));
//   }
// });
