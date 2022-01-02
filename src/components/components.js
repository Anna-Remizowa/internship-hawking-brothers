import './header/header';
import './footer/footer';

import {initializeSliderBestsellers} from './sections/bestsellers/bestsellers';
import {initializeSliderProjects} from './sections/projects/projects';
import {initializeSliderReviews} from './sections/reviews/reviews';
import {clickMenuButton} from './header/header';
import {initializeFilters} from "./sections/category/category";
import {initializeLeftMenu} from "./independent/left-menu/left-menu";
import {toggleModal} from "../js/utils";

document.addEventListener("DOMContentLoaded", () => {
  initializeSliderBestsellers();
  initializeSliderProjects();
  initializeSliderReviews();
  clickMenuButton();
  initializeFilters();
  initializeLeftMenu();

  const filterForm = document.querySelector(".js__form-filter");
  const leftMenu = document.querySelector(".js__left-menu");
  if (filterForm !== null || leftMenu !== null){
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1248){
        closeModalIfResize(filterForm);
        closeModalIfResize(leftMenu);
      }
    }, true);

    function closeModalIfResize(element){
      if (element !== null && element.classList.contains("open")){
        toggleModal(element);
        document.body.classList.remove("blocked");
      }
    }
  }
});
