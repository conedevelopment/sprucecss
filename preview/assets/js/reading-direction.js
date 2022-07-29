import Cookie from '../../../js/utils/cookie.js';
const cookie = new Cookie();

document.getElementById('reading-direction').addEventListener('input', function (event) {
  document.documentElement.setAttribute('dir', event.target.value);
  cookie.set('spruce-reading-direction', event.target.value, 31556926, '/');
}, false);
