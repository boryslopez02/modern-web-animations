// gsap.from('#box', {
//     x:300,
//     duration: 1,
//     backgroundColor: 'blue',
//     rotate: 360,
//     borderRadius: '50%',
//     scale: 0.5,
//     delay: 1
// })

// let tl = gsap.timeline();

// tl.from('#box1', {
//     x:600,
//     duration: 1,
//     delay: .1
// })

// tl.from('#box2', {
//     x:500,
//     duration: 1,
//     delay: .1
// })

// tl.from('#box3', {
//     x:400,
//     duration: 1,
//     delay: .1
// })

// gsap.from('h1', {
//     y:50,
//     duration: 0.3,
//     scale: 0.5,
//     delay: .6,
//     stagger: 0.5,
//     repeat: -1,
//     yoyo: true
// })

// Scroll Trigger

// gsap.to('#page1 #box1', {
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: '#page1 #box1',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 3,
//         pin: true
//     }
// })

// gsap.to('#page2 #box2', {
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: '#page2 #box2',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 3,
//         pin: true
//     }
// })

// gsap.to('#page3 #box3', {
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: '#page3 #box3',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 3,
//         pin: true
//     }
// })

// let main = document.getElementById('main');

// // Locomotive
// let scroll = new LocomotiveScroll({
//     el: main,
//     smooth: true,
//     lerp: 0.01 
// });

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
