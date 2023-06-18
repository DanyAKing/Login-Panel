const registrationForm = document.getElementById('registration');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const alert = document.getElementById('password_incorrect');

registrationForm.addEventListener('submit', (event) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert.style.display = 'block';
    event.preventDefault();
  }
});
