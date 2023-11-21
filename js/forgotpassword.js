function forgotPassword() {
    let resetEmail = document.getElementById("forgot-email");
    let validEmailExpr =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (resetEmail.value === "") {
      alert("Email cannot be empty");
    } else if (!resetEmail.value.match(validEmailExpr)) {
      alert("Not a valid email address");
    } else {
      alert(
        `An email with password recovery link has been sent to ${resetEmail.value}`
      );
    }
  }

