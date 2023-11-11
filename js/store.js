let count = 0;


document.getElementById("locationInput").addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    document.getElementById("mapContainer").innerHTML = "";
    document.getElementById("cards").innerHTML = "";
    fetchData();
  }
});


function fetchData() {
  fetch("https://mocki.io/v1/37ef34f9-131a-4b39-a409-5b56dcdfca89")
    .then((response) => response.json())
    .then((data) => {
      showMap(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


function showMap(data) {
  const response = data;
  var location = document.getElementById("locationInput").value;
  location = location.toLowerCase();
  var iframe = document.createElement("iframe");

  if (location === "kochi") {
    const stores = response.filter(element => element.location === "kochi");

    const nearby = document.getElementById("near-by");
    nearby.textContent = `Nearby(${stores.length})`;

    for (let i = 0; i < stores.length; i++) {
      createCards(stores, i);
    }

    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502964.57949330326!2d75.97125086521099!3d9.98288650752262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699642657957!5m2!1sen!2sin";
  } 

  else if (location === "trivandrum") {
    const stores = response.filter(element => element.location === "trivandrum");

    const nearby = document.getElementById("near-by");
    nearby.textContent = `Nearby(${stores.length})`;

    for (let i = 0; i < stores.length; i++) {
      createCards(stores, i);
    }

    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.56612501183!2d76.75934858015351!3d8.500037895233676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699642576892!5m2!1sen!2sin"; 
  } 
  
  else {
    let notice = document.createElement("p");
    notice.classList.add("notice");
    notice.textContent = "No store available at that location";
    document.getElementById("mapContainer").appendChild(notice);
    let nearby = document.getElementById("near-by");
    nearby.textContent = "Nearby(0)";
  }
  
  iframe.style.border = "0";
  document.getElementById("mapContainer").appendChild(iframe);
}



function createCards(stores, i) {
  const cardscontainer = document.getElementById("cards");

  const store = document.createElement("div");
  store.classList.add("store-card");

  const top = document.createElement("div");
  top.classList.add("card-top");

  const img = document.createElement("img");
  img.classList.add("store-img");

  const details = document.createElement("div");
  details.classList.add("store-details");

  const name = document.createElement("h6");
  name.classList.add("store-name");

  const status = document.createElement("div");
  status.classList.add("distance-status");

  const distance = document.createElement("p");
  distance.classList.add("distance-p");

  const statusp = document.createElement("p");
  statusp.classList.add("status-p");

  const icons = document.createElement("div");
  icons.classList.add("icons");

  const dine = document.createElement("img");
  dine.classList.add("dine-img");
  dine.src = "/images/dine.png";

  const wifi = document.createElement("img");
  wifi.classList.add("wifi-img");
  wifi.src = "/images/wifi.png";

  const bottom = document.createElement("div");
  bottom.classList.add("card-bottom");

  const car = document.createElement("img");
  car.classList.add("car-img");
  car.src = "/images/car.png";

  const time = document.createElement("p");
  time.classList.add("time-p");

  const direction = document.createElement("a");
  direction.classList.add("direction-btn");
  direction.textContent = "Show Direction";

  name.textContent = `${stores[i].name}`;
  distance.textContent = `${stores[i].distance} kms away`;
  statusp.textContent = `${stores[i].status}`;
  if (statusp.textContent === "Closed") {
    statusp.style.color = "red";
  }
  time.textContent = `${stores[i].time}`;
  img.src = `${stores[i].image}`;
  direction.href = `${stores[i].direction}`;

  top.appendChild(img);
  status.appendChild(distance);
  status.appendChild(statusp);
  icons.appendChild(dine);
  icons.appendChild(wifi);
  details.appendChild(name);
  details.appendChild(status);
  details.appendChild(icons);
  top.appendChild(details);
  bottom.appendChild(car);
  bottom.appendChild(time);
  bottom.appendChild(direction);
  store.appendChild(top);
  store.appendChild(bottom);

  cardscontainer.appendChild(store);
}
