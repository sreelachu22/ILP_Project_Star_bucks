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

//!Payment successful
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
