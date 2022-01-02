import {toggleModal} from "../../../js/utils";

export const initializeLeftMenu = () => {
  const leftMenuArrows = document.querySelectorAll(".js__left-menu-arrow");

  const classItem = ".js__item";

  /*клик по стрелочке - раскрывается вложенное меню*/
  if (leftMenuArrows !== null) {

    leftMenuArrows.forEach(arrow => {
      arrow.addEventListener('click', function(){
        if (this.parentElement !== null && this.closest(classItem) !== null){
          this.classList.toggle("active");
          const tree = this.closest(classItem).querySelector(".js__tree");
          if (tree !== null){
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

  /*клик по ссылке - меняется раздел*/
  if (leftMenuLinks !== null && headerTitle !== null
    && breadcrumbsActive !== null) {

    leftMenuLinks.forEach(link => {
      link.addEventListener('click', function(){
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
        while (item !== null) {
          setActiveLinkWithArrow(item);
          item = item.parentElement.closest(classItem);
        }

        if (leftMenu !== null && leftMenu.classList.contains("open")){
          toggleModal(leftMenu);
        }
      });
    });

  }

  function setActiveLinkWithArrow(item){
    if (item !== null){
      const link = item.querySelector(".js__left-menu-link");
      if (link !== null){
        link.classList.add("active");
      }
      const arrow = item.querySelector(".js__left-menu-arrow");
      if (arrow !== null){
        arrow.classList.add("active-color");
      }
    }
  }

  /*делаем текущей активной первую ссылку из левого меню*/
  const active = document.querySelector(".js__left-menu-link");
  if (active !== null){
    active.dispatchEvent(new Event("click"));
  }

  /*инициализация открывающегося окна с левым меню для адаптива*/
  const leftMenuButton = document.querySelector(".js__open-catalog");
  const leftMenuBack = document.querySelector(".js__menu-back");

  if (leftMenuButton !== null && leftMenuBack !== null && leftMenu !== null){
    leftMenuButton.addEventListener("click", function (e) {
      if (window.innerWidth <= 1248){
        e.preventDefault();
        toggleModal(leftMenu);
      }
    });

    leftMenuBack.addEventListener("click", function () {
      toggleModal(leftMenu);
    });
  }
};
