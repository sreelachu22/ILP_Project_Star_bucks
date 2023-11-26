//!daynamic element fetch 1
src = "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.1.min.js";
async function fetchData() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/586e9bf3-fec3-411d-94d5-224f549ac241"
    );
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
      randomId[i] = Math.floor(Math.random() * 9 + 1);
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
      button.onclick = function () {
        redirectToPage("additem.html");
      };
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
    //! congrazz container dynamic fetch

    const container1 = document.querySelector(".congraz_container");
    for (let i = 0; i < 2; i++) {
      randomId[i] = Math.floor(Math.random() * 9 + 1);
      const congraz_box = document.createElement("div");
      congraz_box.classList.add("gift_container_card-box");
      const bimgbox = document.createElement("div");
      congraz_box.classList.add("gift_container_img-box");
      const bimage = document.createElement("img");
      const bname = document.createElement("h4");
      const xdescription = document.createElement("p");
      const bbutton = document.createElement("button");
      bbutton.classList.add("mainbtn_add");
      bbutton.onclick = function () {
        redirectToPage("additem.html");
      };

      bimage.src = users[randomId[i]].thumbnail;
      bname.textContent = `${users[randomId[i]].title}`;
      xdescription.textContent = users[randomId[i]].description;
      bbutton.textContent = "Add Item";

      bimgbox.appendChild(bimage);
      congraz_box.appendChild(bimgbox);

      congraz_box.appendChild(bname);
      congraz_box.appendChild(xdescription);
      congraz_box.appendChild(bbutton);
      container1.appendChild(congraz_box);
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();
bbutton.addEventListener("click", redirectToPage("additem.html"));

function redirectToPage(pageName) {
  window.location.href = pageName;
}
