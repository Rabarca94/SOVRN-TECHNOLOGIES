const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');
menu?.addEventListener('click',()=>{
 const open=nav?.dataset.open==='1';
 if(!nav)return;
 nav.dataset.open=open?'0':'1';
 nav.style.display=open?'none':'flex';
 if(!open)Object.assign(nav.style,{position:'absolute',top:'64px',left:'0',right:'0',padding:'20px 5vw',background:'#050505',flexDirection:'column',gap:'18px',borderBottom:'1px solid #222'});
});
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<1001&&nav){nav.style.display='none';nav.dataset.open='0'}}));
document.getElementById('quoteForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(e.target);
 const subject=encodeURIComponent('SOVRN Security Assessment Request');
 const body=encodeURIComponent(`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Customer Type: ${d.get('type')}
Property: ${d.get('property')}
Service: ${d.get('service')}
Budget: ${d.get('budget')}

Project Description:
${d.get('message')}`);
 document.getElementById('status').innerHTML='Request prepared. <a href="mailto:info@sovrnisi.com?subject='+subject+'&body='+body+'">Open email to send →</a>';
});