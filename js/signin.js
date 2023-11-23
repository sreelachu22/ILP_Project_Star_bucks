
  //Using dummyjson api checked whether the entered username and password are already exist.
//If exist then redirect to pay.html else print an alert message
    
    // const getUserData = fetch(
    //   "https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image"
    // );
    // const users = [];
    // getUserData
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data.users.forEach((element) => {
    //       users.push(element);
    //     });
    //   });
    // console.log(users);

    
    // function validateLogin() {
    //   let usernameField = document.getElementById("login-username");
    //   let passwordField = document.getElementById("login-password");
    //   let registeredUsersData = localStorage.getItem("registeredUsers");
    //   if (usernameField.value === "") {
    //     alert("Username cannot be empty");
    //   } else if (passwordField.value.length < 8) {
    //     alert("Password must be minimum 8 characters");
    //   } else if (registeredUsersData) {
    //     let registeredUsers = JSON.parse(registeredUsersData);
    //     if (registeredUsers.length > 0) {
    //       registeredUsers.forEach((registeredUser) => {
    //         if (
    //           registeredUser.username === usernameField.value &&
    //           registeredUser.password === passwordField.value
    //         ) {
    //           sessionStorage.setItem(
    //             "loggedInUser",
    //             JSON.stringify(registeredUser)
    //           );
    //           window.location.href = "pay.html";
    //         }
    //       });
    //     } }else {
    //     let userId = isValidLogin(usernameField.value, passwordField.value);
    //     if (userId === -1) {
    //       alert("User does not exist");
    //     } else {
    //       sessionStorage.clear();
    //       sessionStorage.setItem("loggedInUser", JSON.stringify(users[userId]));
    //       window.location.href = "pay.html";
    //     }
    //   }
    // }
    
    // function isValidLogin(checkUsername, checkPassword) {
    //   for (let i = 0; i < users.length; i++) {
    //     if (
    //       checkUsername === users[i].username &&
    //       checkPassword === users[i].password
    //     ) {
    //       return i;
    //     } else {
    //       return -1;
    //     }
    //   }
    // }
    