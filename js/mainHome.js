//Coupon Card

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

//Latest Offerings

// Fetch data from the dummy API (replace with your actual API endpoint)
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const users = [];
    data.products.forEach((element) => {
      users.push(element);
      console.log(users);
    });
    let randomId = [];
    const container = document.querySelector(".item-container");
    for (let i = 0; i <= 3; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const box = document.createElement("div");
      box.classList.add("card-box");
      const imgbox = document.createElement("div");
      box.classList.add("img-box");
      const image = document.createElement("img");
      const name = document.createElement("h4");
      const details = document.createElement("p");
      const price = document.createElement("p");
      const button = document.createElement("button");
      button.classList.add("add-item-button");
      image.src = users[randomId[i]].thumbnail;
      name.textContent = `${users[randomId[i]].title}`;
      details.textContent = `${users[randomId[i]].description}`;
      price.textContent = `₹ ${users[randomId[i]].price}`;
      button.textContent = "Add Item";

      imgbox.appendChild(image);
      box.appendChild(imgbox);

      box.appendChild(name);
      box.appendChild(details);
      box.appendChild(price);
      box.appendChild(button);
      container.appendChild(box);
    }
    const container1 = document.querySelector(".barista-container");
    for (let i = 0; i < 2; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const barista_box = document.createElement("div");
      barista_box.classList.add("barista-box");
      const bimgbox = document.createElement("div");
      barista_box.classList.add("bimg-box");
      const bimage = document.createElement("img");
      const bname = document.createElement("h4");
      //   const details = document.createElement("p");
      const bprice = document.createElement("p");
      const bbutton = document.createElement("button");
      bbutton.classList.add("add-item-button");
      bimage.src = users[randomId[i]].thumbnail;
      bname.textContent = `${users[randomId[i]].title}`;
      //   details.textContent = `${users[randomId[i]].description}`;
      bprice.textContent = `₹ ${users[randomId[i]].price}`;
      bbutton.textContent = "Add Item";

      bimgbox.appendChild(bimage);
      barista_box.appendChild(bimgbox);

      barista_box.appendChild(bname);
      //   barista_box.appendChild(details);
      barista_box.appendChild(bprice);
      barista_box.appendChild(bbutton);
      container1.appendChild(barista_box);
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();
