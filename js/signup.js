  function redirect2(){ window.location.href = "signup2.html"; }
  function redirectPay(){ window.location.href = "pay.html"; }
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

// function checkOtp() {
//     const otpBoxes = ['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'];
//     let isAllBoxesFilled = true;

//     for (let i = 0; i < otpBoxes.length; i++) {
//         if (document.getElementById(otpBoxes[i]).value === '') {
//             isAllBoxesFilled = false;
//             break;
//         }
//     }

//     if (isAllBoxesFilled) {
//         document.getElementById('nextButton').disabled = false;
//     } else {
//         document.getElementById('nextButton').disabled = true;
//     }
// }

//!account created successfully

function paymentSuccessful() {
    let popup = document.createElement('div');
    popup.setAttribute("id", 'popup');
    popup.style.borderColor = "green"

    let greenTick = document.createElement('img');
    greenTick.src = '/img/green_tic.png';
    greenTick.style.height = "60px";
    greenTick.style.width = "60px"
    greenTick.classList.add("greenTick")

    let accountSuccess = document.createElement('p');
    accountSuccess.setAttribute("id", 'accountSuccess');
    accountSuccess.innerText = 'Account created successfully';

    let displayDetails = document.createElement('div');
    displayDetails.classList.add("displayDetails")
    let mail = document.createElement('p');
    let mob = document.createElement('p');
    
    mail.innerText = document.getElementById('email').value;
    mob.innerText = document.getElementById('mobile').value;

    let continueToPayment = document.createElement('button');
    continueToPayment.setAttribute("id", 'continueToPayment');
    continueToPayment.innerText = 'Continue to payment';

    displayDetails.appendChild(mail);
    displayDetails.appendChild(mob);
    popup.appendChild(greenTick);
    popup.appendChild(accountSuccess);
    popup.appendChild(displayDetails);
    popup.appendChild(continueToPayment);

    continueToPayment.addEventListener('click', function() {
        document.body.removeChild(popup);
        window.location.href = 'pay.html';
    });

    document.body.appendChild(popup);
    popup.style.display = 'block';
}