function go(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('on'));
  const pg=document.getElementById('page-'+n);
  const nl=document.getElementById('nl-'+n);
  if(pg){pg.classList.add('on');window.scrollTo({top:0,behavior:'smooth'})}
  if(nl)nl.classList.add('on');
  setTimeout(rev,100);
}
function toggleMob(){document.getElementById('mob').classList.toggle('open')}
function setLang(l){
  const b=document.body;
  document.querySelectorAll('#btn-en,#btn-zh').forEach(el=>el.classList.remove('on'));
  if(l==='zh'){
    b.classList.add('zh-mode');
    document.querySelectorAll('#btn-zh').forEach(el=>el.classList.add('on'));
  } else {
    b.classList.remove('zh-mode');
    document.querySelectorAll('#btn-en').forEach(el=>el.classList.add('on'));
  }
}
function rev(){
  const els=document.querySelectorAll('.page.on .reveal:not(.in)');
  if('IntersectionObserver' in window){
    const ob=new IntersectionObserver((entries)=>{
      entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);ob.unobserve(e.target)}});
    },{threshold:0.07});
    els.forEach(el=>ob.observe(el));
  } else {els.forEach(el=>el.classList.add('in'))}
}
document.addEventListener('DOMContentLoaded',rev);
