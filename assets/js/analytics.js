// analytics.js — GA4 + Meta Pixel Setup

// GA4 Configuration
// Replace G-XXXXXXXXXX with actual GA4 Measurement ID
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // [REQUIRED FROM CLIENT: Replace with real GA4 ID]

// Meta Pixel (Facebook Pixel) Configuration
// Replace 000000000000000 with actual Pixel ID
!function(f,b,e,v,n,t,s) {
  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '000000000000000'); // [REQUIRED FROM CLIENT: Replace with real Pixel ID]
fbq('track', 'PageView');
