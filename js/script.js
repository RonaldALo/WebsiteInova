// sliderShow 
const swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});