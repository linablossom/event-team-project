// ===================
import uiService from './uiService';
// ===================

// ссилки на DOM

const refs = {
  // body: document.querySelector('.body-bg'),
  backdrop: document.querySelector('.backdrop'),
  wrap4: document.querySelector('.wrap-4'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
  markupModal: document.querySelector('.tpl-modal'),
};

// закрити модалку по натисканню на Х

refs.modalCloseBtn.addEventListener('click', uiService.onCloseItem);

// закрити модалку по натисканню на Esc

window.addEventListener('keydown', onDownEsc);

function onDownEsc(e) {
  console.log(e);
  if (e.code !== 'Escape') {
    return;
  }
  uiService.onCloseItem();
}

// закрити модалку по натисканню на Backdrop

refs.backdrop.addEventListener('click', onClickBackdrop);

function onClickBackdrop(e) {
  if (e.target !== refs.wrap4) return;
  uiService.onCloseItem();
}

export { onDownEsc };
