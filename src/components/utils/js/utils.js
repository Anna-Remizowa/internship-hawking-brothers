import Choices from 'choices.js';

const modals = document.querySelectorAll('.js-modal');

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
      if (sel.classList.contains('js-select-mini')) {
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

export const initAnchor = (jsAnchor) => {
  const anchor = document.querySelector(jsAnchor);
  if (anchor) {
    anchor.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('scroll', () => {
      if (window.innerHeight < window.pageYOffset) {
        anchor.classList.add('visible');
      } else {
        anchor.classList.remove('visible');
      }
    });
  }
};

/* валидация */
export const validateForm = (form) => {
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const clearValidity = (field) => {
    field.setCustomValidity('');
    field.parentElement.classList.remove('invalid');
  };

  try {
    const fields = form.querySelectorAll('[required]');

    fields.forEach((field) => {
      clearValidity(field);

      field.addEventListener('input', function clearValidityForField() {
        clearValidity(this);
      });
    });

    const submit = form.querySelector('button[type="submit"]');
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      fields.forEach((field) => {
        if (!field.checkValidity() || (field.type === 'email' && !regEmail.test(field.value)) || (field.type === 'tel' && field.value.length !== 18)) {
          field.setCustomValidity('error');
          field.parentElement.classList.add('invalid');
        } else {
          clearValidity(field);
        }
      });

      if (form.checkValidity()) {
        form.submit();
      }
    });
  } catch (e) {
    console.log(e);
  }
};

/* маска для номера телефона */
export const maskPhone = (selector) => {
  try {
    const setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    const createMask = (event) => {
      const input = event.target;
      const matrix = '+7 (___) ___ __ __';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = input.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      input.value = matrix.replace(/./g, (a) => (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a));

      if (event.type === 'blur') {
        if (input.value.length === 2) {
          input.value = '';
        }
      } else {
        setCursorPosition(input.value.length, input);
      }
    };

    const events = ['input', 'focus', 'blur'];
    events.forEach((ev) => {
      selector.addEventListener(ev, createMask);
    });
  } catch (e) {
    console.log(e);
  }
};
