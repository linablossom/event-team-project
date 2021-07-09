import debounce from 'lodash.debounce';
// import galleryCard from './templates/galleryCard.hbs';
import searchService from '../api/fetchListApi';
import cardEvents from '../../tpl/card_events.hbs';
import allCountriesList from '../../json/country.json';

console.log('check connection');

const refs = {
  eventsList: document.querySelector('.jsEvents'),
  searchBothInputs: document.querySelector('.jsForm'),
  keyWordInput: document.querySelector('#keySearchWord'),
  countryInput: document.querySelector('#countryList'),
};

refs.searchBothInputs.addEventListener(
  'input',
  debounce(() => {
    if (!refs.keyWordInput.value && !refs.countryInput.value) {
      refs.eventsList.innerHTML = '';
      return;
    }
    searchService.query = refs.keyWordInput.value;

    /*==================РАБОТА С INPUT СТРАНЫ=================*/
    console.log(refs.countryInput.value);
    let countryID = '';

    //здесь название страны, а нужен ее код
    //найти это значение в allCountriesList
    // достать его код, внести код в url поиска

    // if (refs.countryInput.value === json.name) {
    // countryID = json.code;
    searchService.country = countryID;
    //  }
    /*===============КОНЕЦ РАБОТЫ С INPUT СТРАНЫ=================*/

    searchService.resetPage();
    clearPage();

    searchService
      .fetchApiEvent()
      .then(events => {
        if (!events.length) {
          throw new Error();
        }
        console.log(events);
        renderEvents(events);
      })
      .catch(errorHandler);
  }, 500),
);

function renderEvents(events) {
  refs.eventsList.insertAdjacentHTML('beforeend', cardEvents(events));
}

function errorHandler() {
  console.log('Где-то закралась ошибка');
  clearPage();
}

function clearPage() {
  refs.eventsList.innerHTML = '';
}
