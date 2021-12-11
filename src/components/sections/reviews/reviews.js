import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 25,
    navigation: {
      nextEl: '.reviews__arrow-right',
      prevEl: '.reviews__arrow-left',
    },
  });
});
