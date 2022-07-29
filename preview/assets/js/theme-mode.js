import Cookie from '../../../js/utils/cookie.js';
const cookie = new Cookie();

document.getElementById('theme-mode').addEventListener('input', function (event) {
  document.documentElement.setAttribute('data-theme-mode', event.target.value);
  cookie.set('spruce-theme-mode', event.target.value, 31556926, '/');
}, false);
