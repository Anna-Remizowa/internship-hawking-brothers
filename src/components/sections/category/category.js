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

    const values = {
      min:0,
      max: 1000000,
      start: 20000,
      end: 500000
    };
    new RangeBar(".js_range", values).initialize();

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
