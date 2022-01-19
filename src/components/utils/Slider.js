import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

export class Slider{
  constructor(sliderName, loop, spaceBetween, breakpoints) {
    this.swiper = new Swiper('.'+sliderName+'__slider', {
      loop: loop,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: '.'+sliderName+'__arrow-right',
        prevEl: '.'+sliderName+'__arrow-left',
      },
      breakpoints: breakpoints
    });
  }
}
