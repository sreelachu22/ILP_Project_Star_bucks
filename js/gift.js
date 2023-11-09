// document.addEventListener("DOMContentLoaded", function () {
//   const imageContainer = document.getElementById("image-container");

//   // Replace this with your JSON URL
//   const jsonUrl = "https://dummyjson.com/products";

//   fetch(jsonUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       data.products.forEach((item) => {
//         const imageCard = createImageCard(item);
//         imageContainer.appendChild(imageCard);
//       });

//     })
//     .catch((error) => console.error("Error:", error));

//   function createImageCard(item) {
//     const imageCard = document.createElement("div");
//     imageCard.classList.add("image-card");

//     const image = document.createElement("img");
//     image.src = item.imageUrl; // Replace with the JSON key containing the image URL
//     imageCard.appendChild(image);

//     const description = document.createElement("p");
//     description.textContent = item.description; // Replace with the JSON key containing the description
//     imageCard.appendChild(description);

//     return imageCard;
//   }
// });

// JavaScript code to fetch and display product data
// const giftList = document.getElementById("image_container");

// fetch("https://dummyjson.com/products/")
//   .then((response) => response.json())
//   .then((data) => {
//     data.products.forEach((element) => {
//       console.log(element);
//       const listItem = document.createElement("div");
//       listItem.classList.add("main_container");
//       const listimg = document.createElement("img");

//       const listhead = document.createElement("h3");
//       listhead.classList.add("main_head");

//       const listpara = document.createElement("p");
//       listpara.classList.add("para");
//       const listbutton = document.createElement("button");
//       listbutton.classList.add("mainbtn");
//       listbutton.textContent = "Add Item";

//       listimg.src = element.thumbnail;
//       listhead.textContent = element.brand;
//       listpara.textContent = element.description;
//       listItem.appendChild(listhead);
//       listItem.appendChild(listpara);
//       listItem.appendChild(listbutton);
//       listItem.appendChild(listimg);
//       giftList.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching course data:", error);
//   });

// fetch("https://dummyjson.com/products/", {
//   headers: {
//     Authorization: `Client-ID ${apiKey}`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const images = data.products;
//     console.log(images);
//     const container = document.getElementById("image-container");

//     images.forEach((image) => {
//       const shadowBox = document.createElement("div");
//       shadowBox.classList.add("shadow-box");

//       const img = document.createElement("img");
//       img.src = image.urls.regular;
//       img.alt = image.description;

//       const info = document.createElement("div");
//       info.classList.add("info");

//       const title = document.createElement("h3");
//       title.textContent = image.description;

//       const photographer = document.createElement("p");
//       photographer.textContent = `Photo by: ${image.user.username}`;

//       info.appendChild(title);
//       info.appendChild(photographer);

//       shadowBox.appendChild(img);
//       shadowBox.appendChild(info);

//       container.appendChild(shadowBox);
//     });
//   });

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
    const container = document.querySelector(".gift_container");
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

    const container1 = document.querySelector(".congraz_container");
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
