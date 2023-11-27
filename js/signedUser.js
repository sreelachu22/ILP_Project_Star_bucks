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



var email = getEmailFromCookie();


const database = firebase.firestore();
const collectionName = email;



//!Retrieving data from Firestore
database.collection(collectionName).get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        console.log(data.name);
        document.getElementById("displayName").innerHTML = data.name;
        document.getElementById("username").innerHTML = data.username;
    });
})
.catch((error) => {
    console.log("Error getting documents:", error);
});



document.addEventListener("DOMContentLoaded", function() {
if (email) {
  document.getElementById("displayEmail").innerHTML = email;
} else {
    window.location.href = "../signIn_signUp.html";
}
});


let signedInOrNot  = evt => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      // User is signed in

      const uid = user.uid;
      } else {
      // User is signed out
      redirectToSignInPage();
      }
  });
}


function showSignedInPage(user) {
  // Fetch user details from Firebase
  const displayName = user.displayName;
  const photoURL = user.photoURL;
  const email = getEmailFromCookie();

  // Display user details on the signed-in user page
  alert(displayName);
  document.getElementById('displayName').innerHTML = displayName;
  document.getElementById('displayEmail').innerHTML = email;
  document.getElementById('profilePic').src = photoURL;

  window.location.href = './signedUser.html';

}

function redirectToSignInPage() {
  // Redirect to the sign-in/sign-up page
  window.location.href = './signIn_signUp.html';
}

//! Function to handle sign-out
function signOut() {
  setEmailCookie("");
  // alert('Sign out clicked');  
  firebase.auth().signOut().then(function() {
    // Sign-out successful
    redirectToSignInPage();
  }).catch(function(error) {
    // An error happened
    console.error('Sign-out error:', error);
  });
}

//!set and get email cookies
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
      alert('email set successfully!');
  } else {
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

