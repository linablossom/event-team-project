import { pagination } from '../utils';
const renderPagination = ({ page, maxPage, onChange }) => {
  const pages = pagination(page, maxPage);
};

export default renderPagination;
