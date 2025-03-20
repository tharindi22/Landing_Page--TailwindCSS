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