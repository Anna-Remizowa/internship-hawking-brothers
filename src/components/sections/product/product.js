import { SwiperBuilder } from '../../utils/SwiperBuilder';

export const initProductSection = () => {
  const productSwiperThumb = new SwiperBuilder('.js__product-slider--thumb')
    .addDirection('vertical')
    .addLoop(true)
    .addSpaceBetween(8)
    .addSlidesPerView(5)
    .build();
  const productSwiperMain = new SwiperBuilder('.js__product-slider--main')
    .addLoop(true)
    .addSpaceBetween(10)
    .addSlidesPerView(1)
    .addThumbs(productSwiperThumb)
    .build();

  const sliderZoomButton = document.querySelector('.js__product-slider-zoom');
  if (sliderZoomButton && productSwiperMain) {
    sliderZoomButton.addEventListener('click', () => {
      productSwiperMain.zoom.toggle();
    });
  }

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

  const tabs = document.querySelector('.product__tabs');
  if (tabs) {
    const tabsButtons = tabs.querySelectorAll('.product__tabs-btn');
    const tabsContent = tabs.querySelectorAll('.product__tabs-content');

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
};
