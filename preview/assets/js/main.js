import Cookie from '../../../js/utils/cookie.js';

const cookie = new Cookie();

cookie.set('spruce-test', true, null, '/', { 'max-age': 31536000 });
