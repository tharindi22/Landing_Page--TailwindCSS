const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

//event listner
navTriggerBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-is-open');
});

//swiper
const swiper = new Swiper('.swiper',{
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    //breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoint: {
        320: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true,
});

// hero
sr.reveal('.hero__text', {origin: 'top'});

//steps
sr.reveal('.steps__step', {distance: '100px', interval: 100});

//about
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right',delay: 800});

//feedback
sr.reveal('.feedback__bg', {delay: 800});
sr.reveal('.feedback_title');
sr.reveal('.feedback__slider',{delay: 1000});

//brands
sr.reveal('.brands__img', {interval: 600, distance: '100px', interval: 100});

//work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 800});
sr.reveal('.work__grid', {delay: 1000});

//status
sr.reveal('.stats');
sr.reveal('.stats__item', {
    interval: 100,
    distance: '100px',
    
});

//news
sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay: 800});
sr.reveal('.news__item', {
    interval: 100,
    distance: '100px',
    delay: 1000,
});

//contact
sr.reveal('.contact__container');
sr.reveal('.contact__text', {delay: 800});

//footer
sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100,
});