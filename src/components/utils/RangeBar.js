export class RangeBar{
  static REGULAR_DIVIDE = /\B(?=(\d{3})+(?!\d))/g;
  static MIN_GAP = 0;

  constructor(rangeOne, rangeTwo,
              rangeValOne, rangeValTwo,
              rangeTrack) {
    this.rangeOne = rangeOne;
    this.rangeTwo = rangeTwo;
    this.rangeValOne = rangeValOne;
    this.rangeValTwo = rangeValTwo;
    this.rangeTrack = rangeTrack;
    if (this.rangeOne){
      this.sliderMax = this.rangeOne.max;
    }
  }

  initialize(){
    if (this.rangeOne && this.rangeTwo && this.rangeValOne
      && this.rangeValTwo && this.rangeTrack) {

      this.#checkSlide(true);
      this.#checkSlide(false);

      const self = this;
      this.rangeOne.addEventListener('input', function(){
          self.#checkSlide(true);
        }, false);
      this.rangeTwo.addEventListener('input', function(){
          self.#checkSlide(false);
        }, false);
    }
  }

  #checkSlide(isFirstSlide){
    if (parseInt(this.rangeTwo.value) - parseInt(this.rangeOne.value) <= RangeBar.MIN_GAP) {
      if (isFirstSlide){
        this.rangeOne.value = parseInt(this.rangeTwo.value) - RangeBar.MIN_GAP;
      }else{
        this.rangeTwo.value = parseInt(this.rangeOne.value) + RangeBar.MIN_GAP;
      }
    }

    if (isFirstSlide){
      this.rangeValOne.textContent = this.rangeOne.value.toString().replace(RangeBar.REGULAR_DIVIDE, " ");
    }else{
      this.rangeValTwo.textContent = this.rangeTwo.value.toString().replace(RangeBar.REGULAR_DIVIDE, " ");
    }

    this.#fillColor();
  }

  #fillColor() {
    const percent1 = (this.rangeOne.value / this.sliderMax) * 100;
    const percent2 = (this.rangeTwo.value / this.sliderMax) * 100;
    this.rangeTrack.style.background = `linear-gradient(to right, #E5E5E5 ${percent1}% , #EA6628 ${percent1}% , #EA6628 ${percent2}% , #E5E5E5 ${percent2}%)`;
  }
}
