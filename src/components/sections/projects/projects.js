import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

export const initializeSliderProjects = () => {
  const swiper = new Swiper('.projects__slider', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 24,
      navigation: {
        nextEl: '.projects__arrow-right',
        prevEl: '.projects__arrow-left',
      },
    });
  swiper.slideTo(swiper.slides.length, 0);
};
