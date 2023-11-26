import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

      import {
        getDatabase,
        set,
        get,
        ref,
        child,
      } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendPasswordResetEmail,
        sendEmailVerification,
      } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { error } from "console";

const firebaseConfig = {
  apiKey: "AIzaSyChHTWfu8OOy0CH1bZA-G9j2FEXOIiHR5c",
  authDomain: "starbucks-authentication.firebaseapp.com",
  databaseURL: "https://starbucks-authentication-default-rtdb.firebaseio.com",
  projectId: "starbucks-authentication",
  storageBucket: "starbucks-authentication.appspot.com",
  messagingSenderId: "373089171674",
  appId: "1:373089171674:web:74b8143b69937bcab3cde3",
  measurementId: "G-G5J0Q2F35X"
};
      initializeApp(firebaseConfig);
      const app = initializeApp(firebaseConfig);
      const db = getDatabase();
      const auth = getAuth(app);
      const dbref = ref(db);


//!save to firestore
function saveToFirestore() {
  const database = firebase.firestore();
  const email = document.getElementById("signup-email").value;
  const collectionName = email; // You can use email as collection name
  const name = document.getElementById("signup-name").value;
  const username = document.getElementById("signup-username").value;

  database.collection(collectionName).add({
      name: name,
      username: username,
      email: email
      
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Failed to save data. Please check the console for details.");
  });
}

//!signup authentication
const signupEmailIn = document.getElementById("signup-email");
const signupPasswordIn = document.getElementById("signup-password");
let RegisterUser = evt => {
    evt.preventDefault();
    createUserWithEmailAndPassword(auth,signupEmailIn.value,signupPasswordIn.value)
    .then(async (credentials)=>{
      alert("Working");
      const database = firebase.firestore();
      const email = document.getElementById("signup-email").value;
      const collectionName = email; // You can use email as collection name
      const name = document.getElementById("signup-name").value;
      const username = document.getElementById("signup-username").value;
      const firestore = getFirestore(app);
      const photoURL = await fetchProfilePicture();
      setEmailCookie(email);
      addDoc(collection(firestore, email), {
        name: name,
        username: username,
        email: email,
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
          alert("Failed to save data. Please check the console for details.");
      });

        console.log(credentials);
        sendEmailVerification(auth.currentUser).then(()=>{
          alert('Verification email sent! Please check your email to verify your account.');
          // saveToFireStore();
          window.location.href = './signupOTP.html';
        }).catch((error) => {
          console.error(error.message);
        });
    }).catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

const MainFormSignup = document.getElementById("MainFormSignup");
MainFormSignup.addEventListener('submit', RegisterUser);


//!signin authentication
const signinEmailIn = document.getElementById("login-email");
const signinPasswordIn = document.getElementById("login-password");

let SignInUser = evt => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth,signinEmailIn.value,signinPasswordIn.value)
    .then((credentials)=>{
      alert("Google Sign in successful"),
      // alert("signinEmailIn"),
      setEmailCookie(signinEmailIn.value),
      window.location.href = './home.html';

    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

const MainFormSignin = document.getElementById("MainFormSignin");
MainFormSignin.addEventListener('submit',SignInUser);

//!signin with google
const googleButtonSignup = document.getElementById('googleButtonSignup');
googleButtonSignup.addEventListener('click', loginWithGoogle)
const googleButtonSignin = document.getElementById('googleButtonSignin');
googleButtonSignin.addEventListener('click', loginWithGoogle)

async function loginWithGoogle(){
  try{
    let provider = new firebase.auth.GoogleAuthProvider();
  const result =  await firebase.auth().signInWithPopup(provider)
  //   .then(()=>{
      
  //     alert("Google Sign in successful"),
  //     alert("signinEmailIn"),
  //     setEmailCookie(signinEmailIn.value),
  //     window.location.href = 'home.html'
  // })
  //   console.log(result)
  // Extract user information
  const user = result.user;
  const email = user.email;
  // Extract name and username from the profile (adjust the property names as needed)
  const name = profile.name;
  const username = profile.username;
  // Do something with the email, such as setting a cookie
  setEmailCookie(email);
  // Redirect to home page
  window.location.href = 'home.html';
  console.log(result);
  }catch(err){
    alert("error"),
      console.log(err)
  }
  
}


//! set and get email cookies
function setEmailCookie(email, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieValue = encodeURIComponent(email) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  document.cookie = 'email=' + cookieValue;
}

function getEmailFromCookie() {
  const name = 'email' + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
      }
  }
  return null;
}

function setUsername() {
  const email = document.getElementById('emailInput').value;
  if (email.trim() !== '') {
      setEmailCookie(email, 7); // set email expire in 7 days
      alert('Username set successfully!');
  } 
  else {
      alert('Please enter a valid email.');
  }
}

function displayUsername() {
  const storedUsername = getEmailFromCookie();
  if (storedUsername) {
      alert('Stored email: ' + storedUsername);
  } else {
      alert('No email stored.');
  }
}