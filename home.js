
function mailtoSubmit(form){
  const d=new FormData(form);
  const subject=encodeURIComponent('SOVRN Security Assessment Request');
  const body=encodeURIComponent(
`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Customer Type: ${d.get('customer_type')}
Property Type: ${d.get('property_type')}
Service: ${d.get('service')}
Budget: ${d.get('budget')}

Project Description:
${d.get('message')}`
  );
  location.href='mailto:info@sovrnisi.com?subject='+subject+'&body='+body;
}

document.getElementById('desktopQuoteForm')?.addEventListener('submit',e=>{
  e.preventDefault(); mailtoSubmit(e.target);
});
document.getElementById('mobileQuoteForm')?.addEventListener('submit',e=>{
  e.preventDefault(); mailtoSubmit(e.target);
});

const menuBtn=document.querySelector('.mobile-menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
menuBtn?.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
