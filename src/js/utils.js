export const renderUrlParams = query =>
  Object.keys(query)
    .map(k => `${k}=${query[k]}`)
    .join('&');

const PAGE_SHIFT = 3;

export const pagination = (page, maxPage) => {
  let firstShowedBtn = page - PAGE_SHIFT;
  const lastShowedBtn = page + PAGE_SHIFT;
  const showedBtns = [];
  for (let i = Math.max(firstShowedBtn, 1); i <= Math.min(lastShowedBtn, maxPage); i += 1) {
    showedBtns.push(i);
  }

  if (firstShowedBtn > 2) showedBtns.unshift('...');
  if (firstShowedBtn >= 2) showedBtns.unshift(1);
  if (lastShowedBtn < maxPage - 1) {
    showedBtns.push('...');
  }

  if (lastShowedBtn < maxPage) {
    showedBtns.push(maxPage);
  }
  return showedBtns;
};

export const isTablet = () => {
  return window.innerWidth < 1280 && window.innerWidth > 720;
};
