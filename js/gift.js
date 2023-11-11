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
    for (let i = 0; i <= 2; i++) {
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

      imgbox.appendChild(image);
      box.appendChild(imgbox);

      box.appendChild(name);
      box.appendChild(details);
      box.appendChild(button);
      container.appendChild(box);
    }
    // congrazz container
    const container1 = document.querySelector(".congraz_container");
    for (let i = 0; i < 2; i++) {
      randomId[i] = Math.floor(Math.random() * 29 + 1);
      const barista_box = document.createElement("div");
      barista_box.classList.add("gift_container_card-box");
      const bimgbox = document.createElement("div");
      barista_box.classList.add("gift_container_img-box");
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
      barista_box.appendChild(bimgbox);

      barista_box.appendChild(bname);
      barista_box.appendChild(xdescription);
      barista_box.appendChild(bbutton);
      container1.appendChild(barista_box);
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();

// visibility check nav
// function showDiv(divId) {
//   // Hide all divs
//   var allDivs = document.querySelectorAll(".hidden");
//   for (var i = 0; i < allDivs.length; i++) {
//     allDivs[i].classList.add("hidden");
//   }

//   // Show the selected div
//   var selectedDiv = document.getElementById(divId);
//   selectedDiv.classList.remove("hidden");
// }

// function showPaySection() {
//   var div1 = document.getElementById("div1");
//   var div2 = document.getElementById("div2");

//   // Show pay section and hide others
//   div1.classList.add("trasformblk1");
//   div2.classList.remove("trasformblk1");
// }

// function showGiftSection() {
//   var div1 = document.getElementById("div1");
//   var div2 = document.getElementById("div2");

//   // Show gift section and hide others
//   div1.classList.remove("trasformblk1");
//   div2.classList.add("trasformblk1");
// }
