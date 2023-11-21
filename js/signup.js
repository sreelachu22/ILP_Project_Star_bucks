//!redirect to signup OTP page
function goToSignupOTP(){
    window.location.href = 'signupOTP.html';
  }

// function validateRegister() {
//     let emailField = document.getElementById("signup-email");
//     let usernameField = document.getElementById("register-username");
//     let passwordField = document.getElementById("createPass");
//     let confirmPasswordField = document.getElementById("createPass");
//     if (emailField.value === "") {
//       alert("Email cannot be empty");
//     } else if (usernameField.value === "") {
//       alert("Username cannot be empty");
//     } else if (passwordField.value.length < 8) {
//       alert("Password must be minimum 8 characters");
//     }else if (confirmPasswordField.value.length < 8) {
//         alert("Password must be minimum 8 characters");
//       } else {
//       let userData = {
//         email: emailField.value,
//         username: usernameField.value,
//         password: passwordField.value,
//         password: confirmPasswordField.value,
//       };
//       const postUrl = "https://dummyjson.com/users/add";
//       const postResponse = addUser(postUrl, userData);
//       console.log(postResponse);
//     }
//   }

// async function addUser(url, data) {
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