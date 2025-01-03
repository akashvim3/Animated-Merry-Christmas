const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}      

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=================GSAP ANIMATION================== */

gsap.from('.home__img-11', 1, {opacity:0, y: 200, delay: .1})
gsap.from('.home__img-14', 1, {opacity:0, y: 200, delay: .5})
gsap.from('.home__img-15', 1, {opacity:0, y: 200, delay: .8})
gsap.from('.home__img-16', 1, {opacity:0, y: 200, delay: 1.1})
gsap.from('.home__img-10', 1, {opacity:0, y: 200, delay: 1.5, ease: "back.out(1.2)"})
gsap.from('.home__img-5', 1, {opacity:0, y: 200, delay: 2, ease: "bounce.out"})
gsap.from('.home__img-8', 1, {opacity:0, y: 200, delay: 2.5, ease: "bounce.out"})
gsap.from('.home__img-3', 1, {opacity:0, y: -100, rotation: -20, delay: 3, ease: "back.out(1.2)"})
gsap.from('.home__img-2', 1, {opacity:0, y: -100, rotation: -20, delay: 3.5, ease: "back.out(1.2)"})
gsap.from('.home__img-1', 1, {opacity:0, y: -100, rotation: -20, delay: 4, ease: "back.out(1.2)"})
gsap.from('.home__img-6', 1, {opacity:0, y: 200, rotation: 20, delay: 4, ease: "back.out(1.2)"})
gsap.from('.home__img-9', 1, {opacity:0, y: 200, rotation: 20, delay: 4, ease: "back.out(1.2)"})

// GSAP Animations for gifts
gsap.from('.gift', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});
