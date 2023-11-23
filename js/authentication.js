
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
      import {
        getDatabase,
        set,
        ref,
        child,
      } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendPasswordResetEmail,
      } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { error } from "console";

      const firebaseConfig = {
        apiKey: "AIzaSyChHTWfu8OOy0CH1bZA-G9j2FEXOIiHR5c",
        authDomain: "starbucks-authentication.firebaseapp.com",
        projectId: "starbucks-authentication",
        storageBucket: "starbucks-authentication.appspot.com",
        messagingSenderId: "373089171674",
        appId: "1:373089171674:web:74b8143b69937bcab3cde3",
        measurementId: "G-G5J0Q2F35X",
      };

      const app = initializeApp(firebaseConfig);
      const db = getDatabase();
      const auth = getAuth(app);
      const dbref = ref(db);

//signup authentication
const signupEmailIn = document.getElementById("signup-email");
const signupPasswordIn = document.getElementById("signup-password");

let RegisterUser = evt => {
    evt.preventDefault();
    createUserWithEmailAndPassword(auth,signupEmailIn.value,signupPasswordIn.value)
    .then((credentials)=>{
        console.log(credentials);
        window.location.href = '/signupOTP.html';
    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

const MainFormSignup = document.getElementById("MainFormSignup");
MainFormSignup.addEventListener('submit',RegisterUser);

//signin authentication
const signinEmailIn = document.getElementById("login-email");
const signinPasswordIn = document.getElementById("login-password");

let SignInUser = evt => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth,signinEmailIn.value,signinPasswordIn.value)
    .then((credentials)=>{
        console.log(credentials);
        alert("Login Successful")
        window.location.href = '/home.html';
    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

const MainFormSignin = document.getElementById("MainFormSignin");
MainFormSignin.addEventListener('submit',SignInUser);

//forgot password authentication
const forgotPasswordEmail = document.getElementById("forgot-email");
let resetPasswordButton = document.getElementById("resetpassword");

let forgotPassword = () => {
  sendPasswordResetEmail(auth,forgotPasswordEmail.value )
  .then(()=>{
    alert("A password reset link has been sent to your email");
  })
  .catch((error)=>{
    console.log(error.code);
    console.log(error.message);
  })
}

resetPasswordButton.addEventListener('click', forgotPassword);

// function forgotPassword() {
//   let resetEmail = document.getElementById("forgot-email");
//   let validEmailExpr =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (resetEmail.value === "") {
//     alert("Email cannot be empty");
//   } else if (!resetEmail.value.match(validEmailExpr)) {
//     alert("Not a valid email address");
//   } else {
//     alert(
//       `An email with password recovery link has been sent to ${resetEmail.value}`
//     );
//   }
// }

