// Small helpers for the interactive previews (dialogs, indeterminate checkboxes, loading buttons).
document.querySelectorAll('[data-open-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.openDialog)?.showModal();
  });
});

document.querySelectorAll('[data-close-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('dialog')?.close();
  });
});

document.querySelectorAll('[data-indeterminate]').forEach((checkbox) => {
  checkbox.indeterminate = true;
});

document.querySelectorAll('[data-toggle-loading]').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('btn--loading');
    button.setAttribute('aria-busy', 'true');

    setTimeout(() => {
      button.classList.remove('btn--loading');
      button.removeAttribute('aria-busy');
    }, 2000);
  });
});
