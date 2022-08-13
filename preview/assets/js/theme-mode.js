document.getElementById('theme-mode').addEventListener('input', (e) => {
  document.documentElement.dataset.themeMode = e.target.value;
  localStorage.setItem('spruce-theme-mode', e.target.value, 31556926, '/');
}, false);
