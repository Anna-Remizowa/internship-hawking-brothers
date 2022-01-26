import { Modal } from '../../utils/js/Modal';
import { initSelects } from '../../utils/js/utils';
import { Range } from '../../utils/range/range';

export const initCategory = () => {
  /* инициализация модалки */
  const openButton = document.querySelector('.js__open-filter');
  const backButton = document.querySelector('.js__filter-back');
  const modal = document.querySelector('.js__form-filter');
  new Modal(
    openButton,
    backButton,
    modal,
    true,
    1248,
  ).initButtons();

  /* инициализация селектов */
  const selects = document.querySelectorAll('.js__category-select');
  initSelects(selects);

  /* инициализация range-бара */
  Range.create('[data-range="category-range"]', {
    start: 20000,
    end: 500000,
  });

  const filterSubmit = document.querySelector('.js__filter-submit');
  if (filterSubmit && openButton) {
    filterSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      openButton.classList.add('active');
      openButton.dispatchEvent(new Event('click'));
    });
  }
};
