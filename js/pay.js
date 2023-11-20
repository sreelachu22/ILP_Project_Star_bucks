
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

  let greenTick = document.createElement('img');
  greenTick.src = '/img/green_tic.png';
  greenTick.classList.add("greenTick")

  let successMessage = document.createElement('p');
  successMessage.setAttribute("id", 'successMessage');
  successMessage.classList.add("successMessage");
  successMessage.innerText = msg;

  successful.appendChild(greenTick);
  successful.appendChild(successMessage);

  document.body.appendChild(successful);
  successful.style.display = 'block';

  setTimeout(function () {
    successful.style.display = 'none';
    window.location.href = 'home.html';
  }, 3000);
}
