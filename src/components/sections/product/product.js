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

  const productSwiperThumb = new SwiperBuilder('.js__slider-img--thumb')
    .addDirection('vertical')
    .addLoop(false)
    .addBreakpoints(breakpointsThumb)
    .build();

  const productSwiperMain = new SwiperBuilder('.js__slider-img--main')
    .addLoop(false)
    .addSpaceBetween(10)
    .addSlidesPerView(1)
    .addThumbs(productSwiperThumb)
    .build();

  const sliderSize = productSwiperMain.slides.length ? productSwiperMain.slides.length : 0;

  const sliderHiddenCount = document.querySelector('.js__slider-hidden-count');
  if (sliderHiddenCount) {
    sliderHiddenCount.textContent = `+ ${sliderSize - 3}`;
  }

  const sliderNavCount = document.querySelector('.js__slider-count--main');
  if (sliderNavCount && productSwiperMain) {
    productSwiperMain.on('slideChange', () => {
      sliderNavCount.textContent = `${parseInt(productSwiperMain.realIndex, 10) + 1} / ${sliderSize}`;
    });

    sliderNavCount.textContent = `1 / ${sliderSize}`;
  }

  /* fancybox */
  Fancybox.bind('[data-fancybox="gallery-product"]', {});

  /* элементы на форме товара */
  const plusCount = document.querySelector('.js__product-plus-count');
  const minusCount = document.querySelector('.js__product-minus-count');
  const count = document.querySelector('.js__product-count');
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

  const buttonIcons = document.querySelectorAll('.js__product-button-icon');
  buttonIcons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });

  /* табы */
  const tabs = document.querySelector('.js__tabs-product');
  if (tabs) {
    const tabsButtons = tabs.querySelectorAll('.js__tabs-btn');
    const tabsContent = tabs.querySelectorAll('.js__tabs-content');

    if (tabsButtons && tabsContent) {
      tabsButtons.forEach((button) => {
        button.addEventListener('click', () => {
          tabsButtons.forEach((btn) => btn.classList.remove('active'));
          button.classList.add('active');

          tabsContent.forEach((content) => content.classList.remove('active'));
          tabs.querySelector(`[data-tabs-target="${button.dataset.tabsPath}"]`)
            .classList.add('active');
        });
      });
    }
  }

  /* загрузка аватара */
  const boxPhoto = document.querySelector('.js__box-photo');
  const loadPhoto = document.querySelector('.js__load-photo');
  const inputPhoto = document.querySelector('.js__input-photo');
  if (boxPhoto && loadPhoto && inputPhoto) {
    inputPhoto.addEventListener('change', function loadFile() {
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        loadPhoto.src = event.target.result;
      };
      reader.readAsDataURL(file);

      boxPhoto.setAttribute('hidden', 'true');
      loadPhoto.removeAttribute('hidden');
    });
  }
};
