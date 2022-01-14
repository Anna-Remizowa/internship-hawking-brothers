import {Slider} from "../../utils/Slider";

export const initProductSection = () => {
  const productSwiperThumb = new Slider("product-slider--thumb")
    .addDirection("vertical")
    .addLoop(false)
    .addSpaceBetween(8)
    .addSlidesPerView(5)
    .addDisabledNavigation(true)
    .build();
  const productSwiperMain = new Slider("product-slider--main")
    .addLoop(true)
    .addSpaceBetween(10)
    .addSlidesPerView(1)
    .addDisabledNavigation(true)
    .addThumbs(productSwiperThumb)
    .build();

  const sliderZoomButton = document.querySelector(".js__product-slider-zoom");
  if (sliderZoomButton && productSwiperMain) {
    sliderZoomButton.addEventListener("click", function () {
      productSwiperMain.zoom.toggle();
    });
  }

  const plusCount = document.querySelector(".js__product-plus-count");
  const minusCount = document.querySelector(".js__product-minus-count");
  const count = document.querySelector(".js__product-count");
  if (plusCount && minusCount && count) {
    plusCount.addEventListener("click", function () {
      count.value = parseInt(count.value) + 1;
    });
    minusCount.addEventListener("click", function () {
      const number = parseInt(count.value);
      if (number > 1) {
        count.value = number - 1;
      }
    });
  }

  const buttonIcons = document.querySelectorAll(".js__product-button-icon");
  buttonIcons.forEach(button => {
    button.addEventListener("click", function () {
      button.classList.toggle("active");
    });
  })
}
