import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

export const initializeSliderProjects = () => {
  const swiper = new Swiper('.projects__slider', {
      loop: false,
      navigation: {
        nextEl: '.projects__arrow-right',
        prevEl: '.projects__arrow-left',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          initialSlide : 0,
        },
        769: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          initialSlide : 0,
        },
        1248: {
          slidesPerView: 'auto',
          spaceBetween: 24,
          initialSlide : document.querySelectorAll(".projects__slide").length,
        }
      }
    });
};
