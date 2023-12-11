// Animation on load
const tl = gsap.timeline()
tl.add('start')

tl.to(".wall", {
  height: '0vh',
  duration: 1,
  delay: 1
}, 'start')
tl.to(".animation", {
  fontSize: '16px',
  top: 0,
  left: 0,
  position: 'absolute',
  height: '50px',
  width: '150px',
  color: 'black',
  duration: 0.85,
  delay: 1
}, 'start')
tl.to(".logo-shrink", {
  scale: 1,
  duration: 0.5
}, 'start')
