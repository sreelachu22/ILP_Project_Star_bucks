//! Move to the next OTP input box when a digit is entered
let otpBoxes = document.querySelectorAll('input[id^="otp"]');


function moveToNext(e) {
    let currentBox = e.target;
    if (currentBox.value.length >= currentBox.maxLength) {
        let nextBox = currentBox.nextElementSibling;
        if (nextBox) {
            nextBox.focus();
        }
    }
}

otpBoxes.forEach(box => box.addEventListener('input', moveToNext));

//!OTP validation
function validateOTP() {
    const otpBoxes = document.getElementsByClassName('otp-input');
    let otpFilled = true;
   //checks whether all otp boxes are filled
    for (let i = 0; i < otpBoxes.length; i++) {
       if (otpBoxes[i].value === '') {
         otpFilled = false;
         break;
       }
    }
   
    if (otpFilled) {
       //const otpSubmitButton =  document.getElementById("nextButton");
       $('#myModal').modal('show');

    } else {
       alert('Please enter correct OTP');
    }
   }

//!signup account creation successful
//Display a popup containing green tick and success message
//If closed, redirect to pay.html
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
      window.location.href = 'pay.html';
    }, 3000);
  }