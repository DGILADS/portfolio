//HAMBURGUER MENU MOBILE//
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });