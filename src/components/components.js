import './header/header';
import './footer/footer';

import {initializeSliderBestsellers} from './sections/bestsellers/bestsellers';
import {initializeSliderProjects} from './sections/projects/projects';
import {initializeSliderReviews} from './sections/reviews/reviews';
import {clickMenuButton} from './header/header';

document.addEventListener("DOMContentLoaded", () => {
  initializeSliderBestsellers();
  initializeSliderProjects();
  initializeSliderReviews();
  clickMenuButton();
});
