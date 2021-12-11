import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.product-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.bestsellers__arrow-right',
      prevEl: '.bestsellers__arrow-left',
    },
  });
});
