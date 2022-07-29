import Cookie from '../../../js/utils/cookie.js';
const cookie = new Cookie();

document.documentElement.setAttribute('dir', cookie.get('spruce-reading-direction'));
document.getElementById('reading-direction').value = cookie.get('spruce-reading-direction');
