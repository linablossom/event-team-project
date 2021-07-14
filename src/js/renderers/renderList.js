import listTpl from '../../tpl/card_events.hbs';
import uiService from '../uiService';

const refs = {
  listContainer: document.querySelector('.list'),
};

const renderListError = (error, onReset) => {
  refs.listContainer.innerHTML = `<div class="reset-box"><p class="text-reset">Nothing found <span class="sign"></span>&#9888</span> </p><button class="button-reset" type="button"> Reset </button></div>`;
  const buttonReset = document.querySelector('.button-reset');
  buttonReset.addEventListener('click', onReset);
};

const renderListLoading = () => {
  refs.listContainer.innerHTML =
    '<div class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
};

const renderList = ({ data, loading, error, onReset }) => {
  if (error) return renderListError(error, onReset);
  if (loading) return renderListLoading();
  refs.listContainer.innerHTML = listTpl(data);
};

refs.listContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('card-js')) return;
  e.stopPropagation();
  e.preventDefault();
  const id = e.target.dataset.itemid;
  uiService.onOpenItem(id);
});

export default renderList;
