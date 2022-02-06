import { SwiperBuilder } from '../../utils/js/SwiperBuilder';

export const initProjectsSection = () => {
  let initSlide = 0;
  const slides = document.querySelectorAll('.projects__slide');
  if (slides) {
    initSlide = slides.length;
  }

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 0,
    },
    1248: {
      slidesPerView: 'auto',
      spaceBetween: 24,
      initialSlide: initSlide,
    },
  };

  new SwiperBuilder('.js-projects-slider')
    .addLoop(false)
    .addBreakpoints(breakpoints)
    .addNavigation(
      '.js-projects-slider-arrow--right',
      '.js-projects-slider-arrow--left',
    )
    .build();
};
