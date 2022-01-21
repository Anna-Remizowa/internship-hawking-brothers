import Choices from 'choices.js';

const modals = document.querySelectorAll('.js__modal');

export const toggleModal = (element) => {
  if (element === null) {
    return;
  }

  modals.forEach((modal) => {
    if (modal !== element) {
      modal.classList.remove('visible', 'open');
    }
  });

  if (element.classList.contains('open')) {
    element.classList.remove('visible');
    setTimeout(
      () => {
        element.classList.remove('open');
        document.body.classList.remove('blocked');
      },
      300,
    );
  } else {
    element.classList.add('open');
    setTimeout(
      () => element.classList.add('visible'),
      100,
    );
    document.body.classList.add('blocked');
  }
};

/* инициализация селекторов */
export const initSelects = (selects) => {
  if (selects) {
    selects.forEach((sel) => {
      let containerClass = 'choices';
      if (sel.classList.contains('js__select-mini')) {
        containerClass += ' choices--mini';
      }
      return new Choices(sel, {
        allowHTML: false,
        searchEnabled: false,
        placeholderValue: 'Please Choose…',
        classNames: {
          containerOuter: containerClass,
        },
      });
    });
  }

  return null;
};
