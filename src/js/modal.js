// ссилки на DOM

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
};

// закрити модалку по натисканню на Х

refs.modalCloseBtn.addEventListener('click', onClick);

function onClick() {
  refs.backdrop.classList.toggle('is-hidden');
}

// закрити модалку по натисканню на ESC

window.addEventListener('keydown', onDownEsc);

function onDownEsc(e) {
  if (e.code !== 'Escape' || refs.backdrop.classList.contains('is-hidden')) return;
  refs.backdrop.classList.add('is-hidden');
}

// закрити модалку по натисканню на темный фон (backdrop)

refs.backdrop.addEventListener('click', onClickBackdrop);

function onClickBackdrop(e) {
  if (e.target !== refs.backdrop) return;
  refs.backdrop.classList.add('is-hidden');
}
