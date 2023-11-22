// Define global variables for map and marker
let map: L.Map;
let marker: L.Marker;


// Function to initialize the map
function initMap(): void {
    map = L.map('mapContainer').setView([0, 0], 13); // Set initial view and zoom level

    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const latLng = new L.LatLng(latitude, longitude);

            // Set map view to the obtained location
            map.setView(latLng, 13);

            // Create a marker for user's location
            marker = L.marker(latLng).addTo(map);
            marker.bindPopup("Your Location")!.openPopup();
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}



// Function to search for a location entered by the user
function searchLocation(): void {
    const input = (document.getElementById('locationInput') as HTMLInputElement).value;
    console.log(input);
    // Use a geocoding service to get the coordinates of the entered location
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${input}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                // Update map view to the searched location
                map.setView([lat, lon], 13);

                // Remove existing marker and add a new one for the searched location
                if (marker) {
                    map.removeLayer(marker);
                }
                marker = L.marker([lat, lon]).addTo(map);
                marker.bindPopup("Searched Location").openPopup();
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the initMap function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMap();
});



document.getElementById("locationInput")!.addEventListener("keyup", function (event: KeyboardEvent) {
    if (event.code === "Enter") {
        searchLocation();
        document.getElementById("cards")!.innerHTML = "";
        fetchData();
    }
});



function fetchData(): void {
    fetch("https://mocki.io/v1/37ef34f9-131a-4b39-a409-5b56dcdfca89")
        .then((response) => response.json())
        .then((data) => {
            showStores(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}



interface Store {
    location: string;
    name: string;
    distance: number;
    status: string;
    time: string;
    image: string;
    direction: string;
}



function showStores(data: Store[]): void {
    const response: Store[] = data;
    let location = (document.getElementById("locationInput") as HTMLInputElement).value;
    location = location.toLowerCase();

    if (location === "kochi" || location === "trivandrum") {
        const stores = response.filter(element => element.location.toLowerCase() === location);

        const nearby = document.getElementById("near-by");
        if (nearby) {
            nearby.textContent = `Nearby(${stores.length})`;
        }

        for (let i = 0; i < stores.length; i++) {
            createCards(stores, i);
        }
    } else {
        let notice = document.createElement("p");
        notice.classList.add("notice");
        notice.textContent = "No store available at that location";
        let warnimg = document.createElement("img");
        warnimg.classList.add("warnimg");
        warnimg.src = "/images/noStore.png";
        let cards = document.getElementById("cards");
        if (cards) {
            cards.appendChild(warnimg);
            cards.appendChild(notice);
        }
        let nearby = document.getElementById("near-by");
        if (nearby) {
            nearby.textContent = "Nearby(0)";
        }
    }
}



function createCards(stores: Store[], i: number): void {
    const cardscontainer = document.getElementById("cards");

    if (cardscontainer) {
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
}



