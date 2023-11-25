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

  let signedInOrNot  = evt => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in
        showSignedInPage(user);

        const uid = user.uid;
        } else {
        // User is signed out
        redirectToSignInPage();
        }
    });
}

  function showSignedInPage(user) {
    // Fetch user details from Firebase (you may need to adjust this based on your data structure)
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
  
    // Display user details on the signed-in user page (update this based on your HTML structure)
    document.getElementById('displayName').innerHTML = displayName;
    document.getElementById('displayEmail').innerHTML = email;
    document.getElementById('profilePic').src = photoURL;

    window.location.href = 'signedUser.html';
  
    // Show the signed-in user page
    // ... (code to display the signed-in user page)
  }

  function redirectToSignInPage() {
    // Redirect to the sign-in/sign-up page
    window.location.href = 'signIn_signUp.html';
  }
  
  // Function to handle sign-out
  function signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful
      redirectToSignInPage();
    }).catch(function(error) {
      // An error happened
      console.error('Sign-out error:', error);
    });
  }