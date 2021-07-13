import debounce from 'lodash.debounce';
import uiService from './uiService';
import countryList from '../config/country.js';
import dropdownTpl from '../tpl/dropdown.hbs';

const refs = {
  keySearchWord: document.querySelector('.keySearchWord'),
  dropdownRef: document.querySelector('.dropdown-thumb'),
  countryListRef: document.querySelector('.dropdown-thumb__list'),
  dropdownTextRef: document.querySelector('.dropdown-thumb__text'),
  dropdownIconRef: document.querySelector('.dropdown-thumb__svg'),
};

export const setSearchValue = value => {
  console.log(value);
  refs.keySearchWord.value = value;
};

export const setCountryValue = value => {
  refs.countryListRef.value = value;
  refs.dropdownTextRef.setAttribute('data-country-id', value);
  refs.dropdownTextRef.textContent = value;
};

const initFilters = () => {
  refs.keySearchWord.addEventListener(
    'input',
    debounce(e => {
      uiService.onSearch(e.target.value);
    }, 2000),
  );
};

document.addEventListener('click', onClickDropdown);

function onClickDropdown(e) {
  if (
    e.target.getAttributeNames().includes('data-dropdown') ||
    e.target.getAttributeNames().includes('data-country-id')
  ) {
    if (e.target.classList.contains('dropdown-thumb__item')) {
      const attributeName = e.target.getAttribute('data-country-id');
      const countryName = e.target.textContent;

      refs.dropdownTextRef.setAttribute('data-country-id', attributeName);
      refs.dropdownTextRef.textContent = countryName;
    }

    Object.keys(countryList).forEach(code => {
      countryList[code] = { country: countryList[code], flag: code.toLowerCase() };
    });
    refs.countryListRef.innerHTML = dropdownTpl(countryList);

    if (refs.countryListRef.classList.contains('visually-hidden')) {
      refs.countryListRef.classList.remove('visually-hidden');
      refs.dropdownIconRef.classList.add('dropdown-thumb__svg--open');
    } else {
      refs.countryListRef.classList.add('visually-hidden');
      refs.dropdownIconRef.classList.remove('dropdown-thumb__svg--open');
    }
  }
  if (e.target.getAttributeNames().includes('data-country-id')) {
    uiService.onChangeCountry(refs.dropdownTextRef.getAttribute('data-country-id'));
  }
}

export default initFilters;
