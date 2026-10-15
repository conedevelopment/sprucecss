document.getElementById('style-switcher').addEventListener('input', (e) => {
  if (e.target.value) {
    document.documentElement.setAttribute('data-spruce-style', e.target.value);
    localStorage.setItem('spruce-style', e.target.value);
  } else {
    document.documentElement.removeAttribute('data-spruce-style');
    localStorage.removeItem('spruce-style');
  }
}, false);
