import { SwiperBuilder } from '../../utils/js/SwiperBuilder';

export const initReviewsSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
    },
  };

  new SwiperBuilder('.js__reviews-slider')
    .addLoop(false)
    .addSpaceBetween(24)
    .addBreakpoints(breakpoints)
    .addNavigation(
      '.js__reviews-slider-arrow--right',
      '.js__reviews-slider-arrow--left',
    )
    .build();
};
