var getUserData = fetch("https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image");
var users = [];
getUserData
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.users.forEach(function (element) {
        users.push(element);
    });
});
console.log(users);
function validateLogin() {
    var usernameField = document.getElementById("login-username");
    var passwordField = document.getElementById("login-password");
    var registeredUsersData = localStorage.getItem("registeredUsers");
    if (!usernameField || !passwordField) {
        return;
    }
    if (usernameField.value === "") {
        alert("Username cannot be empty");
    }
    else if (passwordField.value.length < 8) {
        alert("Password must be minimum 8 characters");
    }
    else if (registeredUsersData) {
        var registeredUsers = JSON.parse(registeredUsersData);
        if (registeredUsers.length > 0) {
            registeredUsers.forEach(function (registeredUser) {
                if (registeredUser.username === usernameField.value &&
                    registeredUser.password === passwordField.value) {
                    sessionStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
                    window.location.href = "pay.html";
                }
            });
        }
    }
    else {
        var userId = isValidLogin(usernameField.value, passwordField.value);
        if (userId === -1) {
            alert("User does not exist");
        }
        else {
            sessionStorage.clear();
            sessionStorage.setItem("loggedInUser", JSON.stringify(users[userId]));
            window.location.href = "pay.html";
        }
    }
}
function isValidLogin(checkUsername, checkPassword) {
    for (var i = 0; i < users.length; i++) {
        if (checkUsername === users[i].username &&
            checkPassword === users[i].password) {
            return i;
        }
    }
    return -1;
}
