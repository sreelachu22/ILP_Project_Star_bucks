function goToSignupOTP(): void {
    window.location.href = 'signupOTP.html';
  }
  
  function validateRegister(): void {
    let emailField = document.getElementById("signup-email") as HTMLInputElement;
    let displaynameField = document.getElementById("signup-name") as HTMLInputElement;
    let usernameField = document.getElementById("signup-username") as HTMLInputElement;
    let passwordField = document.getElementById("signup-password") as HTMLInputElement;
    let acceptTerms = document.getElementById("signup-terms") as HTMLInputElement;
  
    if (emailField.value === "") {
      alert("Email cannot be empty");
    } else if (!isValidEmail(emailField.value)) {
      // Handle invalid email case if needed
    } else if (usernameField.value === "") {
      alert("Username cannot be empty");
    } else if (passwordField.value.length < 8) {
      alert("Password must be a minimum of 8 characters");
    } else {
      let userData = {
        id: 31,
        email: emailField.value,
        username: usernameField.value,
        firstName: displaynameField.value,
        password: passwordField.value,
      };
  
      const postUrl = "https://dummyjson.com/users/add";
      addUser(postUrl, userData).then((postResponse) => {
        console.log(postResponse);
  
        let registeredUsers: any[] = [];
        const storedData = sessionStorage.getItem("registeredUsers");

        if (storedData) {
        registeredUsers = JSON.parse(storedData);
        }

        registeredUsers.push(userData);
        sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  
        window.location.href = "signupOTP.html";
      });
    }
  }
  
  function isValidEmail(registerEmail: string): boolean {
    let validEmailExpr =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!registerEmail.match(validEmailExpr)) {
      alert("Not a valid email address");
      return false;
    } else {
      return true;
    }
  }
  
  async function addUser(url: string, data: any): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  