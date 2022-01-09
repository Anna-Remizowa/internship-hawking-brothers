import {toggleModal} from "../../../js/utils";
import Choices from "choices.js";

export const initializeFilters = () => {

  /*инициализация селекторов*/
  const selects = document.querySelectorAll(".js__category-select");
  if (selects) {
    selects.forEach(sel => {
      let containerClass = 'choices';
      if (sel.classList.contains("js__category-select--mini")) {
        containerClass += " choices--mini";
      }
      new Choices(sel, {
        allowHTML: false,
        searchEnabled: false,
        placeholderValue: 'Please Choose…',
        classNames: {
          containerOuter: containerClass,
        },
      });
    })
  }

  /*инициализация range-бара с ценами*/
  const rangeOne = document.querySelector(".js__range-1");
  const rangeTwo = document.querySelector(".js__range-2");
  const rangeValOne = document.querySelector(".js__range-value-start");
  const rangeValTwo = document.querySelector(".js__range-value-end");
  const rangeTrack = document.querySelector(".js__range-track");
  const regularDivide = /\B(?=(\d{3})+(?!\d))/g;
  const minGap = 0;

  if (rangeOne && rangeTwo && rangeValOne && rangeValTwo && rangeTrack) {
    const sliderMax = rangeOne.max;

    slideOne();
    slideTwo();

    rangeOne.addEventListener('input', slideOne);
    rangeTwo.addEventListener('input', slideTwo);

    function slideOne() {
      if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) <= minGap) {
        rangeOne.value = parseInt(rangeTwo.value) - minGap;
      }
      rangeValOne.textContent = rangeOne.value.toString().replace(regularDivide, " ");
      fillColor();
    }

    function slideTwo() {
      if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) <= minGap) {
        rangeTwo.value = parseInt(rangeOne.value) + minGap;
      }
      rangeValTwo.textContent = rangeTwo.value.toString().replace(regularDivide, " ");
      fillColor();
    }

    function fillColor() {
      const percent1 = (rangeOne.value / sliderMax) * 100;
      const percent2 = (rangeTwo.value / sliderMax) * 100;
      rangeTrack.style.background = `linear-gradient(to right, #E5E5E5 ${percent1}% , #EA6628 ${percent1}% , #EA6628 ${percent2}% , #E5E5E5 ${percent2}%)`;
    }
  }

  /*инициализация открывающегося окна с фильтрами для адаптива*/
  const filterButton = document.querySelector(".js__open-filter");
  const filterBack = document.querySelector(".js__filter-back");
  const filterForm = document.querySelector(".js__form-filter");
  const filterNumber = document.querySelector(".js__filter-number");
  const filterSubmit = document.querySelector(".js__filter-submit");
  if (filterButton && filterBack && filterForm &&
    filterNumber && filterSubmit) {

    filterButton.addEventListener("click", function () {
      toggleModal(filterForm);
    });

    filterBack.addEventListener("click", function () {
      toggleModal(filterForm);
    });

    filterSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      filterButton.classList.add("active");
      filterButton.dispatchEvent(new Event("click"));
    });
  }
};
