import Choices from "choices.js";

export const toggleModal = (element) => {
  if (element === null) {
    return;
  }

  document.body.classList.toggle("blocked");

  if (element.classList.contains("open")) {
    toggle("visible", "open");
  } else {
    toggle("open", "visible");
  }

  function toggle(firstClass, secondClass) {
    element.classList.toggle(firstClass);
    setTimeout(() => element.classList.toggle(secondClass),
      200);
  }
}

/*инициализация селекторов*/
export const initSelects = (selects) => {
  if (selects) {
    selects.forEach(sel => {
      let containerClass = 'choices';
      if (sel.classList.contains("js__select-mini")) {
        containerClass += " choices--mini";
      }
      new Choices(sel, {
        allowHTML: false,
        searchEnabled: false,
        placeholderValue: 'Please Choose…',
        classNames: {
          containerOuter: containerClass,
        },
      });
    })
  }
}
