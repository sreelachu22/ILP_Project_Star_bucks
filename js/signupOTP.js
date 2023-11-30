import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);
// render recaptcha verifier
render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}

//! function for send OTP
function phoneAuth() {
  var number = document.getElementById("number").value;
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      alert("OTP Sent");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

//! function for OTP verify
function codeverify() {
  const code = Array.from(
    { length: 6 },
    (_, i) => document.getElementById(`otp${i + 1}`).value
  ).join("");
  coderesult
    .confirm(code)
    .then(function () {
      alert("OTP Verified");
      window.location.href = "/home.html";
    })
    .catch(function () {
      console.log("OTP Not correct");
    });
}


// //! Move to the next OTP input box when a digit is entered
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