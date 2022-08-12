// eslint-disable-next-line import/extensions
import Cookie from '../../../js/utils/cookie.js';

document.addEventListener('click', (e) => {
  if (!e.target.matches('[data-cookie]')) return;

  if (e.target.dataset.cookie === 'set') {
    Cookie.set('spruce-test', true, new Date(Date.now() + 86400 * 1000 * 365).toUTCString(), '/');
  }

  switch (e.target.dataset.cookie) {
    case 'set':
      Cookie.set('spruce-test', true, new Date(Date.now() + 86400 * 1000 * 365).toUTCString(), '/');
      break;
    case 'get':
      // eslint-disable-next-line no-alert
      alert(Cookie.get('spruce-test'));
      break;
    case 'isset':
      // eslint-disable-next-line no-alert
      alert(Cookie.isset('spruce-test'));
      break;
    case 'remove':
      Cookie.remove('spruce-test');
      break;
    default:
  }
});
