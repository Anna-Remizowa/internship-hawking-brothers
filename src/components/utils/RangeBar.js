export class RangeBar{
  static REGULAR_DIVIDE = /\B(?=(\d{3})+(?!\d))/g;
  static MIN_GAP = 0;
  static RANGE_MIN = 0;
  static RANGE_MAX = 1000000;
  static START_VALUE = 10000;
  static END_VALUE = 800000;

  constructor(range, values) {
    this.min = values && values.min ? values.min : RangeBar.RANGE_MIN;
    this.max = values && values.max ? values.max : RangeBar.RANGE_MAX;
    this.start = values && values.start ? values.start : RangeBar.START_VALUE;
    this.end = values && values.end ? values.end : RangeBar.END_VALUE;

    range = document.querySelector(range);
    if (range){
      let divRange = document.createElement('div');
      divRange.className = 'range';

      let divRangeValues = document.createElement('div');
      divRangeValues.className = 'range__values-box';
      divRangeValues.appendChild(this.rangeValOne =
        this.#generateValueDOMElement());
      divRangeValues.appendChild(this.rangeValTwo =
        this.#generateValueDOMElement());
      divRange.appendChild(divRangeValues);

      let divRangeSlider = document.createElement('div');
      divRangeSlider.className = 'range__slider-box';
      this.rangeTrack = document.createElement('div');
      this.rangeTrack.className = 'range__track';
      divRangeSlider.appendChild(this.rangeTrack);
      divRangeSlider.appendChild(this.rangeOne =
        this.#generateSliderDOMElement(this.min, this.max, this.start));
      divRangeSlider.appendChild(this.rangeTwo =
        this.#generateSliderDOMElement(this.min, this.max, this.end));
      divRange.appendChild(divRangeSlider);

      range.appendChild(divRange);
    }

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

  static create(range, values){
    return new RangeBar(range, values);
  }

  #generateValueDOMElement(){
    const pElement = document.createElement('p');
    pElement.className = 'range__value';
    return pElement;
  }

  #generateSliderDOMElement(min, max, value){
    const inputSlider = document.createElement('input');
    inputSlider.className = 'range__slider';
    inputSlider.type = 'range';
    inputSlider.step = '1';
    inputSlider.min = min;
    inputSlider.max = max;
    inputSlider.value = value;
    return inputSlider;
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
      this.rangeValOne.textContent = this.rangeOne.value.toString()
        .replace(RangeBar.REGULAR_DIVIDE, " ");
    }else{
      this.rangeValTwo.textContent = this.rangeTwo.value.toString()
        .replace(RangeBar.REGULAR_DIVIDE, " ");
    }

    this.#fillColor();
  }

  #fillColor() {
    const percent1 = (this.rangeOne.value / this.max) * 100;
    const percent2 = (this.rangeTwo.value / this.max) * 100;
    this.rangeTrack.style.background = `linear-gradient(to right, #E5E5E5 ${percent1}% , #EA6628 ${percent1}% , #EA6628 ${percent2}% , #E5E5E5 ${percent2}%)`;
  }
}
