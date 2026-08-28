document.getElementById('quoteForm')?.addEventListener('submit',e=>{
e.preventDefault();const d=new FormData(e.target);
const subject=encodeURIComponent('SOVRN Security Assessment Request');
const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nCustomer Type: ${d.get('customer_type')}\nProperty Type: ${d.get('property_type')}\nService: ${d.get('service')}\nBudget: ${d.get('budget')}\n\nProject Description:\n${d.get('message')}`);
location.href='mailto:info@sovrnisi.com?subject='+subject+'&body='+body;
});