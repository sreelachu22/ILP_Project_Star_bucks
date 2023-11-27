async function fetchData() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/586e9bf3-fec3-411d-94d5-224f549ac241"
    );
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
    const container = document.getElementsByClassName("congraz_container");
    for (let i = 0; i < 1; i++) {
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
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();

function redirectToPage(pageName) {
  window.location.href = pageName;
}
