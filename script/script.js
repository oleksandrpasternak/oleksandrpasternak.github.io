// Модальне вікно
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('search-modal');
const closeBtn = document.querySelector('.close-btn');
const searchForm = modal.querySelector('form');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Не знайдено');
    modal.style.display = 'none';
});

const btnBackToTop = document.getElementById('btnBackToTop');

if (btnBackToTop) {
  // показувати / ховати кнопку при скролі
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btnBackToTop.classList.add('btn-back-to-top--visible');
    } else {
      btnBackToTop.classList.remove('btn-back-to-top--visible');
    }
  });

  // плавна прокрутка догори
  btnBackToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

