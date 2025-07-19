document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth'
        });
      }
      // Close mobile menu after click
      const navMenu = document.getElementById('nav-menu');
      if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
      }
    }
  });
});