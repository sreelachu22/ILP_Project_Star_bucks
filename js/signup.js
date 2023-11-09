// Add event listeners to input fields for validation
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const passwordInput = document.getElementById('createPass');
const confirmPasswordInput = document.getElementById('confirmPass');
const continueButton = document.getElementById('continueButton');

// Add event listeners to the input fields
emailInput.addEventListener('input', toggleContinueButtonState);
mobileInput.addEventListener('input', toggleContinueButtonState);
passwordInput.addEventListener('input', toggleContinueButtonState);
confirmPasswordInput.addEventListener('input', toggleContinueButtonState);

// Function to toggle the Login button state
function toggleContinueButtonState() {
  const emailValue = emailInput.value.trim();
  const mobileValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPassValue = passwordInput.value.trim();

  if (emailValue !== '' && mobileValue.length >= 10 && passwordValue.length >= 8 && passwordValue===confirmPassValue) {
    continueButton.removeAttribute('disabled');
  } else {
    continueButton.setAttribute('disabled', 'true');
  }
}


function togglePasswordVisibility() {
    var passwordField = document.getElementById("email");
    var toggleIcon = document.getElementById("create-pass");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.innerHTML = "&#128064;";
    } else {
      passwordField.type = "password";
      toggleIcon.innerHTML = "&#128065;";
    }
  }