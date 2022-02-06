import { Modal } from '../../utils/js/Modal';
import { toggleModal } from '../../utils/js/utils';

export const initLeftMenu = () => {
  const leftMenu = document.querySelector('.js-left-menu');

  if (leftMenu) {
    /* инициализация модалки */
    const leftMenuButton = document.querySelector('.js-open-catalog');
    const leftMenuBack = leftMenu.querySelector('.js-menu-back');
    new Modal(
      leftMenuButton,
      leftMenuBack,
      leftMenu,
      true,
      1248,
    ).initButtons();

    const classItem = '.js-item';

    /* клик по стрелочке - раскрывается вложенное меню */
    const leftMenuArrows = leftMenu.querySelectorAll('.js-left-menu-arrow');
    if (leftMenuArrows) {
      leftMenuArrows.forEach((arrow) => {
        arrow.addEventListener('click', function clickArrow() {
          if (this.parentElement !== null && this.closest(classItem) !== null) {
            this.classList.toggle('active');
            const tree = this.closest(classItem).querySelector('.js-tree');
            if (tree) {
              tree.classList.toggle('open');
            }
          }
        });
      });
    }

    /* делаем активной ссылку из левого меню */
    const url = new URL(window.location.href);
    let activeLink;
    if (url) {
      activeLink = url.searchParams.get('active');
    }

    if (!activeLink || !document.querySelector(`#${activeLink}`)) {
      activeLink = '.js-left-menu-link';
    } else {
      activeLink = `#${activeLink}`;
    }
    const active = document.querySelector(activeLink);

    if (active) {
      let item = active.closest(classItem);
      while (item) {
        const link = item.querySelector('.js-left-menu-link');
        if (link) {
          link.classList.add('active');
        }
        const arrow = item.querySelector('.js-left-menu-arrow');
        if (arrow) {
          arrow.classList.add('active-color');
          arrow.dispatchEvent(new Event('click'));
        }
        item = item.parentElement.closest(classItem);
      }

      if (leftMenu && leftMenu.classList.contains('open')) {
        toggleModal(leftMenu);
      }

      const breadcrumbsActive = document.querySelector('.breadcrumbs__link.active');
      if (breadcrumbsActive) {
        breadcrumbsActive.textContent = active.textContent;
      }
      const headerTitle = document.querySelectorAll('.js-title');
      if (headerTitle) {
        headerTitle.forEach((title) => {
          title.textContent = active.textContent;
        });
      }
    }
  }
};
