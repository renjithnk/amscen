import swiperlibrary from '../vendors/swiper.js';

var heroSlider = new Swiper('.hero-slider', {
    loop: true,
    speed: 1500,
  autoplay: {
    delay: 5100,
    disableOnInteraction: false,
  },
  navigation: {
  nextEl: '.swiper-button-next1',
  prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.hero-slider-pagination',
    type: 'bullets',
  clickable: true,
  }
  });

export default heroSlider;  