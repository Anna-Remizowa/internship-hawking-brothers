export class RangeBar{
  static REGULAR_DIVIDE = /\B(?=(\d{3})+(?!\d))/g;
  static MIN_GAP = 0;
  static RANGE_MIN = 0;
  static RANGE_MAX = 1000000;
  static START_VALUE = 20000;
  static END_VALUE = 500000;

  constructor(range, values) {
    range = document.querySelector(range);
    if (range){
      this.rangeOne = range.querySelector('.js__range-1');
      this.rangeTwo = range.querySelector('.js__range-2');
      this.rangeValOne = range.querySelector('.js__range-value-start');
      this.rangeValTwo = range.querySelector('.js__range-value-end');
      this.rangeTrack = range.querySelector('.js__range-track');
    }

    this.min = values && values.min ? values.min : RangeBar.RANGE_MIN;
    this.max = values && values.max ? values.max : RangeBar.RANGE_MAX;
    this.start = values && values.start ? values.start : RangeBar.START_VALUE;
    this.end = values && values.end ? values.end : RangeBar.END_VALUE;
  }

  initialize(){
    if (this.rangeOne && this.rangeTwo && this.rangeValOne
      && this.rangeValTwo && this.rangeTrack) {

      this.rangeOne.min = this.rangeTwo.min = this.min;
      this.rangeOne.max = this.rangeTwo.max = this.max;
      this.rangeOne.value = this.start;
      this.rangeTwo.value = this.end;

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
    const percent1 = (this.rangeOne.value / this.max) * 100;
    const percent2 = (this.rangeTwo.value / this.max) * 100;
    this.rangeTrack.style.background = `linear-gradient(to right, #E5E5E5 ${percent1}% , #EA6628 ${percent1}% , #EA6628 ${percent2}% , #E5E5E5 ${percent2}%)`;
  }
}
