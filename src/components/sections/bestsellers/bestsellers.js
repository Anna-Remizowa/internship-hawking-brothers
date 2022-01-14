import {Slider} from "../../utils/Slider";

export const initBestsellersSection = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        },
        1248: {
            slidesPerView: 4,
        }
    };
    new Slider("bestsellers-slider")
      .addLoop(true)
      .addSpaceBetween(30)
      .addBreakpoints(breakpoints)
      .build();
};



