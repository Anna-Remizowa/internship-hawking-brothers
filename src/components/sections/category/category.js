import { Modal } from '../../utils/Modal';
import { initSelects } from '../../utils/utils';
import { RangeBar } from '../../utils/RangeBar';

export class Category {
  static initModal() {
    const openButton = document.querySelector('.js__open-filter');
    const backButton = document.querySelector('.js__filter-back');
    const modal = document.querySelector('.js__form-filter');
    this.modal = new Modal(
      openButton,
      backButton,
      modal,
      true,
      1248,
    );
    this.modal.initButtons();
  }

  static initFilters() {
    const selects = document.querySelectorAll('.js__category-select');
    initSelects(selects);

    const rangeOne = document.querySelector('.js__range-1');
    const rangeTwo = document.querySelector('.js__range-2');
    const rangeValOne = document.querySelector('.js__range-value-start');
    const rangeValTwo = document.querySelector('.js__range-value-end');
    const rangeTrack = document.querySelector('.js__range-track');
    new RangeBar(
      rangeOne,
      rangeTwo,
      rangeValOne,
      rangeValTwo,
      rangeTrack,
    ).initialize();

    const filterSubmit = document.querySelector('.js__filter-submit');
    const openButton = document.querySelector('.js__open-filter');
    if (filterSubmit && openButton) {
      filterSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        openButton.classList.add('active');
        openButton.dispatchEvent(new Event('click'));
      });
    }
  }
}
