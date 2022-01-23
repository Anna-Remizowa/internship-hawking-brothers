import { SwiperBuilder } from '../../utils/SwiperBuilder';

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
  new SwiperBuilder('.js__bestsellers-slider')
    .addLoop(true)
    .addSpaceBetween(30)
    .addBreakpoints(breakpoints)
    .addNavigation(
      '.js__bestsellers-slider-arrow--right',
      '.js__bestsellers-slider-arrow--left',
    )
    .addAutoplay(true)
    .build();
};
