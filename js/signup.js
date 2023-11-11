//!redirect to signup OTP page
function toSignupOTP() {
    window.location.href = 'signupRename.html';
}



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
       Successful('Account created successfully');
    } else {
       alert('Please enter correct OTP');
    }
   }

// //singup page validation
// function signupValidation(){
//     fetch('https://dummyjson.com/users/')
//        .then(response => response.json())
//        .then(data => {
//            const signupUsers = [];
//            data.Users.forEach(element => {
//                signupUsers.push(element);
//            });
//             let isSignUpValidated = false;
//             const emailSignup = document.getElementById('signup-email').value;
//             const phoneSignup = document.getElementById('signup-mobile').value;
//             const createPassword = document.getElementById('createPass').value;
//             const confirmPassword = document.getElementById('confirmPass').value;
//             console.log("signup test");
//             for (let i = 0; i < 5; i++) {
//                 console.log("signup test");
//               if(emailSignup === signupUsers[i].email && phoneSignup === signupUsers[i].phone && createPassword === signupUsers[i].password && createPassword === confirmPassword){
//                 isSignUpValidated = true;
//                 break;
//               }
//             }
//             if (!isSignUpValidated) {
//               alert('Enter valid details');
//             } else {
//               window.location.href = "signup2.html";
//             } 
//        })  
//        .catch(error => console.error('Error:', error));
//      }


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