document.querySelector('#nav-search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    window.location.href = '/search?q=' + event.target.value;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = document.querySelector('#theme-switcher');
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeSwitcher.icon = theme === 'dark' ? 'moon-fill' : 'sun-fill';
    localStorage.setItem('theme', theme);
  }

  const theme = localStorage.getItem('theme') || 'light';
  setTheme(theme);

  themeSwitcher.addEventListener('click', function () {
    const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(theme);
  });

  const dirSwitcher = document.querySelector('#dir-switcher');
  function setDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    themeSwitcher.innetText = dir;
    localStorage.setItem('dir', dir);
  }

  const dir = localStorage.getItem('dir') || 'ltr';
  setDir(dir);

  dirSwitcher.addEventListener('click', function () {
    const dir = localStorage.getItem('dir') === 'ltr' ? 'rtl' : 'ltr';
    setDir(dir);
  });
});
