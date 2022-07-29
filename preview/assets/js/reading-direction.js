import Cookie from '../../../js/utils/cookie.js';
const cookie = new Cookie();

document.addEventListener('input', function (event) {
	if (event.target.id !== 'reading-direction') return;

  document.documentElement.setAttribute('dir', event.target.value);
  cookie.set('spruce-reading-direction', event.target.value, 31556926, '/');
}, false);
