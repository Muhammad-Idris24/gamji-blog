// main.js: handles mobile menu toggling, dynamic year insertion, and small UI interactivity

document.addEventListener('DOMContentLoaded', function () {

  // mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('mobile-menu-open');

      // swap icons if present
      const openIcon = document.getElementById('menu-open');
      const closeIcon = document.getElementById('menu-close');
      if (openIcon && closeIcon) {
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  }

  // set year in footer if elements exist
  const yearEls = document.querySelectorAll('#year, #year-fac, #year-senate, #year-contact');
  const y = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = y);

  // basic contact form handler (demo)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // simple client-side validation
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill all fields.');
        return;
      }
      // for prototype, just show success; in real app submit to server
      alert('Message sent — thank you!');
      contactForm.reset();
    });
  }

});
