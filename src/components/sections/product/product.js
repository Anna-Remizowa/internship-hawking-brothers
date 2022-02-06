import { Fancybox } from '@fancyapps/ui';
import { SwiperBuilder } from '../../utils/js/SwiperBuilder';

export const initProductSection = () => {
  /* слайдеры */
  const breakpointsThumb = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 7,
      touchRatio: 0,
    },
    1248: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  };

  const productSwiperThumb = new SwiperBuilder('.js-slider-img--thumb')
    .addDirection('vertical')
    .addLoop(false)
    .addBreakpoints(breakpointsThumb)
    .build();

  const breakpoints = {
    320: {
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    },
  };

  const productSwiperMain = new SwiperBuilder('.js-slider-img--main')
    .addLoop(false)
    .addSpaceBetween(10)
    .addSlidesPerView(1)
    .addBreakpoints(breakpoints)
    .addThumbs(productSwiperThumb)
    .build();

  const sliderSize = productSwiperMain.slides.length ? productSwiperMain.slides.length : 0;

  const sliderHiddenCount = document.querySelector('.js-slider-hidden-count');
  if (sliderHiddenCount) {
    sliderHiddenCount.textContent = `+ ${sliderSize - 3}`;
  }

  const sliderNavCount = document.querySelector('.js-slider-count--main');
  if (sliderNavCount && productSwiperMain) {
    productSwiperMain.on('slideChange', () => {
      sliderNavCount.textContent = `${parseInt(productSwiperMain.realIndex, 10) + 1} / ${sliderSize}`;
    });

    sliderNavCount.textContent = `1 / ${sliderSize}`;
  }

  /* fancybox */
  Fancybox.bind('[data-fancybox="gallery-product"]', {});

  /* элементы на форме товара */
  const plusCount = document.querySelector('.js-product-plus-count');
  const minusCount = document.querySelector('.js-product-minus-count');
  const count = document.querySelector('.js-product-count');
  if (plusCount && minusCount && count) {
    plusCount.addEventListener('click', () => {
      count.value = parseInt(count.value, 10) + 1;
    });
    minusCount.addEventListener('click', () => {
      const number = parseInt(count.value, 10);
      if (number > 1) {
        count.value = number - 1;
      }
    });
  }

  const buttonIcons = document.querySelectorAll('.js-product-button-icon');
  buttonIcons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });

  /* табы */
  const tabs = document.querySelector('.js-tabs-product');
  if (tabs) {
    const tabsButtons = tabs.querySelectorAll('.js-tabs-btn');
    const tabsContent = tabs.querySelectorAll('.js-tabs-content');

    if (tabsButtons && tabsContent) {
      tabsButtons.forEach((button) => {
        button.addEventListener('click', () => {
          tabsButtons.forEach((btn) => btn.classList.remove('active'));
          button.classList.add('active');

          tabsContent.forEach((content) => content.classList.remove('active'));
          tabs.querySelector(`[data-tabs-target="${button.dataset.tabsPath}"]`)
            .classList
            .add('active');
        });
      });
    }
  }

  /* загрузка аватара */
  const boxPhoto = document.querySelector('.js-box-photo');
  const loadPhoto = document.querySelector('.js-load-photo');
  const inputPhoto = document.querySelector('.js-input-photo');
  if (boxPhoto && loadPhoto && inputPhoto) {
    inputPhoto.addEventListener('change', function loadFile() {
      if (this.files && this.files.length > 0) {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          loadPhoto.src = event.target.result;
        };
        reader.readAsDataURL(file);

        boxPhoto.setAttribute('hidden', 'true');
        loadPhoto.removeAttribute('hidden');
      }
    });
  }
};
