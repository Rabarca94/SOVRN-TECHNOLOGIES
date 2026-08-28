const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');menu?.addEventListener('click',()=>{const open=nav.dataset.open==='1';nav.dataset.open=open?'0':'1';nav.style.display=open?'none':'flex';if(!open){nav.style.position='absolute';nav.style.top='70px';nav.style.left='0';nav.style.right='0';nav.style.padding='24px 7vw';nav.style.background='#050505';nav.style.flexDirection='column';nav.style.gap='20px';nav.style.borderBottom='1px solid #222'}});document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<951){nav.style.display='none';nav.dataset.open='0'}}));document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const subject=encodeURIComponent('SOVRN Consultation Request — '+d.get('property'));const body=encodeURIComponent(`Name: ${d.get('name')}
Email: ${d.get('email')}
Phone: ${d.get('phone')}
Property: ${d.get('property')}
Budget: ${d.get('budget')}
Service: ${d.get('service')}

Project details:
${d.get('message')}`);document.getElementById('status').innerHTML='Request prepared. <a href="mailto:info@sovrnisi.com?subject='+subject+'&body='+body+'">Open email to send →</a>'});