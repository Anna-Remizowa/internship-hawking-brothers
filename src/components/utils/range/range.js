export class Range {
  static REGULAR_DIVIDE = /\B(?=(\d{3})+(?!\d))/g;
  static MIN_GAP = 0;
  static RANGE_MIN = 0;
  static RANGE_MAX = 1000000;
  static START_VALUE = 10000;
  static END_VALUE = 800000;

  constructor(range) {
    range = document.querySelector(range);
    if (range){
      this.min = range.dataset.rangeMin ? range.dataset.rangeMin : Range.RANGE_MIN;
      this.max = range.dataset.rangeMax ? range.dataset.rangeMax : Range.RANGE_MAX;
      this.start = range.dataset.rangeStart ? range.dataset.rangeStart : Range.START_VALUE;
      this.end = range.dataset.rangeEnd ? range.dataset.rangeEnd : Range.END_VALUE;

      let divRange = document.createElement('div');
      divRange.className = 'range';

      let divRangeValues = document.createElement('div');
      divRangeValues.className = 'range__values-box';
      divRangeValues.appendChild(this.rangeValOne = this.generateValueDOMElement());
      divRangeValues.appendChild(this.rangeValTwo =
        this.generateValueDOMElement());
      divRange.appendChild(divRangeValues);

      let divRangeSlider = document.createElement('div');
      divRangeSlider.className = 'range__slider-box';
      this.rangeTrack = document.createElement('div');
      this.rangeTrack.className = 'range__track';
      divRangeSlider.appendChild(this.rangeTrack);
      divRangeSlider.appendChild(this.rangeOne =
        this.generateSliderDOMElement(this.min, this.max, this.start));
      divRangeSlider.appendChild(this.rangeTwo =
        this.generateSliderDOMElement(this.min, this.max, this.end));
      divRange.appendChild(divRangeSlider);

      range.appendChild(divRange);
    }

    if (this.rangeOne && this.rangeTwo && this.rangeValOne && this.rangeValTwo && this.rangeTrack) {

      this.checkSlide(true);
      this.checkSlide(false);

      const self = this;
      this.rangeOne.addEventListener('input', function(){
        self.checkSlide(true);
      }, false);
      this.rangeTwo.addEventListener('input', function(){
        self.checkSlide(false);
      }, false);
    }
  }

  static create(range){
    return new Range(range);
  }

  generateValueDOMElement(){
    const pElement = document.createElement('p');
    pElement.className = 'range__value';
    return pElement;
  }

  generateSliderDOMElement(min, max, value){
    const inputSlider = document.createElement('input');
    inputSlider.className = 'range__slider';
    inputSlider.type = 'range';
    inputSlider.step = '1';
    inputSlider.min = min;
    inputSlider.max = max;
    inputSlider.value = value;
    return inputSlider;
  }

  checkSlide(isFirstSlide){
    if (parseInt(this.rangeTwo.value) - parseInt(this.rangeOne.value) <= Range.MIN_GAP) {
      if (isFirstSlide){
        this.rangeOne.value = parseInt(this.rangeTwo.value) - Range.MIN_GAP;
      }else{
        this.rangeTwo.value = parseInt(this.rangeOne.value) + Range.MIN_GAP;
      }
    }

    if (isFirstSlide){
      this.rangeValOne.textContent = this.rangeOne.value.toString()
        .replace(Range.REGULAR_DIVIDE, " ");
    }else{
      this.rangeValTwo.textContent = this.rangeTwo.value.toString()
        .replace(Range.REGULAR_DIVIDE, " ");
    }

    this.fillColor();
  }

  fillColor() {
    const percent1 = (this.rangeOne.value / this.max) * 100;
    const percent2 = (this.rangeTwo.value / this.max) * 100;
    this.rangeTrack.style.background = `linear-gradient(to right, #E5E5E5 ${percent1}% , #EA6628 ${percent1}% , #EA6628 ${percent2}% , #E5E5E5 ${percent2}%)`;
  }
}
