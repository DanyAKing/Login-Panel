const registrationForm = document.getElementById('registration');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const alert = document.getElementById('password_alert');

registrationForm.addEventListener('submit', (event) => {
  if (passwordInput !== confirmPasswordInput) {
    alert.style.display = 'block';
    event.preventDefault();
  } else if (passwordInput === confirmPasswordInput) {
    alert.style.display = 'none';
  }
});

// passwordInput.addEventListener('click', () => {
//   alert.style.display = 'none';
// });
