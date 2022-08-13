// eslint-disable-next-line import/extensions
import {setCookie, getCookie, issetCookie, removeCookie} from '../../../js/cookie.js';

document.addEventListener('click', (e) => {
  if (!e.target.matches('[data-cookie]')) return;

  switch (e.target.dataset.cookie) {
    case 'set':
      setCookie('spruce-test', true, 10, '/');
      break;
    case 'get':
      // eslint-disable-next-line no-alert
      alert(getCookie('spruce-test'));
      break;
    case 'isset':
      // eslint-disable-next-line no-alert
      alert(issetCookie('spruce-test'));
      break;
    case 'remove':
      removeCookie('spruce-test');
      break;
    default:
  }
});
