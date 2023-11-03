// Animation on load
const tl = gsap.timeline()
tl.add('start')

tl.to(".wall", {
  height: '0vh',
  duration: 2,
  delay: 1
}, 'start')
tl.to(".animation", {
  fontSize: '16px',
  position: 'absolute',
  height: '100px',
  width: '150px',
  color: 'black',
  duration: 2,
  delay: 1
}, 'start')
tl.to(".logo-shrink", {
  scale: 1,
  duration: 2
}, 'start')
