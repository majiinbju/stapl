function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  let fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}
document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
  let navLinks = document.querySelectorAll('nav a');
  let anchors = document.querySelectorAll('#faderLink');
  for (let idx = 0; idx < anchors.length; idx += 1) {
    if (anchors[idx].hostname !== window.location.hostname ||
      anchors[idx].pathname === window.location.pathname) {
      continue;
    }
    anchors[idx].addEventListener('click', function(event) {
      let fader = document.getElementById('fader'),
        anchor = event.currentTarget;
      let listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);
      event.preventDefault();
      fader.classList.add('fade-in');
    });
  }
});
window.addEventListener('pageshow', function(event) {
  if (!event.persisted) {
    return;
  }
  let fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

fadeInPage();
