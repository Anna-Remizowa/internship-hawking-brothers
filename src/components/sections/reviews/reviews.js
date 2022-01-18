import { SwiperBuilder } from '../../utils/SwiperBuilder';

export const initReviewsSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 'auto',
    },
  };

  new SwiperBuilder('reviews-slider')
    .addLoop(false)
    .addSpaceBetween(24)
    .addBreakpoints(breakpoints)
    .build();
};
