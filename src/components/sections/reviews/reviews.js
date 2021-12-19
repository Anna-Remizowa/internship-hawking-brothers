import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

export const initializeSliderReviews = () => {
  const swiper = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 25,
    navigation: {
      nextEl: '.reviews__arrow-right',
      prevEl: '.reviews__arrow-left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 'auto',
      },
    }
  });
};
