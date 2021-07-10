export const renderUrlParams = query =>
  Object.keys(query)
    .map(k => `${k}=${query[k]}`)
    .join('&');
