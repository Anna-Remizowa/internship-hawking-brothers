import { initHeader } from './header/header';
import './footer/footer';

import { initBestsellersSection } from './sections/bestsellers/bestsellers';
import { initProjectsSection } from './sections/projects/projects';
import { initReviewsSection } from './sections/reviews/reviews';
import { initCategory } from './sections/category/category';
import { initLeftMenu } from './independent/left-menu/left-menu';
import { toggleModal } from './utils/utils';
import { initProductSection } from './sections/product/product';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBestsellersSection();
  initProjectsSection();
  initReviewsSection();
  initProductSection();
  initCategory();
  initLeftMenu();

  const modals = document.querySelectorAll('.js__modal--adaptive');
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
});
