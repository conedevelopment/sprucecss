document.getElementById('theme-mode').addEventListener('input', function (event) {
  document.documentElement.setAttribute('data-theme-mode', event.target.value);
  localStorage.setItem('spruce-theme-mode', event.target.value, 31556926, '/');
}, false);
