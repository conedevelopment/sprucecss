import Cookie from '../../../js/utils/cookie.js';
const cookie = new Cookie();

if (cookie.isset('spruce-reading-direction')) {
  document.documentElement.setAttribute('dir', cookie.get('spruce-reading-direction'));
  document.getElementById('reading-direction').value = cookie.get('spruce-reading-direction');
}

if (cookie.isset('spruce-theme-mode')) {
  document.documentElement.setAttribute('data-theme-mode', cookie.get('spruce-theme-mode'));
  document.getElementById('theme-mode').value = cookie.get('spruce-theme-mode');
}
