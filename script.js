const menuOpen = document.querySelector('.menu-toggle.open');
const menuClose = document.querySelector('.menu-toggle.close');
const navMenu = document.querySelector('.nav-menu');

menuOpen.addEventListener('click', () => {
  navMenu.classList.add('active');
  menuOpen.style.display = 'none';
  menuClose.style.display = 'inline';
});

menuClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuOpen.style.display = 'inline';
  menuClose.style.display = 'none';
});
