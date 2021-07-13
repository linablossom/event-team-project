import listTpl from '../../tpl/card_events.hbs';

const refs = {
  listContainer: document.querySelector('.list'),
};

const renderListError = (error, onReset) => {
  refs.listContainer.innerHTML = `<div class="reset-box"><p class="text-reset">Nothing found</p><button class="button-reset" type="button"> Reset </button></div>`;
  const buttonReset = document.querySelector('.button-reset');
  buttonReset.addEventListener('click', onReset);
};

const renderListLoading = () => {
  refs.listContainer.innerHTML =
    '<div class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
};

const renderList = ({ data, loading, error, onOpen, onReset }) => {
  if (error) return renderListError(error, onReset);
  if (loading) return renderListLoading();
  refs.listContainer.innerHTML = listTpl(data);

  // !!!!!!!!!!!!!!!!!!!

  refs.listContainer.querySelectorAll('.card-js').forEach(x =>
    x.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      const id = e.currentTarget.dataset.itemid;
      onOpen(id);
    }),
  );
};

export default renderList;
