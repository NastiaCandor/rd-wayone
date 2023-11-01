import $ from "jquery";

const socialsBox = document.querySelector('.socials-container');

// on touch devices box opens by clicking, not hovering
const activeSocialBox = (event) => {
  if (socialsBox.classList.contains('active')) return;
  event.preventDefault();
  socialsBox.classList.add('active');
  setTimeout(() => {
    socialsBox.classList.remove('active');
  }, 3000);
};

socialsBox.addEventListener('touchstart', activeSocialBox);

// add padding to social block to stop it before reaching footer
$(document).on('scroll', function() {
  const footerHeight = $('.footer').height();
  $('.main__social-container').css({'padding-bottom': `${footerHeight}px`});
});