// form.js — Inquiry Form Handling

function handleSubmit(event) {
  event.preventDefault();

  var form = document.getElementById('inquiryForm');
  var honey = document.getElementById('honey').value;

  // Honeypot anti-spam check
  if (honey !== '') {
    console.log('Spam detected.');
    return false;
  }

  // Checkbox validation: at least one deliverable checked
  var checkboxes = document.querySelectorAll('input[name="deliverables"]:checked');
  if (checkboxes.length === 0) {
    alert('Please select at least one deliverable.');
    return false;
  }

  // Lead quality classification
  var budget = document.getElementById('budget').value;
  var timeline = document.getElementById('timeline').value;
  var quality = 'Low';

  if ((budget === '5k+' || budget === '3k-5k') && timeline !== '') {
    quality = 'High';
  } else if (budget === '1k-3k' || budget === '500-1k') {
    quality = 'Medium';
  }

  document.getElementById('leadQualityField').value = quality;
  document.getElementById('leadQuality').textContent = quality + ' (' + budget + ')';

  // GA4 form_submit event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      lead_quality: quality,
      budget_range: budget
    });
  }

  // Meta Pixel Lead event
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: 'Collaboration Inquiry',
      value: budget === '5k+' ? 5000 : budget === '3k-5k' ? 3000 : budget === '1k-3k' ? 1000 : 500,
      currency: 'USD'
    });
  }

  // Build form data for email notification
  var formData = {
    name: document.getElementById('fullName').value,
    company: document.getElementById('company').value,
    email: document.getElementById('workEmail').value,
    website: document.getElementById('website').value,
    objective: document.getElementById('objective').value,
    deliverables: Array.from(checkboxes).map(cb => cb.value).join(', '),
    budget: budget,
    timeline: timeline,
    usageRights: document.getElementById('usageRights').value,
    region: document.getElementById('region').value,
    notes: document.getElementById('notes').value,
    leadQuality: quality
  };

  // Send auto-reply (client-side trigger — backend required for real email)
  // For now, log the data; client should connect to Formspree, EmailJS, or custom endpoint
  console.log('Form submitted:', formData);

  // Show success message, hide form
  form.style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';

  // Scroll to success message
  document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });

  // Email notification placeholder — client to replace with actual endpoint
  /*
  fetch('/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }).then(function(response) {
    // Handle response
  });
  */

  return false;
}

// Form start tracking
var formStarted = false;
document.querySelectorAll('#inquiryForm input, #inquiryForm select, #inquiryForm textarea').forEach(function (el) {
  el.addEventListener('focus', function () {
    if (!formStarted) {
      formStarted = true;
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_start', {
          page_path: window.location.pathname
        });
      }
    }
  });
});
