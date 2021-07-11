import { setSearchValue, setCountryValue } from './filters';

const renderFilters = ({ searchKeyword, countryCode }) => {
  setSearchValue(searchKeyword);
  setCountryValue(countryCode);
};

export default renderFilters;
