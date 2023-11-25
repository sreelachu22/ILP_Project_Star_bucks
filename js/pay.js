//!Payment page Validation
//Using fakeapi manually created an api which contains 12 data
// (contains card number, card type, CV code and card owner).
// Using the api checked whether the entered payment are already exist.
//If exist then a payment successful popup will displayed.
//else an alert message displayed
document
  .getElementById("confirmPayment")
  .addEventListener("click", function () {
    confirmPayment();
  });

function confirmPayment() {
  fetch("https://mocki.io/v1/8519910e-5506-426f-a86d-7f592fd77d21") //manually created api
    .then((response) => response.json())
    .then((data) => {
      const cards = [];
      data.forEach((element) => {
        cards.push(element);
        console.log(cards);
      });

      // Data entered through payment form
      let enteredCardNumber = document.getElementById("cardNumber").value;
      let enteredCardType = document.getElementById("cardType").value;
      let enteredCVCode = document.getElementById("cvCode").value;
      let enteredCardOwner = document.getElementById("cardOwner").value;
      let paidAmount = document.getElementById("amount").value;

      // Validation check
      for (let i = 0; i < cards.length; i++) {
        if (
          enteredCardNumber == cards[i].cardNumber &&
          enteredCardType == cards[i].cardType &&
          enteredCVCode == cards[i].cvCode &&
          enteredCardOwner == cards[i].cardOwner &&
          paidAmount != ""
        ) {
          let successMessage =
            "Card Number: " +
            enteredCardNumber.replace(/.(?=.{4})/g, "x") +
            ",\n";
          successMessage += "Card Owner: " + enteredCardOwner + ",\n";
          successMessage += "Amount Paid: " + paidAmount;
          document.getElementById(
            "qrcode"
          ).src = `https://quickchart.io/qr?text=${successMessage}`;

          $("#successful").modal("show");
          return;
        }
      }

      alert("Enter valid details");
    })
    .catch((error) => console.error("Error:", error));
}

function closePaymentSuccessful() {
  $("#successful").modal("hide");
  window.location.href = "home.html";
}
