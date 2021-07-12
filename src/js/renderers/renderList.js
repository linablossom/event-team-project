import listTpl from '../../tpl/card_events.hbs';

const refs = {
  listContainer: document.querySelector('.list'),
};

const renderListError = (error, onReset) => {
  refs.listContainer.innerHTML = `<div><p>Nothing found</p><button class="button-reset" type="button"> Reset </button></div>`;
  const buttonReset = document.querySelector('.button-reset');
  buttonReset.addEventListener('click', onReset);
};

const renderListLoading = () => {
  refs.listContainer.innerHTML = 'Loading...';
};

const renderList = ({ data, loading, error, onOpen, onReset }) => {
  if (error) return renderListError(error, onReset);
  if (loading) return renderListLoading();
  refs.listContainer.innerHTML = listTpl(data);

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
