function payLogin() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('payPage').style.display = 'block';
  }
  

  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    window.location.href = 'home.html';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  

  function togglePasswordVisibility() {
    var passwordField = document.getElementById("passwordField");
    var toggleIcon = document.getElementById("togglePassword");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.innerHTML = "&#128064;";
    } else {
      passwordField.type = "password";
      toggleIcon.innerHTML = "&#128065;";
    }
  }


