import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full.js';
import {toggleModal} from "../../../js/utils";

select2($);

const selects = [{
  name: "brand",
  placeholder: "Бренд",
},
  {
    name: "material",
    placeholder: "Материал облицовки",
  },
  {
    name: "location",
    placeholder: "Расположение",
  },
  {
    name: "series",
    placeholder: "Серия",
  },
  {
    name: "beam",
    placeholder: "Балка",
  },
  {
    name: "sort",
    dropdownParent: $('.category__content-header-box--sort')
  },
  {
    name: "count",
    selectionCssClass: "select2-selection--mini",
    dropdownCssClass: "select2-dropdown--mini"
  },
];

export const initializeFilters = () => {

  /*инициализация селекторов*/
  selects.forEach(sel => {
    $('.js__category-select--' + sel.name).select2({
      placeholder: sel.placeholder,
      width: "100%",
      minimumResultsForSearch: -1,
      selectionCssClass: sel.selectionCssClass,
      dropdownCssClass: sel.dropdownCssClass,
      dropdownParent: sel.dropdownParent,
    });
  })

  /*инициализация range-бара с ценами*/
  const rangeOne = document.querySelector(".js__range-1");
  const rangeTwo = document.querySelector(".js__range-2");
  const rangeValOne = document.querySelector(".js__range-value-start");
  const rangeValTwo = document.querySelector(".js__range-value-end");
  const rangeTrack = document.querySelector(".js__range-track");
  const regularDivide = /\B(?=(\d{3})+(?!\d))/g;
  const minGap = 0;

  if (rangeOne !== null && rangeTwo !== null &&
    rangeValOne !== null && rangeValTwo !== null && rangeTrack !== null) {
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
  if (filterButton !== null && filterBack !== null && filterForm !== null
    && filterNumber !== null && filterSubmit !== null) {

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
