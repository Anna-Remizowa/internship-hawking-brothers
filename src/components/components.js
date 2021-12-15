import './header/header';
import './footer/footer';

import {initializeSliderBestsellers} from './sections/bestsellers/bestsellers';
import {initializeSliderProjects} from './sections/projects/projects';
import {initializeSliderReviews} from './sections/reviews/reviews';

document.addEventListener("DOMContentLoaded", () => {
  initializeSliderBestsellers();
  initializeSliderProjects();
  initializeSliderReviews();
});

window.addEventListener('resize', function(event){
  console.log(document.querySelector('.start__img-blob-1').offsetHeight);
});
