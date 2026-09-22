
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navlinks');
if(menuBtn){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
}

const modal = document.querySelector('.modal');
const modalImg = modal?.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(!modal || !modalImg) return;
    modalImg.src = btn.dataset.lightbox;
    modal.classList.add('open');
    document.body.style.overflow='hidden';
  });
});
function closeModal(){
  if(!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow='';
}
modal?.querySelector('button')?.addEventListener('click',closeModal);
modal?.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeModal(); });

const year = document.querySelector('[data-year]');
if(year) year.textContent = new Date().getFullYear();
