gsap.from('#box', {
    x:300,
    duration: 1,
    backgroundColor: 'blue',
    rotate: 360,
    borderRadius: '50%',
    scale: 0.5,
    delay: 1
})

let tl = gsap.timeline();

tl.from('#box1', {
    x:600,
    duration: 1,
    delay: 1
})

tl.from('#box2', {
    x:500,
    duration: 1,
    delay: 1
})

tl.from('#box3', {
    x:400,
    duration: 1,
    delay: 1
})

gsap.from('h1', {
    y:50,
    duration: 0.3,
    scale: 0.5,
    delay: .6,
    stagger: 0.5,
    repeat: -1,
    yoyo: true
})