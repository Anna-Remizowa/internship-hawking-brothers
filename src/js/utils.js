export const toggleModal = (element) => {
  if (element === null){
    return;
  }

  document.body.classList.toggle("blocked");

  if (element.classList.contains("open")) {
    toggle("visible", "open");
  } else {
    toggle("open", "visible");
  }

  function toggle(firstClass, secondClass){
    element.classList.toggle(firstClass);
    setTimeout(() => element.classList.toggle(secondClass),
      200);
  }
}
