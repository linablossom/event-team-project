import listTpl from '../../tpl/card_events.hbs';

const refs = {
  listContainer: document.querySelector('.list'),
};

const renderListError = error => {
  refs.listContainer.innerHTML = error;
};

const renderListLoading = () => {
  refs.listContainer.innerHTML = 'Loading...';
};

const renderList = ({ data, loading, error, onOpen }) => {
  if (error) return renderListError(error);
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
