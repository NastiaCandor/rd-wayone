import $ from "jquery";

document.addEventListener("DOMContentLoaded", function () {
  $('.form-tel').mask('+7(000) 000-00-00');

  // Write Me form
  const telInput = document.querySelector('.form-tel');
  const writeMeSubBtn = document.querySelector('.form-write__btn');
  const msgTelRequierd = document.querySelector('.form__required-msg');
  writeMeSubBtn.addEventListener('click', (event) => {
    const telInput = document.querySelector('.form-tel');
    if (telInput.value.length !== 17) {
      event.preventDefault();
      msgTelRequierd.classList.add('visible');
    }
  });
  telInput.addEventListener('click', () => {
    msgTelRequierd.classList.remove('visible');
  });
});
