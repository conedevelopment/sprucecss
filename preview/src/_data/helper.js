export const getLinkActiveState = (itemUrl, pageUrl) => {
  let response = '';

  if (itemUrl === pageUrl) {
    response = ' aria-current="page"';
  }

  if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
    response += ' data-state="active"';
  }

  return response;
};

export const currentYear = () => {
  const today = new Date();
  return today.getFullYear();
};
