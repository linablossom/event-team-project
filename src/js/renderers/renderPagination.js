import { pagination } from '../utils';
import createPaginationTpl from '../../tpl/pagination.hbs';
import uiService from '../uiService';

const paginationContainer = document.querySelector('.pagination-list');
const renderPagination = ({ page, maxPage, onChange }) => {
  const pages = pagination(page, maxPage);

  paginationContainer.innerHTML = createPaginationTpl(
    pages.map(x => ({
      pageNum: x,
      isEmpty: x === '...',
      isCurrent: x === page,
      isPage: x !== '...' && x !== page,
    })),
  );
};
paginationContainer.addEventListener('click', e => {
  const page = e.target.dataset.page;
  if (!page) return;
  e.preventDefault();

  uiService.onChangePage(+page);
});

export default renderPagination;
