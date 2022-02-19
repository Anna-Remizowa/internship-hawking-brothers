import Swiper, { Navigation, Thumbs, Autoplay } from 'swiper';

Swiper.use([Navigation, Thumbs, Autoplay]);

export class SwiperBuilder {
  constructor(sliderName) {
    this.sliderName = sliderName;
  }

  addLoop(loop) {
    this.loop = loop;
    return this;
  }

  addSpaceBetween(spaceBetween) {
    this.spaceBetween = spaceBetween;
    return this;
  }

  addSlidesPerView(slidesPerView) {
    this.slidesPerView = slidesPerView;
    return this;
  }

  addDirection(direction) {
    this.direction = direction;
    return this;
  }

  addThumbs(thumbs) {
    this.thumbs = thumbs;
    return this;
  }

  addBreakpoints(breakpoints) {
    this.breakpoints = breakpoints;
    return this;
  }

  addNavigation(nextElClass, prevElClass) {
    this.navigation = {
      nextEl: nextElClass,
      prevEl: prevElClass,
    };
    return this;
  }

  addAutoplay(autoplay) {
    this.autoplay = autoplay;
    return this;
  }

  build() {
    return new Swiper(this.sliderName, {
      direction: this.direction ? this.direction : 'horizontal',
      loop: this.loop,
      spaceBetween: this.spaceBetween,
      slidesPerView: this.slidesPerView,
      navigation: this.navigation ? this.navigation : {},
      thumbs: {
        swiper: this.thumbs,
      },
      breakpoints: this.breakpoints,
      autoplay: this.autoplay,
    });
  }
}
