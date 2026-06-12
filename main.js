
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navBackdrop = document.querySelector('.nav-backdrop');
function closeNav(){ document.body.classList.remove('nav-open'); navLinks?.classList.remove('open'); navBackdrop?.classList.remove('show'); navToggle?.setAttribute('aria-expanded','false'); navToggle && (navToggle.textContent='☰'); }
function openNav(){ document.body.classList.add('nav-open'); navLinks?.classList.add('open'); navBackdrop?.classList.add('show'); navToggle?.setAttribute('aria-expanded','true'); navToggle && (navToggle.textContent='×'); }
navToggle?.addEventListener('click',()=> navLinks?.classList.contains('open') ? closeNav() : openNav());
navBackdrop?.addEventListener('click', closeNav);
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeNav));
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeNav(); });
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const obs = new IntersectionObserver(entries=>entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }}),{threshold:.12});
  revealEls.forEach(el=>obs.observe(el));
}else{ revealEls.forEach(el=>el.classList.add('visible')); }
function updateGlobalCartCount(){
  let cart={};
  try{ cart=JSON.parse(localStorage.getItem('tanaaCart') || '{}'); }catch(e){}
  const count = Object.values(cart).reduce((a,b)=>a+Number(b||0),0);
  document.querySelectorAll('[data-cart-count]').forEach(el=>{ el.textContent = count ? `(${count})` : ''; });
}
updateGlobalCartCount();
window.addEventListener('storage', updateGlobalCartCount);
