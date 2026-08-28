
const menu=document.querySelector('.mobile-menu');
const nav=document.querySelector('.site-nav');
menu?.addEventListener('click',()=>{
  const open=nav.dataset.open==='1';
  nav.dataset.open=open?'0':'1';
  nav.style.display=open?'none':'flex';
  if(!open){
    Object.assign(nav.style,{
      position:'absolute',top:'64px',left:'0',right:'0',padding:'20px 6vw',
      background:'#050505',flexDirection:'column',gap:'0',borderBottom:'1px solid #222'
    });
  }
});
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.target);
  const subject=encodeURIComponent('SOVRN Security Assessment Request');
  const body=encodeURIComponent(
`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Customer Type: ${d.get('customer_type')}
Property Type: ${d.get('property_type')}
Service: ${d.get('service')}
Budget: ${d.get('budget')}

Project:
${d.get('message')}`
  );
  window.location.href='mailto:info@sovrnisi.com?subject='+subject+'&body='+body;
});
