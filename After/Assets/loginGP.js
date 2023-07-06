function showError(message) {
  // Create an error message element
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  // Insert the error message element into the document
  const form = document.querySelector('form');
  form.insertBefore(errorMessage, form.firstChild);

  // Clear the error message after 3 seconds
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}
// Check if error message exists in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const errorMessage = urlParams.get('error');
  const successMessage = urlParams.get('success');

  if (successMessage) {
    alert(successMessage);
    window.location.href = "../html/loginGP.html";
  }
  
 
  

  const passwordInput = document.getElementById('password');
const passwordMessage = document.getElementById('password-message');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordMessage.textContent = 'Password must be at least 8 characters long.';
  } else {
    passwordMessage.textContent = '';
  }
});

const usernameInput = document.getElementById('username');
const usernameMessage = document.getElementById('username-message');

usernameInput.addEventListener('input', () => {
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(usernameInput.value)) {
    usernameMessage.textContent = 'Username must contain only letters and numbers.';
  } else {
    usernameMessage.textContent = '';
  }
});


