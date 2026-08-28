document.getElementById('quoteForm')?.addEventListener('submit', function(e){
  e.preventDefault();

  const d = new FormData(this);
  const subject = encodeURIComponent('SOVRN Security Assessment Request');
  const body = encodeURIComponent(
`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Customer Type: ${d.get('customer_type')}
Property Type: ${d.get('property_type')}
Service Needed: ${d.get('service')}
Approximate Budget: ${d.get('budget')}

Project Description:
${d.get('message')}`
  );

  const email = 'info@sovrnisi.com';
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});