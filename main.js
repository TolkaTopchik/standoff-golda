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
