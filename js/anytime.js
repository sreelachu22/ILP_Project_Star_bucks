async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();

    const users = [];
    data.products.forEach((element) => {
      users.push(element);
      console.log(users);
    });
    console.log(users);
    let randomId = [];
    const container = document.getElementsByClassName("gift_container");
    for (let i = 0; i <= 13; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const box = document.createElement("div");
      box.classList.add("gift_container_card-box");
      const imgbox = document.createElement("div");
      imgbox.classList.add("gift_container_img-box");
      const image = document.createElement("img");
      const name = document.createElement("h4");
      name.classList.add("gift_container_h4");
      const details = document.createElement("p");
      details.classList.add("gift_container_p");
      const button = document.createElement("button");
      button.classList.add("mainbtn_add");
      image.src = users[randomId[i]].thumbnail;
      name.textContent = `${users[randomId[i]].title}`;
      details.textContent = `${users[randomId[i]].description}`;
      button.textContent = "Add Item";
      button.onclick = function () {
        redirectToPage("additem.html");
      };
      imgbox.appendChild(image);
      box.appendChild(imgbox);

      box.appendChild(name);
      box.appendChild(details);
      box.appendChild(button);
      container[0].appendChild(box);
    }
    //!error in this fetch
    const container2 = document.getElementsByClassName(".congraz_container"); // Assuming the class is named "congraz_container"
    for (let i = 0; i < 2; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const congo_box = document.createElement("div");
      congo_box.classList.add("gift_container_card-box");
      const bimgbox = document.createElement("div");
      bimgbox.classList.add("gift_container_img-box"); // Fixed typo here
      const bimage = document.createElement("img");
      const bname = document.createElement("h4");
      const xdescription = document.createElement("p");
      const bbutton = document.createElement("button");
      bbutton.classList.add("mainbtn_add");

      bimage.src = users[randomId[i]].thumbnail;
      bname.textContent = `${users[randomId[i]].title}`;
      xdescription.textContent = users[randomId[i]].description;
      bbutton.textContent = "Add Item";

      bimgbox.appendChild(bimage);
      congo_box.appendChild(bimgbox);

      congo_box.appendChild(bname);
      congo_box.appendChild(xdescription);
      congo_box.appendChild(bbutton);
      container2[0].appendChild(congo_box);
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();

function redirectToPage(pageName) {
  window.location.href = pageName;
}
