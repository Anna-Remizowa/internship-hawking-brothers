import { SwiperBuilder } from '../../utils/SwiperBuilder';

export const initProductSection = () => {
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

  const breakpointsMain = {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: false,
    },
    1248: {
      allowTouchMove: true,
    },
  };
  const productSwiperMain = new SwiperBuilder('.js__slider-img--main')
    .addLoop(false)
    .addSpaceBetween(10)
    .addSlidesPerView(1)
    .addThumbs(productSwiperThumb)
    .addBreakpoints(breakpointsMain)
    .build();

  const sliderSize = productSwiperMain.slides.length ? productSwiperMain.slides.length : 0;

  const sliderHiddenCount = document.querySelector('.js__slider-hidden-count');
  if (sliderHiddenCount && productSwiperMain) {
    sliderHiddenCount.textContent = `+ ${sliderSize - 3}`;
  }

  const sliderNavCount = document.querySelector('.js__slider-count--main');
  if (sliderNavCount) {
    productSwiperMain.on('slideChange', () => {
      sliderNavCount.textContent = `${parseInt(productSwiperMain.activeIndex, 10) + 1} / ${sliderSize}`;
    });

    sliderNavCount.textContent = `1 / ${sliderSize}`;
  }

  const sliderZoomButtons = document.querySelectorAll('.js__slider-img-zoom');
  if (sliderZoomButtons) {
    /* todo: fancybox */
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
