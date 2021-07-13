import debounce from 'lodash.debounce';
import uiService from './uiService';
import countryList from '../config/country.js';
import dropdownTpl from '../tpl/dropdown.hbs';

const refs = {
  keyWordInput: document.querySelector('.keySearchWord'),
  dropdownRef: document.querySelector('.dropdown-thumb'),
  countryListRef: document.querySelector('.dropdown-thumb__list'),
  dropdownTitleRef: document.querySelector('.dropdown-thumb__text'),
  dropdownIconRef: document.querySelector('.dropdown-thumb__svg'),
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

      refs.dropdownTitleRef.setAttribute('data-country-id', attributeName);
      refs.dropdownTitleRef.textContent = countryName;
    }

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
    uiService.onChangeCountry(refs.dropdownTitleRef.getAttribute('data-country-id'));
  }
}

export default initFilters;
