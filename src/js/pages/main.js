const socialsBox = document.querySelector('.main__socials-box');

const activeSocialBox = (event) => {
  if (socialsBox.classList.contains('active')) return;
  event.preventDefault();
  socialsBox.classList.add('active');
  setTimeout(() => {
    socialsBox.classList.remove('active');
  }, 3000);
};

socialsBox.addEventListener('touchstart', activeSocialBox);