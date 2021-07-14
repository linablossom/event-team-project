import createModalMarkup from '../../tpl/card-modal.hbs';

// ссилки на DOM

const refs = {
  itemModal: document.querySelector('.item-modal'),
};

const renderItem = ({ id, data, loading, error, onRelated }) => {
  if (!id) {
    document.body.style.overflow = 'initial';
    refs.itemModal.classList.add('is-hidden');
    return;
  }
  console.log(id);
  refs.itemModal.classList.remove('is-hidden');
  const markupModal = document.querySelector('.tpl-modal');
  if (error) {
    markupModal.innerHTML = error;
    return;
  }
  if (loading) {
    markupModal.innerHTML = 'loading...';
    return;
  }

  //шукаю в масиві картинку з розмірами 640 х 427

  function renderImg(data) {
    const images = data.images;
    const imageForModal = images.find(image => image.width === 640 && image.height === 427);
    return imageForModal.url;
  }

  //обрізаю секунди

  function removeSecond(data) {
    const time = data.dates.start.localTime;
    const timeWithoutSec = time.slice(0, -3);
    return timeWithoutSec;
  }

  //роблю слово з великої букви

  function capitalLetter(data) {
    const priceRanges = data.priceRanges;
    if (!priceRanges) return;
    const typeWithCapitalLetter = priceRanges.map(item => {
      item.type = item.type.charAt(0).toUpperCase() + item.type.slice(1);
    });

    return typeWithCapitalLetter;
  }

  //підготовлюю дані для передачі в hbs

  const preparedDataforHbs = {
    ...data,
    imageUrl: renderImg(data),
    timeWithoutSec: removeSecond(data),
    typeWithCapitalLetter: capitalLetter(data),
  };

  markupModal.innerHTML = '';
  markupModal.insertAdjacentHTML('beforeend', createModalMarkup(preparedDataforHbs));
  markupModal.querySelector('.modal__btn-author').addEventListener('click', () => {
    onRelated(data.name);
  });
  document.body.style.overflow = 'hidden';
};

export default renderItem;
