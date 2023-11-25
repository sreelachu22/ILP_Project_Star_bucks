
const firebaseConfig = {
  apiKey: "AIzaSyChHTWfu8OOy0CH1bZA-G9j2FEXOIiHR5c",
  authDomain: "starbucks-authentication.firebaseapp.com",
  projectId: "starbucks-authentication",
  storageBucket: "starbucks-authentication.appspot.com",
  messagingSenderId: "373089171674",
  appId: "1:373089171674:web:74b8143b69937bcab3cde3",
  measurementId: "G-G5J0Q2F35X",
};
firebase.initializeApp(firebaseConfig);

const forgotPasswordEmail = document.getElementById("forgot-email");
let resetPasswordButton = document.getElementById("resetpassword");


let forgotPassword = () => {
  firebase
    .auth()
    .sendPasswordResetEmail(forgotPasswordEmail.value)
  .then(() => {
    // Password reset email sent!
    // ..
    alert(`Password reset link send to ${forgotPasswordEmail.value}`)
    window.location.href = '/home.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

resetPasswordButton.addEventListener("click", function() {
  forgotPassword();
});


// function forgotPassword() {
//     let resetEmail = document.getElementById("forgot-email");
//     let validEmailExpr =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (resetEmail.value === "") {
//       alert("Email cannot be empty");
//     } else if (!resetEmail.value.match(validEmailExpr)) {
//       alert("Not a valid email address");
//     } else {
//       alert(
//         `An email with password recovery link has been sent to ${resetEmail.value}`
//       );
//     }
//   }

