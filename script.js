let slideIndex=0;
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');

function showSlide(n){
    slides.forEach(s=>s.classList.remove('active'));
    dots.forEach(d=>d.classList.remove('active'));
    if(n>=slides.length)slideIndex=0;
    if(n<0)slideIndex=slides.length-1;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function changeSlide(n){
    slideIndex+=n;
    showSlide(slideIndex);
}

function currentSlide(n){
    slideIndex=n;
    showSlide(slideIndex);
}

function toggleMenu(){
    document.getElementById('menu').classList.toggle('active');
}

function closeMenu(){
    if(window.innerWidth<=768){
        document.getElementById('menu').classList.remove('active');
    }
}

setInterval(()=>{slideIndex++;showSlide(slideIndex)},4000);
showSlide(slideIndex);

document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{
    e.preventDefault();
    closeMenu();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
