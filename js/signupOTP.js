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
      //  $('#myModal').modal('show');
      // Successful("Account created successfully");
      showConfirmationModal();

    } else {
       alert('Please enter correct OTP');
    }
   }


  function showConfirmationModal() {
    // Use jQuery to show the Bootstrap modal
    $('#myModal').modal('show');

    setTimeout(function () {
      $('#myModal').modal('hide');
      window.location.href = 'home.html';
  }, 3000);
}

$(document).ready(function () {
  $('#nextButton').on('click', validateOTP);
});