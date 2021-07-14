import debounce from 'lodash.debounce';
import uiService from './uiService';
import countryList from '../config/country.js';
import dropdownTpl from '../tpl/dropdown.hbs';

const refs = {
  keySearchWord: document.querySelector('.keySearchWord'),
  dropdownBox: document.querySelector('.countries__box-dropdown'),
  dropdownRef: document.querySelector('.dropdown-thumb'),
  countryListRef: document.querySelector('.dropdown-thumb__list'),
  dropdownTextRef: document.querySelector('.dropdown-thumb__text'),
  dropdownIconRef: document.querySelector('.dropdown-thumb__svg'),
};

export const setSearchValue = value => {
  refs.keySearchWord.value = value;
};

export const setCountryValue = value => {
  refs.countryListRef.value = value;
  refs.dropdownTextRef.setAttribute('data-country-id', value);
  refs.dropdownTextRef.textContent = value || 'Choose country';
};

const initFilters = () => {
  refs.keySearchWord.addEventListener(
    'input',
    debounce(e => {
      uiService.onSearch(e.target.value);
    }, 500),
  );
};

refs.dropdownBox.addEventListener('click', onClickDropdown);

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

    const countriesData = { ...countryList };
    Object.keys(countriesData).forEach(code => {
      countriesData[code] = { country: countriesData[code], flag: code.toLowerCase() };
    });
    refs.countryListRef.innerHTML = dropdownTpl(countriesData);
    refs.countryListRef.querySelector('.all-countries-link').addEventListener('click', e => {
      e.preventDefault();
      setCountryValue('');
      uiService.onChangeCountry('');
      refs.countryListRef.classList.add('visually-hidden');
      refs.dropdownIconRef.classList.remove('dropdown-thumb__svg--open');
    });

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
