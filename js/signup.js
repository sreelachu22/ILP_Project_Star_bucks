// //!redirect to signup OTP page
// function goToSignupOTP(){
//     window.location.href = 'signupOTP.html';
//   }

//   function validateRegister() {
//     let emailField = document.getElementById("signup-email");
//     let displaynameField = document.getElementById("signup-name");
//     let usernameField = document.getElementById("signup-username");
//     let passwordField = document.getElementById("signup-password");
//     let acceptTerms = document.getElementById("signup-terms");
//     if (emailField.value === "") {
//       alert("Email cannot be empty");
//     } else if (!isValidEmail(emailField.value)) {
//     } else if (usernameField.value === "") {
//       alert("Username cannot be empty");
//     } else if (passwordField.value.length < 8) {
//       alert("Password must be minimum 8 characters");
//     } else {
//       let userData = {
//         id: 31,
//         email: emailField.value,
//         username: usernameField.value,
//         firstName: displaynameField.value,
//         password: passwordField.value,
//         // image: `https://robohash.org/${usernameField.value}`,
//       };
//       const postUrl = "https://dummyjson.com/users/add";
//       const postResponse = addUser(postUrl, userData);
//       console.log(postResponse);
//       let registeredUsers =
//       JSON.parse(sessionStorage.getItem("registeredUsers")) || [];
//     registeredUsers.push(userData);
//     sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
//       window.location.href = "signupOTP.html";
//     }
//   }
  
//   function isValidEmail(registerEmail) {
//     let validEmailExpr =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (!registerEmail.match(validEmailExpr)) {
//       alert("Not a valid email address");
//       return false;
//     } else {
//       return true;
//     }
//   }
  
//   // function isValidDate() {}
  
//   async function addUser(url, data) {
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const responseData = await response.json();
//       return responseData;
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   }
  