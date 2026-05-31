/**
 * newsletter.js — Newsletter form handler
 * Submits email to Cloudflare Worker which proxies to MailerLite API.
 * Drop this script on any page with a .newsletter-form element.
 */

(function () {
  const WORKER_URL = 'https://newsletter.3dprintshopsoftware.com/subscribe';

  function initNewsletterForms() {
    const forms = document.querySelectorAll('.newsletter-form');

    forms.forEach(function (form) {
      const input = form.querySelector('input[type="email"]');
      const button = form.querySelector('button');

      if (!input || !button) return;

      button.addEventListener('click', function () {
        handleSubmit(input, button);
      });

      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleSubmit(input, button);
      });
    });
  }

  function handleSubmit(input, button) {
    const email = input.value.trim();

    if (!email || !isValidEmail(email)) {
      setState(input, button, 'error', 'Enter a valid email');
      return;
    }

    setState(input, button, 'loading', 'Subscribing...');

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
      .then(function (res) {
        if (res.ok) {
          setState(input, button, 'success', 'Subscribed');
          input.value = '';
        } else {
          return res.json().then(function (data) {
            throw new Error(data.message || 'Subscription failed');
          });
        }
      })
      .catch(function (err) {
        setState(input, button, 'error', 'Something went wrong');
        console.error('Newsletter error:', err);
      });
  }

  function setState(input, button, state, message) {
    if (state === 'loading') {
      button.textContent = message;
      button.disabled = true;
      input.disabled = true;
    } else if (state === 'success') {
      button.textContent = message;
      button.style.background = '#2e7d32';
      button.disabled = true;
      input.disabled = true;
    } else if (state === 'error') {
      button.textContent = 'Try again';
      button.disabled = false;
      input.disabled = false;
      input.style.borderColor = '#b45309';
      setTimeout(function () {
        input.style.borderColor = '';
        button.textContent = 'Subscribe';
      }, 3000);
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsletterForms);
  } else {
    initNewsletterForms();
  }
})();