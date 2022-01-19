import './header/header';
import './footer/footer';

import {initBestsellersSection} from './sections/bestsellers/bestsellers';
import {initProjectsSection} from './sections/projects/projects';
import {initReviewsSection} from './sections/reviews/reviews';
import {initHeader} from './header/header';
import {Category} from "./sections/category/category";
import {LeftMenu} from "./independent/left-menu/left-menu";
import {toggleModal} from "./utils/utils";

document.addEventListener("DOMContentLoaded", () => {
  initBestsellersSection();
  initProjectsSection();
  initReviewsSection();
  initHeader();
  Category.initModal();
  Category.initFilters();
  LeftMenu.initModal();
  LeftMenu.initLeftMenu();

  const modals = document.querySelectorAll(".js__modal");
  if (modals) {
    modals.forEach(modal => {
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1248) {
          if (modal.classList.contains("open")) {
            toggleModal(modal);
            document.body.classList.remove("blocked");
          }
        }
      }, true);
    })
  }
});
