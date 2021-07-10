import { API_URL, API_KEY } from '../constants';
import { renderUrlParams } from '../utils';

const fetchList = async (searchKeyword, countryCode, page, perPage) => {
  const query = {
    apikey: API_KEY,
    page: page,
    size: perPage,
  };

  if (searchKeyword) {
    query.keyword = searchKeyword;
  }

  if (countryCode) {
    query.countryCode = countryCode;
  }
  const url = `${API_URL}/events?${renderUrlParams(query)}`;
  const response = await fetch(url);
  return response.json();
};

export default fetchList;
