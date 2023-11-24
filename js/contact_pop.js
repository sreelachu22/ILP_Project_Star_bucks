const scriptURL =
  "https://script.google.com/macros/s/AKfycbyjr8YVTMvA3GfIhuwcKkz70PeXN0h2nxYttSmMdJVUG8RkzLiUFJbYyGOUPAZW6DR4/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
      window.location.href = "home.html";
    })
    .catch((error) => console.error("Error!", error.message));
});

//!redirect
function redirectToHomePage() {
  // Redirect to the home page URL
  window.location.href = "home.html";
}
