// ===================
import uiService from './uiService';
// ===================

// ссилки на DOM

const refs = {
  backdrop: document.querySelector('.wrap-4'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
  markupModal: document.querySelector('.tpl-modal'),
};

// закрити модалку по натисканню на Х

refs.modalCloseBtn.addEventListener('click', uiService.onCloseItem);

// закрити модалку по натисканню на Esc
window.addEventListener('keydown', onDownEsc);

function onDownEsc(e) {
  if (e.code !== 'Escape' || refs.backdrop.classList.contains('is-hidden')) return;
  uiService.onCloseItem();
}

// закрити модалку по натисканню на Backdrop

refs.backdrop.addEventListener('click', onClickBackdrop);

function onClickBackdrop(e) {
  if (e.target !== refs.backdrop) return;
  uiService.onCloseItem();
}
