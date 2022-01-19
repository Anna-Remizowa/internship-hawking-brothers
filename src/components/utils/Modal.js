import {toggleModal} from "./utils";

export class Modal {

  constructor(openButton, backButton, modal,
              checkWindowSize, windowSize) {
    this.openButton = openButton;
    this.backButton = backButton;
    this.modal = modal;
    this.checkWindowSize = checkWindowSize;
    this.windowSize = windowSize;
  }

  addEventClickButtonOpen() {
    if (this.openButton && this.modal){
      const self = this;
      this.openButton.addEventListener("click", function (e) {
        if (!this.checkWindowSize || window.innerWidth <= this.windowSize) {
          e.preventDefault();
          toggleModal(self.modal);
        }
      });
    }
  }

  addEventClickButtonBack() {
    if (this.backButton && this.modal) {
      const self = this;
      this.backButton.addEventListener("click", function (e) {
        e.preventDefault();
        toggleModal(self.modal);
      });
    }
  }

  initButtons() {
    this.addEventClickButtonOpen();
    this.addEventClickButtonBack();
  }
}
