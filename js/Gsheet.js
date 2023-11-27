document.addEventListener("DOMContentLoaded", function () {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyjr8YVTMvA3GfIhuwcKkz70PeXN0h2nxYttSmMdJVUG8RkzLiUFJbYyGOUPAZW6DR4/exec";

  const form = document.forms["contact-form"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
