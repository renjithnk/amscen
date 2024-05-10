import swiperlibrary from '../vendors/swiper.js';

var testimonialsCarousel = new Swiper('.testimonials-carousel', {
    loop: true,
    speed: 1500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
  nextEl: '.swiper-button-next2',
  prevEl: '.swiper-button-prev2',
  },
  pagination: {
    el: '.testimonials-carousel-pagination',
    type: 'bullets',
  clickable: true,
  },breakpoints: {
    480: {
    slidesPerView: 2,
    spaceBetween: 15
    },
    768: {
    slidesPerView: 3,
    spaceBetween: 20
  }
}
  });

  export default testimonialsCarousel;