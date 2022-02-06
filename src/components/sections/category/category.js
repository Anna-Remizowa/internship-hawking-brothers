import { Modal } from '../../utils/js/Modal';
import { initSelects } from '../../utils/js/utils';
import { Range } from '../../utils/range/range';

export const initCategory = () => {
  /* инициализация модалки */
  const openButton = document.querySelector('.js-open-filter');
  const backButton = document.querySelector('.js-filter-back');
  const modal = document.querySelector('.js-form-filter');
  new Modal(
    openButton,
    backButton,
    modal,
    true,
    1248,
  ).initButtons();

  /* инициализация селектов */
  const selects = document.querySelectorAll('.js-category-select');
  initSelects(selects);

  /* инициализация range-бара */
  Range.create('[data-range="category-range"]');

  const filterSubmit = document.querySelector('.js-filter-submit');
  if (filterSubmit && openButton) {
    filterSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      openButton.classList.add('active');
      openButton.dispatchEvent(new Event('click'));
    });
  }
};
