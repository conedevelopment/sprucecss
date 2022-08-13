/**
 * Set a cookie value for the given key.
 *
 * @param  {string}  key
 * @param  {string} value
 * @param  {number|null}  expires
 * @param  {string}  path
 * @param  {object}  options
 * @return {void}
 */
export function setCookie(key, value, expires = null, path = '/', options = {}) {
  const defaults = {
    [key]: value,
    expires,
    path,
    SameSite: 'Lax',
    Secure: true,
  };

  const pairs = { ...defaults, ...options };

  pairs.expires = pairs.expires ? new Date(Date.now() + 86400 * 1000 * pairs.expires)
    .toUTCString() : null;

  document.cookie = Object.entries(pairs)
    .reduce((stack, entry) => stack.concat(entry.join('=')), [])
    .join('; ');
}

/**
 * Get the cookie with the given key.
 *
 * @param  {string}  key
 * @return {mixed}
 */
export function getCookie(key) {
  const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));

  return (cookie && cookie[2]) ? cookie[2] : null;
}

/**
 * Determine if the given cookie exists.
 *
 * @param  {string}  key
 * @return {bool}
 */
export function issetCookie(key) {
  return document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`)) !== null;
}

/**
 * Remove the given cookie.
 *
 * @param  {string}  key
 * @return {void}
 */
export function removeCookie(key) {
  setCookie(key, null, 'Thu, 01 Jan 1970 00:00:01 GMT');
}
