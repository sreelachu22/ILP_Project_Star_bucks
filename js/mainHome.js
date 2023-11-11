// Initial data fetch
fetchData(10);

// Fetch data from the dummy API
async function fetchData(count) {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const users = data.products;

    let randomId = [];
    const container = document.querySelector(".item-container");
    const container1 = document.querySelector(".barista-container");

    for (let i = 0; i < count; i++) {
      randomId[i] = Math.floor(Math.random() * users.length);
      const box = document.createElement("div");
      box.classList.add("card-box");
      const imgbox = document.createElement("div");
      box.classList.add("img-box");
      const contentbox = document.createElement("div");
      contentbox.classList.add("content-box");
      contentbox.style.alignItems = "end";
      const image = document.createElement("img");
      image.style.width = "150px";
      image.style.height = "150px";
      const name = document.createElement("h4");
      const details = document.createElement("p");
      const price = document.createElement("p");
      const button = document.createElement("button");
      button.classList.add("add-item-button");
      image.src = users[randomId[i]].images[1];
      name.textContent = `${users[randomId[i]].title}`;
      details.textContent = `${users[randomId[i]].description}`;
      price.textContent = `₹ ${users[randomId[i]].price}`;
      button.textContent = "Add Item";

      imgbox.appendChild(image);
      box.appendChild(imgbox);
      imgbox.appendChild(name);
      imgbox.appendChild(details);
      contentbox.appendChild(price);
      contentbox.appendChild(button);
      box.appendChild(contentbox);
      container.appendChild(box);
    }
    for (let i = 0; i < count; i++) {
      randomId[i] = Math.floor(Math.random() * users.length);
      const barista_box = document.createElement("div");
      barista_box.classList.add("barista-box");
      const bimgbox = document.createElement("div");
      barista_box.classList.add("bimg-box");
      const bimage = document.createElement("img");
      bimage.style.width = "150px";
      bimage.style.height = "150px";
      const bname = document.createElement("h4");
      const bprice = document.createElement("p");
      const bbutton = document.createElement("button");
      bbutton.classList.add("add-item-button");
      bimage.src = users[randomId[i]].thumbnail;
      bname.textContent = `${users[randomId[i]].title}`;
      bprice.textContent = `₹ ${users[randomId[i]].price}`;
      bbutton.textContent = "Add Item";

      bimgbox.appendChild(bimage);
      barista_box.appendChild(bimgbox);
      barista_box.appendChild(bname);
      barista_box.appendChild(bprice);
      barista_box.appendChild(bbutton);
      container1.appendChild(barista_box);
    }
  } catch (error) {
    console.error("error:", error);
  }
}
// fetchData();
