import renderService from './renderService';
import apiService from './apiService';

const { renderList, renderItem, renderFilters, renderPagination } = renderService;

const uiParams = {
  searchKeyword: '',
  countryCode: '',
  page: 1,
  perPage: 20,
  maxPage: null,
  activeItemId: null,
};

const uiData = {
  list: null,
  listLoading: false,
  listError: null,
  item: null,
  itemLoading: false,
  itemError: null,
};

const uiService = {};

const updateList = () => {
  renderList({
    data: uiData.list,
    loading: uiData.listLoading,
    error: uiData.listError,
    onOpen: uiService.onOpenItem,
  });
  renderPagination({
    page: uiParams.page,
    maxPage: uiParams.maxPage,
    onChange: uiService.onChangePage,
  });
};

const updateItem = () => {
  renderItem({
    id: uiParams.activeItemId,
    data: uiData.item,
    loading: uiData.itemLoading,
    error: uiData.itemError,
    onRelated: uiService.onShowRelated,
  });
};

const loadList = async () => {
  try {
    uiData.list = null;
    uiData.listLoading = true;
    uiData.listError = null;
    updateList();
    const { data, pagesCount } = await apiService.getList({
      searchKeyword: uiParams.searchKeyword,
      countryCode: uiParams.countryCode,
      page: uiParams.page,
      perPage: uiParams.perPage,
      maxPage: uiParams.maxPage,
    });
    uiData.list = data;
    uiData.listLoading = false;
    uiParams.maxPage = pagesCount;
    updateList();
  } catch (e) {
    uiData.listError = 'Cannot load events';
    updateList();
  }
};

uiService.initialLoading = loadList;

uiService.onSearch = async value => {
  if (value === uiParams.searchKeyword) {
    return;
  }
  uiParams.page = 1;
  uiParams.searchKeyword = value;
  await loadList();
};

uiService.onChangeCountry = async value => {
  if (value === uiParams.countryCode) {
    return;
  }
  uiParams.page = 1;
  uiParams.countryCode = value;
  await loadList();
};

uiService.onChangePage = async page => {
  if (page > uiParams.maxPage) return;
  uiParams.page = page;
  await loadList();
};

uiService.onShowRelated = async value => {
  uiParams.countryCode = '';
  uiParams.page = 1;
  uiParams.activeItemId = null;
  renderFilters({
    searchKeyword: value,
    countryCode: uiParams.countryCode,
  });
  updateItem();
  await uiService.onSearch(value);
};

uiService.onOpenItem = async id => {
  try {
    uiParams.activeItemId = id;
    uiData.item = null;
    uiData.itemLoading = true;
    uiData.itemError = null;
    updateItem();
    uiData.item = await apiService.getItem(uiParams.activeItemId);
    uiData.itemLoading = false;
    updateItem();
  } catch (e) {
    uiData.itemError = 'Cannot load item';
  }
};

uiService.onCloseItem = () => {
  uiParams.activeItemId = null;
  uiData.item = null;
  uiData.itemLoading = false;
  uiData.itemError = null;
  updateItem();
};
export default uiService;
