import {toggleModal} from "../utils/utils";

export const initHeader = () => {
    const headerButton = document.querySelector('.header-menu-js');
    const adaptiveMenu = document.querySelector('.header-big-js');
    const iconMenu = document.querySelector('.icon-menu-js');

    if (headerButton && adaptiveMenu && iconMenu) {
        headerButton.addEventListener("click", () => {
            toggleModal(adaptiveMenu);
            iconMenu.classList.toggle("close");
        });
    }
};
