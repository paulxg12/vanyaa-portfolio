// main.js — Vanyaa Portfolio

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// GA4 page_view event (called on every page load)
if (typeof gtag !== 'undefined') {
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
}

// CTA click tracking
document.querySelectorAll('.btn, .nav-cta').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        cta_text: btn.textContent.trim(),
        page_path: window.location.pathname
      });
    }
  });
});

// Portfolio card click tracking
document.querySelectorAll('.portfolio-card a, .campaign-card a').forEach(function (link) {
  link.addEventListener('click', function () {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'campaign_view', {
        campaign_name: this.closest('.portfolio-card, .campaign-card')?.querySelector('h3')?.textContent || 'unknown'
      });
    }
  });
});
