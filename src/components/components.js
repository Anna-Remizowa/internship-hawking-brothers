import { initHeader } from './header/header';

import { initBestsellersSection } from './sections/bestsellers/bestsellers';
import { initProjectsSection } from './sections/projects/projects';
import { initReviewsSection } from './sections/reviews/reviews';
import { initCategory } from './sections/category/category';
import { initLeftMenu } from './independent/left-menu/left-menu';
import {
  initAnchor, maskPhone, toggleModal, validateForm,
} from './utils/js/utils';
import { initProductSection } from './sections/product/product';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBestsellersSection();
  initProjectsSection();
  initReviewsSection();
  initProductSection();
  initCategory();
  initLeftMenu();
  initAnchor('.js-anchor');

  const modals = document.querySelectorAll('.js-modal--adaptive');
  if (modals) {
    modals.forEach((modal) => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1248) {
          if (modal.classList.contains('open')) {
            toggleModal(modal);
            document.body.classList.remove('blocked');
          }
        }
      }, true);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const openModal = document.querySelector('.js-modal.open');
      if (openModal) {
        toggleModal(openModal);
      }
    }
  });

  const forms = document.querySelectorAll('form[data-validate]');
  if (forms) {
    forms.forEach((form) => {
      validateForm(form);
    });
  }

  const inputPhones = document.querySelectorAll('input[type="tel"]');
  if (inputPhones) {
    inputPhones.forEach((phone) => {
      maskPhone(phone);
    });
  }
});
