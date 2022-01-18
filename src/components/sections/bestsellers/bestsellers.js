import { SwiperBuilder } from '../../utils/SwiperBuilder';

export const initBestsellersSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1248: {
      slidesPerView: 'auto',
    },
  };
  new SwiperBuilder('bestsellers-slider')
    .addLoop(true)
    .addSpaceBetween(30)
    .addBreakpoints(breakpoints)
    .build();
};
