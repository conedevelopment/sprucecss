document.getElementById('reading-direction').addEventListener('input', function (event) {
  document.documentElement.setAttribute('dir', event.target.value);
  localStorage.setItem('spruce-reading-direction', event.target.value, 31556926, '/');
}, false);
