import { SwiperBuilder } from '../../utils/js/SwiperBuilder';

export const initBestsellersSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1248: {
      slidesPerView: 'auto',
    },
  };
  new SwiperBuilder('.js-bestsellers-slider')
    .addLoop(true)
    .addSpaceBetween(30)
    .addBreakpoints(breakpoints)
    .addNavigation(
      '.js-bestsellers-slider-arrow--right',
      '.js-bestsellers-slider-arrow--left',
    )
    .addAutoplay(true)
    .build();
};
