  document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    container.classList.add("sign-in");
    container.classList.remove("sign-up");

    let signUpLinks = document.querySelectorAll(".pointer");

    signUpLinks.forEach(function (signUpLink) {
      signUpLink.addEventListener("click", function () {
        container.classList.toggle("sign-in");
        container.classList.toggle("sign-up");
      });
    });
  });



