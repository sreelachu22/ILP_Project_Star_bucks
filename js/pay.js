//!Sreelakshmi
//popup window display
function payLogin() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('payPage').style.display = 'block';
  }
  

  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('payPage').style.display = 'none';
    window.location.href = 'home.html';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
  //Password visibility function. We can see the password if we click the eye icon
  function togglePasswordVisibility() {
    var passwordField = document.getElementById("username");
    var toggleIcon = document.getElementById("password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.innerHTML = "&#128064;";
    } else {
      passwordField.type = "password";
      toggleIcon.innerHTML = "&#128065;";
    }
  }


// Get the input fields and the Login button
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

// Add event listeners to the input fields
usernameInput.addEventListener('input', toggleButtonState);
passwordInput.addEventListener('input', toggleButtonState);

// Function to toggle the Login button state
function toggleButtonState() {
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue !== '' && passwordValue.length >= 8) {
    loginButton.removeAttribute('disabled');
  } else {
    loginButton.setAttribute('disabled', 'true');
  }
}




//Get help session javascript starts here
function getHelp() {
  document.getElementById('helpModal').style.display = 'block';
  document.getElementById('gettingHelp').style.display = 'block';
}

const usernameHelpInput = document.getElementById('username-help');
const dobInput = document.getElementById('dob');
const resetButton = document.getElementById('resetButton');

// Add event listeners to the input field
usernameHelpInput.addEventListener('input', toggleResetButtonState);
dobInput.addEventListener('input', toggleResetButtonState);

// Function to toggle the reset button state
function toggleResetButtonState() {
  const usernameValue = usernameHelpInput.value.trim();
  const dobValue = dobInput.value;

  if (usernameValue !== '' && dobValue !== '') {
    resetButton.removeAttribute('disabled');
  } else {
    resetButton.setAttribute('disabled', 'true');
  }
}

// To ensure focus on the date input field
const dateInput = document.getElementById('dobInput');

dateInput.addEventListener('click', function() {
  simulateClick();
});

function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  dateInput.dispatchEvent(event);
}

