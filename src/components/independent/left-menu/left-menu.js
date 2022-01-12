import {Modal} from "../../utils/Modal";
import {toggleModal} from "../../utils/utils";

export class LeftMenu {

  static initModal() {
    const leftMenuButton = document.querySelector(".js__open-catalog");
    const leftMenuBack = document.querySelector(".js__menu-back");
    const modal = document.querySelector(".js__left-menu");
    this.modal = new Modal(leftMenuButton, leftMenuBack, modal,
      true, 1248);
    this.modal.initButtons();
  }

  static initLeftMenu() {
    const leftMenuArrows = document.querySelectorAll(".js__left-menu-arrow");
    const classItem = ".js__item";

    /*клик по стрелочке - раскрывается вложенное меню*/
    if (leftMenuArrows) {

      leftMenuArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
          if (this.parentElement !== null && this.closest(classItem) !== null) {
            this.classList.toggle("active");
            const tree = this.closest(classItem).querySelector(".js__tree");
            if (tree) {
              tree.classList.toggle("open");
            }
          }
        });
      })

    }

    const leftMenuLinks = document.querySelectorAll(".js__left-menu-link");
    const headerTitle = document.querySelectorAll(".js__title");
    const breadcrumbsActive = document.querySelector(".breadcrumbs__link.active");
    const leftMenu = document.querySelector(".js__left-menu");
    const self = this;

    /*клик по ссылке - меняется раздел*/
    if (leftMenuLinks && headerTitle && breadcrumbsActive) {

      leftMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
          headerTitle.forEach(title => {
            title.textContent = this.textContent;
          })

          breadcrumbsActive.textContent = this.textContent;

          leftMenuLinks.forEach(oneLink => {
            oneLink.classList.remove("active");
          });
          leftMenuArrows.forEach(arrow => {
            arrow.classList.remove("active-color");
          });

          let item = this.closest(classItem);
          while (item) {
            self.setActiveLinkWithArrow(item);
            item = item.parentElement.closest(classItem);
          }

          if (leftMenu && leftMenu.classList.contains("open")) {
            toggleModal(leftMenu);
          }
        });
      });

    }

    /*todo: сделать активной текущую через параметр url*/
    // var url_string = window.location.href;
    // var url = new URL(url_string);
    // var c = url.searchParams.get("menu");
    // console.log(c);
    /*делаем текущей активной первую ссылку из левого меню*/
    const active = document.querySelector(".js__left-menu-link");
    if (active) {
      active.dispatchEvent(new Event("click"));
    }
  }

  static setActiveLinkWithArrow(item) {
    if (item) {
      const link = item.querySelector(".js__left-menu-link");
      if (link) {
        link.classList.add("active");
      }
      const arrow = item.querySelector(".js__left-menu-arrow");
      if (arrow) {
        arrow.classList.add("active-color");
      }
    }
  }
}
