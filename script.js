// Menu toggle cho mobile
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Ẩn menu khi click link (mobile)
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('active');
  });
});

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
    dots[i].classList.toggle('active', i === n);
  });
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Tự động chạy slideshow (tuỳ chọn)
setInterval(() => {
  changeSlide(1);
}, 5000);

