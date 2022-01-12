import {Modal} from "../../utils/Modal";
import {toggleModal} from "../../utils/utils";

export class LeftMenu {
  static CLASS_ITEM = ".js__item";
  firstLoad = true;
  url = new URL(window.location.href);
  breadcrumbsActive = document.querySelector(".breadcrumbs__link.active");

  constructor(leftMenu) {
    this.leftMenu = document.querySelector(leftMenu);

    if (this.url){
      this.redirect = this.url.searchParams.get("redirect");
      this.activeLink = this.url.searchParams.get("active");
    }
  }

  initModal(buttonOpenModal) {
    if (this.leftMenu){
      const leftMenuButton = document.querySelector(buttonOpenModal);
      const leftMenuBack = this.leftMenu.querySelector(".js__menu-back");
      this.modal = new Modal(leftMenuButton, leftMenuBack, this.leftMenu,
        true, 1248);
      this.modal.initButtons();
    }
  }

  initLeftMenu() {
    if (this.leftMenu) {
      const self = this;
      const leftMenuArrows = this.leftMenu.querySelectorAll(".js__left-menu-arrow");

      /*клик по стрелочке - раскрывается вложенное меню*/
      if (leftMenuArrows) {

        leftMenuArrows.forEach(arrow => {
          arrow.addEventListener('click', function () {
            if (this.parentElement !== null && this.closest(LeftMenu.CLASS_ITEM) !== null) {
              this.classList.toggle("active");
              const tree = this.closest(LeftMenu.CLASS_ITEM).querySelector(".js__tree");
              if (tree) {
                tree.classList.toggle("open");
              }
            }
          });
        })

      }

      const leftMenuLinks = this.leftMenu.querySelectorAll(".js__left-menu-link");
      const headerTitle = document.querySelectorAll(".js__title");

      /*клик по ссылке - меняется раздел или переходим в каталог*/
      if (leftMenuLinks && headerTitle) {

        leftMenuLinks.forEach(link => {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            if (self.redirect) {
              window.location.href = this.href;
            }

            headerTitle.forEach(title => {
              title.textContent = this.textContent;
            })

            leftMenuLinks.forEach(oneLink => {
              oneLink.classList.remove("active");
            });
            leftMenuArrows.forEach(arrow => {
              arrow.classList.remove("active-color");
            });

            self.setActiveLink(this);
          });
        });

      }

      /*делаем активной ссылку из левого меню*/
      if (!this.activeLink || !document.querySelector("#" + this.activeLink)) {
        this.activeLink = ".js__left-menu-link";
      } else {
        this.activeLink = "#" + this.activeLink;
      }
      const active = document.querySelector(this.activeLink);

      if (active) {
        if (this.redirect) {
          this.setActiveLink(active);
        } else {
          active.dispatchEvent(new Event("click"));
        }
      }
    }
  }

  setActiveLink(element) {
    let item = element.closest(LeftMenu.CLASS_ITEM);
    while (item) {
      const link = item.querySelector(".js__left-menu-link");
      if (link) {
        link.classList.add("active");
      }
      const arrow = item.querySelector(".js__left-menu-arrow");
      if (arrow) {
        arrow.classList.add("active-color");
        if (this.firstLoad) {
          arrow.dispatchEvent(new Event("click"));
        }
      }
      item = item.parentElement.closest(LeftMenu.CLASS_ITEM);
    }

    if (this.leftMenu && this.leftMenu.classList.contains("open")) {
      toggleModal(this.leftMenu);
    }

    if (this.breadcrumbsActive){
      this.breadcrumbsActive.textContent = element.textContent;
    }

    this.firstLoad = false;
  }
}
