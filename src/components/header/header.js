export const clickMenuButton = () => {

  const headerButton = document.querySelector('.header-menu-js');
  const adaptiveMenu = document.querySelector('.header-big-js');
  const iconMenu = document.querySelector('.icon-menu-js');

  if (headerButton !== null && adaptiveMenu !== null) {
    headerButton.addEventListener("click", () => {
      document.body.classList.toggle("blocked");
      iconMenu.classList.toggle("close");

      if(adaptiveMenu.classList.contains("open")){
        adaptiveMenu.classList.toggle("visible");
        setTimeout(() => adaptiveMenu.classList.toggle("open"),
          300);

      }else{
        adaptiveMenu.classList.toggle("open");
        setTimeout(() => adaptiveMenu.classList.toggle("visible"),
          100);
      }
    });
  }

};
