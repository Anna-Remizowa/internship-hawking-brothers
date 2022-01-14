import {Slider} from "../../utils/Slider";

export const initReviewsSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 'auto',
    },
  };

  new Slider("reviews-slider")
    .addLoop(false)
    .addSpaceBetween(24)
    .addBreakpoints(breakpoints)
    .build();
};
