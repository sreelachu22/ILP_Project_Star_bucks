
//!Login popup window display
function payLogin() {
    let payPage = document.createElement('div');
    payPage.setAttribute("id",  'payPage');
    
    
    let loginModal = document.createElement('div');
    loginModal.setAttribute("id",  'loginModal');
    loginModal.className = 'modal';
    
    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    let closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.setAttribute("id",  'closeButton');
    //function to close the popup
    closeButton.onclick = function() {closeLoginModal();};
    closeButton.textContent = 'SKIP';
    
    let h2 = document.createElement('h2');
    h2.textContent = 'Login';
    //Form starts here
    let loginForm = document.createElement('form');
    loginForm.className = 'loginForm';
    
    let usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'USERNAME';

    let username = document.createElement('input');
    username.type = 'text';
    username.setAttribute("id",  'username');
    username.setAttribute('placeholder', 'Enter your mobile number*');
    username.required = true;

    let passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'PASSWORD';

    let password = document.createElement('input');
    password.type = 'password';
    password.setAttribute("id",  'password');
    password.setAttribute('placeholder', 'Enter your password(Minimum length 8)*');
    password.required = true;

    // Create the toggle password visibility button
    let togglePasswordButton = document.createElement('span');
    togglePasswordButton.setAttribute("id",  'togglePassword');
    togglePasswordButton.onclick = function() {togglePasswordVisibility();};

    // Create the sign up link which redirect to signup page
    let signUpLink = document.createElement('a');
    signUpLink.className = 'green';
    signUpLink.href = "signup.html";
    signUpLink.textContent = 'Sign Up';

    let signUpText = document.createElement('p');
    signUpText.textContent = "Don't have an account? ";
    signUpText.appendChild(signUpLink);

    // Create the login button which checks login validation
    let loginButton = document.createElement('button');
    loginButton.setAttribute("id",'loginButton');
    loginButton.textContent = 'Login';
    //calling loginValidation function to check username and password is present in the fetched api
    loginButton.onclick = function(event) {loginValidation(event);}
    let paragraph = document.createElement('p'); 
    paragraph.textContent = "Facing trouble logging in? "
    let anchor = document.createElement('a');
    anchor.className = 'green';
    anchor.href = '#helpModal';
    anchor.textContent = 'Get Help';
    //Create the Get Help link which redirect to getHelp page
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
//Closing the popup login page and returning to home.html
  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('payPage').style.display = 'none';
    document.getElementById('gettingHelp').style.display = 'none';
    document.getElementById('helpModal').style.display = 'none';
    window.location.href = 'home.html';
  }

//!Get help popup session
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
  //function to close the popup
  closeButton.onclick = function() { closeLoginModal(); };

  let helpText = document.createElement('h2');
  helpText.textContent = 'Get Help';

  let paragraph = document.createElement('p');
  paragraph.style.fontSize = 'large';
  paragraph.textContent = 'Please enter your registered details and we will send you an OTP to reset your password.';
  //form starts here
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
  resetButton.disabled = true;
  resetButton.onclick = function() { };
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

//!password visibility function
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
//Using dummyjson api checked whether the entered username and password are already exist.
//If exist then redirect to pay.html else print an alert message
function loginValidation(event){
  event.preventDefault();
  fetch('https://dummyjson.com/users/')//fetching demmyjson api
     .then(response => response.json())
     .then(data => {
         const users = [];
         data.users.forEach(element => {
             users.push(element);
         });
        const usernameLogin = document.getElementById('username').value;
        const passwordLogin = document.getElementById('password').value;
        let isLoginValidated = false;
        for (let i = 0; i < 5; i++) {
          if (usernameLogin === users[i].username && passwordLogin === users[i].password) {
              isLoginValidated = true;
              break;
          }
        }
        if (!isLoginValidated) {
          alert('Enter valid details');
        } else {
          //redirect to pay.html
          window.location.href = "pay.html";
        }
     })  
     .catch(error => console.error('Error:', error));
   }

//!Payment page Validation
//Using fakeapi manually created an api which contains 12 data
// (contains card number, card type, CV code and card owner).
// Using the api checked whether the entered payment are already exist.
//If exist then a payment successful popup will displayed.
//else an alert message displayed
function confirmPayment(){
 fetch('https://mocki.io/v1/8519910e-5506-426f-a86d-7f592fd77d21')//manually created api
    .then(response => response.json())
    .then(data => {
        const cards = [];
        data.forEach(element => {
            cards.push(element);
            console.log(cards)
        });
        //Data entered through payment form
          let enteredCardNumber = document.getElementById('cardNumber').value;
          let enteredCardType = document.getElementById('cardType').value;
          let enteredCVCode = document.getElementById('cvCode').value;
          let enteredCardOwner = document.getElementById('cardOwner').value;
          //validation check
          for (let i = 0; i < cards.length; i++) {
              if (enteredCardNumber == cards[i].cardNumber &&
                  enteredCardType == cards[i].cardType &&
                  enteredCVCode == cards[i].cvCode &&
                  enteredCardOwner == cards[i].cardOwner) {
                    console.log("success")
                  Successful("Payment successful");
                  return;
              }
          }
          alert('Enter valid details');
    })  
    .catch(error => console.error('Error:', error));
  }

//!Payment successful & signup account creation successful
//Display a popup containing green tick and success message
//If closed, redirect to home.html
function Successful(msg) {
  let successful = document.createElement('div');
  successful.setAttribute("id", 'successful');
  successful.style.borderColor = "green"

  let closeButton = document.createElement('a');
  closeButton.classList.add('close');
  closeButton.setAttribute("id",'closeButton');
  closeButton.textContent = 'X';
  closeButton.style.textDecoration = "none"
  closeButton.href = "home.html"; 

  let greenTick = document.createElement('img');
  greenTick.src = '/img/green_tic.png';
  greenTick.style.height = "60px";
  greenTick.style.width = "60px"
  greenTick.classList.add("greenTick")

  let successMessage = document.createElement('p');
  successMessage.setAttribute("id", 'successMessage');
  successMessage.classList.add("successMessage");
  successMessage.innerText = msg;

  successful.appendChild(closeButton);
  successful.appendChild(greenTick);
  successful.appendChild(successMessage);

  document.body.appendChild(successful);
  successful.style.display = 'block';
}
