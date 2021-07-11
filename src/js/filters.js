import debounce from 'lodash.debounce';
import uiService from './uiService';

const refs = {
  keyWordInput: document.querySelector('.keySearchWord'),
  countryInput: document.querySelector('.countryList'),
};

export const setSearchValue = value => {
  console.log(value);
  refs.keyWordInput.value = value;
};

export const setCountryValue = value => {
  refs.countryInput.value = value;
};

const initFilters = () => {
  refs.keyWordInput.addEventListener(
    'input',
    debounce(e => {
      uiService.onSearch(e.target.value);
    }, 2000),
  );

  refs.countryInput.addEventListener(
    'input',
    debounce(e => {
      uiService.onChangeCountry(e.target.value);
    }, 2000),
  );
};

export default initFilters;
