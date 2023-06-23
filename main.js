const openFormBtn = document.getElementById('open-form-btn');
const openFormBtnTwo = document.getElementById('open-form-btn-two');
const formModal = document.getElementById('form-modal');
const overlay = document.getElementById('overlay');
const registrationForm = document.getElementById('registration-form');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');

openFormBtn.addEventListener('click', function() {
  formModal.classList.add('show');
  overlay.classList.add('show');
});

openFormBtnTwo.addEventListener('click', function() {
  formModal.classList.add('show');
  overlay.classList.add('show');
});

 
closeBtn.addEventListener('click', function() {
  formModal.classList.remove('show');
  overlay.classList.remove('show');
});

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulating registration success
  setTimeout(function() {
    formModal.classList.remove('show');
    overlay.classList.add('show');
    successModal.classList.add('show');
    setTimeout(function() {
      overlay.classList.remove('show');
      successModal.classList.remove('show');
    }, 2200);
  }, 1000);
});

// Отримати всі елементи з анімаціями
var animationElements = document.querySelectorAll('.info-text-box');

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функція, яка запускає анімацію для видимих елементів
function handleScroll() {
  for (var i = 0; i < animationElements.length; i++) {
    var element = animationElements[i];
    if (isElementInViewport(element)) {
      element.classList.add('animate'); // Додати клас, який запускає анімацію
    }
  }
}

// Викликати функцію handleScroll при прокрутці сторінки
window.addEventListener('scroll', handleScroll);

// Викликати функцію handleScroll одразу, щоб показати анімації, які вже в полі зору
handleScroll();
