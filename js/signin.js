function goToPayment() {
  window.location.href = 'pay.html';
}


  //Using dummyjson api checked whether the entered username and password are already exist.
//If exist then redirect to pay.html else print an alert message
function loginValidation(event){
    event.preventDefault();
    fetch('https://dummyjson.com/users/')//fetching demmyjson api
       .then(response => response.json())
       .then(data => {
           const users = [];
           data.users.forEach(element => {
               users.push(element);
           });
          const usernameLogin = document.getElementById('username').value;
          const passwordLogin = document.getElementById('password').value;
          let isLoginValidated = false;
          for (let i = 0; i < 5; i++) {
            if (usernameLogin === users[i].username && passwordLogin === users[i].password) {
                isLoginValidated = true;
                break;
            }
          }
          if (!isLoginValidated) {
            alert('Enter valid details');
          } else {
            //redirect to pay.html
            window.location.href = "pay.html";
          }
       })  
       .catch(error => console.error('Error:', error));
     }


  