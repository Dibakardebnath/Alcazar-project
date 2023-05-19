const form = document.querySelector('#forgotPasswordForm');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');
const emailLabel = document.querySelector('label[for="email"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;

  // Check if email is valid
  if (!isValidEmail(email)) {
    message.textContent = 'Please enter a valid email address.';
    message.classList.add('show');
    return;
  }

  // Send password reset link to email
  sendPasswordResetLink(email);

  // Show success message
  message.textContent = 'Password reset link has been sent to your email.';
  message.classList.add('show');
});

function isValidEmail(email) {
  // Use regular expression to validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendPasswordResetLink(email) {
  // Use AJAX or fetch to send a password reset link to the email
  // You can also redirect the user to a password reset page with a unique token in the URL
}

emailInput.addEventListener('focus', function(){
  emailLabel.style.display = 'inline';
  this.placeholder = '';
});

emailInput.addEventListener('blur', function(){
  if(!this.value){
    emailLabel.style.display = 'none';
    this.placeholder = 'ENTER YOUR EMAIL*';
  }
});
