
//!Login popup window display
function payLogin() {
  let payPage = document.createElement('div');
  payPage.setAttribute("id",  'payPage');
  payPage.style.display = 'block';
  
  let loginModal = document.createElement('div');
  loginModal.setAttribute("id",  'loginModal');
  loginModal.className = 'modal';
  
  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  let closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.setAttribute("id",  'closeButton');
  closeButton.onclick = function() {closeLoginModal();};
  closeButton.textContent = 'SKIP';
  
  let h2 = document.createElement('h2');
  h2.textContent = 'Login';
  
  let loginForm = document.createElement('form');
  loginForm.className = 'loginForm';
  
  let usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'USERNAME';

    let username = document.createElement('input');
    username.type = 'text';
    username.setAttribute("id",  'username-login');
    username.setAttribute('placeholder', 'Enter your mobile number*');
    username.required = true;

    // Create the label and input for password
    let passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'PASSWORD';

    let password = document.createElement('input');
    password.type = 'password';
    password.setAttribute("id",  'password');
    password.setAttribute('placeholder', 'Enter your password(Minimum length 8)*');
    password.required = true;

    // Create the toggle password button
    let togglePasswordButton = document.createElement('span');
    togglePasswordButton.setAttribute("id",  'togglePassword');
    togglePasswordButton.onclick = function() {togglePasswordVisibility();};

    // Create the sign up link
    let signUpLink = document.createElement('a');
    signUpLink.className = 'green';
    signUpLink.href = "signup.html";
    signUpLink.textContent = 'Sign Up';

    let signUpText = document.createElement('p');
    signUpText.textContent = "Don't have an account? ";
    signUpText.appendChild(signUpLink);

    // Create the login button
    let loginButton = document.createElement('button');
    loginButton.setAttribute("id",'loginButton');
    username.addEventListener('input', validateInputs);
    password.addEventListener('input', validateInputs);

    loginButton.onclick = function() {redirectPay();};
    loginButton.textContent = 'Login';
    loginButton.disabled = true;
    function validateInputs() {
      const usernameValue = username.value.trim();
      const passwordValue = password.value.trim();
      
      if(!(passwordValue.length >= 8)){
        loginButton.disabled = true;
      }
      else{
        loginButton.disabled = false;
      }
    }

    let paragraph = document.createElement('p'); 
    paragraph.textContent = "Facing trouble logging in? "
    let anchor = document.createElement('a');
    anchor.className = 'green';
    anchor.href = '#helpModal';
    anchor.textContent = 'Get Help';
    anchor.onclick =  function() { getHelp(); };
    paragraph.appendChild(anchor);
    paragraph.style.position = "absolute"
    paragraph.style.bottom = "0"
    paragraph.style.marginLeft = "30%"
    // Append all elements to the form
    loginForm.appendChild(usernameLabel);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(username);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(passwordLabel);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(password);
    loginForm.appendChild(togglePasswordButton);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(signUpText);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(loginButton);
    modalContent.appendChild(paragraph);  
  modalContent.appendChild(closeButton);
  modalContent.appendChild(h2);
  modalContent.appendChild(loginForm);
  loginModal.appendChild(modalContent);
  payPage.appendChild(loginModal);
  document.body.appendChild(payPage);
  }
  
//!closing popup
  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('payPage').style.display = 'none';
    window.location.href = 'home.html';
  }
  
  window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  window.onclick = function(event) {
    let modal = document.getElementById('helpModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
//onclick functions
  function redirect2(){ window.location.href = "signup2.html"; }
  function redirectPay(){ window.location.href = "pay.html"; }

//!Get help session javascript starts here

function getHelp() {
  let container = document.createElement('div');
  container.setAttribute("id","gettingHelp");
  let helpModal = document.createElement('div');
  helpModal.setAttribute("id",'helpModal');
  helpModal.classList.add('modal');

  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  let closeButton = document.createElement('button');
  closeButton.classList.add('close');
  closeButton.setAttribute("id",'closeButton');
  closeButton.textContent = 'X';
  closeButton.onclick = function() { closeLoginModal(); };

  let helpText = document.createElement('h2');
  helpText.textContent = 'Get Help';

  let paragraph = document.createElement('p');
  paragraph.style.fontSize = 'large';
  paragraph.textContent = 'Please enter your registered details and we will send you an OTP to reset your password.';

  let loginForm = document.createElement('form');
  loginForm.classList.add('loginForm');

  let usernameLabel = document.createElement('label');
  usernameLabel.setAttribute('for','username');
  usernameLabel.textContent = 'USERNAME';

  let usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.setAttribute("id",'username-help');
  usernameInput.placeholder = 'Enter your mobile number*';
  usernameInput.required = true;

  let dobLabel = document.createElement('label');
  dobLabel.setAttribute('for','dob');
  dobLabel.textContent = 'DATE OF BIRTH';

  let dob = document.createElement('input');
  dob.type = 'date';
  dob.setAttribute("id",'dob');
  dob.placeholder = 'DD/MM/YY';
  dob.required = true;

  let resetButton = document.createElement('button');
  resetButton.setAttribute("id",'resetButton');
  resetButton.textContent = 'Reset Password';
  resetButton.onclick = function() { };
  // resetButton.disabled = true;
  modalContent.appendChild(closeButton);
  modalContent.appendChild(helpText);
  modalContent.appendChild(paragraph);
  modalContent.appendChild(loginForm)
  loginForm.appendChild(usernameLabel);
  loginForm.appendChild(usernameInput);
  loginForm.appendChild(dobLabel);
  loginForm.appendChild(dob);
  loginForm.appendChild(resetButton);

  helpModal.appendChild(modalContent);
  container.appendChild(helpModal);
  document.body.appendChild(container);
  gettingHelp.style.display = "block"
  }

//!password visibility
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
//!Login page validation


//!Payment page js
// async function validateCardDetails() {
//   // Retrieve card details from the form
//   const cardNumber = document.getElementById('cardNumber').value;
//   const expiryDate = document.getElementById('expiryDate').value;
//   const cvCode = document.getElementById('cvCode').value;
//   const cardOwner = document.getElementById('cardOwner').value;
 
//   // Fetch account information from the bank API
//   const response = await fetch('bank_api_url/account', {
//      method: 'GET',
//      headers: {
//        'Content-Type': 'application/json',
//        'Authorization': 'bank_api_key',
//      },
//   });
 
//   const data = await response.json();
 
//   // Validate the card details
//   if (data.cards.includes(cardNumber) && data.cvv.includes(cvCode) && data.expiry.includes(expiryDate) && data.names.includes(cardOwner)) {
//      document.getElementById('confirmPayment').disabled = false;
//   } else {
//      document.getElementById('confirmPayment').disabled = true;
//   }
//  }
 
//  document.getElementById('confirmPayment').disabled = true;
//  document.getElementById('cardNumber').addEventListener('input', validateCardDetails);
//  document.getElementById('expiryDate').addEventListener('input', validateCardDetails);
//  document.getElementById('cvCode').addEventListener('input', validateCardDetails);
//  document.getElementById('cardOwner').addEventListener('input', validateCardDetails);


//!Payment successful

function paymentSuccessful() {
  let paySuccess = document.createElement('div');
  paySuccess.setAttribute("id", 'paySuccess');
  paySuccess.style.borderColor = "green"

  let closeButton = document.createElement('a');
  closeButton.classList.add('close');
  closeButton.setAttribute("id",'closeButton');
  closeButton.textContent = 'X';
  closeButton.href = "home.html"; 

  let greenTick = document.createElement('img');
  greenTick.src = '/img/green_tic.png';
  greenTick.style.height = "60px";
  greenTick.style.width = "60px"
  greenTick.classList.add("greenTick")

  let accountSuccess = document.createElement('p');
  accountSuccess.setAttribute("id", 'accountSuccess');
  accountSuccess.innerText = 'Payment successful';

  paySuccess.appendChild(closeButton);
  paySuccess.appendChild(greenTick);
  paySuccess.appendChild(accountSuccess);

  document.body.appendChild(paySuccess);
  paySuccess.style.display = 'block';
}