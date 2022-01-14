import Swiper, {Navigation, Thumbs, Zoom} from 'swiper';

Swiper.use([Navigation, Thumbs, Zoom])

export class Slider {
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

  addDisabledNavigation(isDisabled) {
    this.isDisabledNavigation = isDisabled;
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

  build() {
    return new Swiper('.js__' + this.sliderName, {
      direction: this.direction ? this.direction : "horizontal",
      loop: this.loop,
      spaceBetween: this.spaceBetween,
      slidesPerView: this.slidesPerView,
      navigation: this.isDisabledNavigation ? {} : {
        nextEl: '.js__' + this.sliderName + '-arrow--right',
        prevEl: '.js__' + this.sliderName + '-arrow--left',
      },
      thumbs: {
        swiper: this.thumbs
      },
      breakpoints: this.breakpoints
    });
  }
}
