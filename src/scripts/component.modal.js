var modal = document.querySelector(".js-modal");
var trigger = document.querySelector(".js-modal-trigger");
var closeButton = document.querySelector(".js-modal-close");

function toggleModal() {
  modal.classList.toggle("is-active");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);