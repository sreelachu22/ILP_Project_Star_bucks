document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function showPrevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  leftArrow.addEventListener("click", showPrevCard);
  rightArrow.addEventListener("click", showNextCard);

  showCard(currentIndex);
});
