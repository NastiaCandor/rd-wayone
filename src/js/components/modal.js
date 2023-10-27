const writeMeBtns = document.querySelectorAll('.write-me__btn');
const writeMeModal = document.querySelector('.modal-write-me');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close')

const closeModal = () => {
  document.body.classList.remove('_lock');
  writeMeModal.classList.remove('active');
};

const openWriteMeModal = () => {
  document.body.classList.add('_lock');
  writeMeModal.classList.add('active');
};

writeMeBtns.forEach((item) => {
  item.addEventListener('click', () => {
    openWriteMeModal();
  });
});

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

document.body.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});