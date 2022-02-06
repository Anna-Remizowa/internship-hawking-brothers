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

  new SwiperBuilder('.js-reviews-slider')
    .addLoop(false)
    .addSpaceBetween(24)
    .addBreakpoints(breakpoints)
    .addNavigation(
      '.js-reviews-slider-arrow--right',
      '.js-reviews-slider-arrow--left',
    )
    .build();
};
