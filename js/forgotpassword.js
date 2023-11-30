import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);

const forgotPasswordEmail = document.getElementById("forgot-email");
let resetPasswordButton = document.getElementById("resetpassword");


let forgotPassword = () => {
  firebase
    .auth()
    .sendPasswordResetEmail(forgotPasswordEmail.value)
  .then(() => {
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


