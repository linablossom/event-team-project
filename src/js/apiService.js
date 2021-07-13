import fetchList from './api/fetchList';
import fetchItem from './api/fetchItem';

const apiService = {};

apiService.getList = async ({ searchKeyword, countryCode, page, perPage }) => {
  try {
    const response = await fetchList(searchKeyword, countryCode, page - 1, perPage);
    const data = response._embedded.events;
    const pagesCount = response.page.totalPages;

    return { data, pagesCount };
  } catch (e) {
    console.log(e);
    throw new Error('Cannot load list');
  }
};

apiService.getItem = async id => {
  try {
    return await fetchItem(id);
  } catch (e) {
    throw new Error('Cannot load item details');
  }
};

export default apiService;
