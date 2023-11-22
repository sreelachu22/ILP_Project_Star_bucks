"use strict";
// Define global variables for map and marker
var map;
var marker;
var lati;
var long;
// Function to initialize the map
function initMap() {
    map = L.map('mapContainer').setView([0, 0], 13); // Set initial view and zoom level
    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latLng = new L.LatLng(latitude, longitude);
            console.log(latitude);
            console.log(longitude);
            console.log(latLng);
            lati=latitude;
            long=longitude
            fetchData();
            // Set map view to the obtained location
            map.setView(latLng, 13);
            // Create a marker for user's location
            marker = L.marker(latLng).addTo(map);
            marker.bindPopup("Your Location").openPopup();
        });
    }
    else {
        alert('Geolocation is not supported by your browser');
    }
}
// Function to search for a location entered by the user
function searchLocation() {
    var input = document.getElementById('locationInput').value;
    // Use a geocoding service to get the coordinates of the entered location
    fetch("https://nominatim.openstreetmap.org/search?format=json&q=".concat(input))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data && data.length > 0) {
            var lat = parseFloat(data[0].lat);
            var lon = parseFloat(data[0].lon);
            // Update map view to the searched location
            map.setView([lat, lon], 13);
            // Remove existing marker and add a new one for the searched location
            if (marker) {
                map.removeLayer(marker);
            }
            marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup("Searched Location").openPopup();
        }
        else {
            alert('Location not found');
        }
    })
        .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}
// Call the initMap function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
document.getElementById("locationInput").addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
        searchLocation();
        document.getElementById("cards").innerHTML = "";
        fetchData();
    }
});
function fetchData() {
    fetch("https://mocki.io/v1/37ef34f9-131a-4b39-a409-5b56dcdfca89")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        showStores(data);
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
function showStores(data) {
    var response = data;
    var location = document.getElementById("locationInput").value;
    location = location.toLowerCase();
    if(location==="")
    {
        if((lati=8.5588705) && (long=76.8777134)){
            location="trivandrum";
        }
    }
    if (location === "kochi" || location === "trivandrum") {
        var stores = response.filter(function (element) { return element.location.toLowerCase() === location; });
        var nearby = document.getElementById("near-by");
        if (nearby) {
            nearby.textContent = "Nearby(".concat(stores.length, ")");
        }
        for (var i = 0; i < stores.length; i++) {
            createCards(stores, i);
        }
    }
    else {
        var notice = document.createElement("p");
        notice.classList.add("notice");
        notice.textContent = "No store available at that location";
        var warnimg = document.createElement("img");
        warnimg.classList.add("warnimg");
        warnimg.src = "/images/noStore.png";
        var cards = document.getElementById("cards");
        if (cards) {
            cards.appendChild(warnimg);
            cards.appendChild(notice);
        }
        var nearby = document.getElementById("near-by");
        if (nearby) {
            nearby.textContent = "Nearby(0)";
        }
    }
}
function createCards(stores, i) {
    var cardscontainer = document.getElementById("cards");
    if (cardscontainer) {
        var store = document.createElement("div");
        store.classList.add("store-card");
        var top_1 = document.createElement("div");
        top_1.classList.add("card-top");
        var img = document.createElement("img");
        img.classList.add("store-img");
        var details = document.createElement("div");
        details.classList.add("store-details");
        var name_1 = document.createElement("h6");
        name_1.classList.add("store-name");
        var status_1 = document.createElement("div");
        status_1.classList.add("distance-status");
        var distance = document.createElement("p");
        distance.classList.add("distance-p");
        var statusp = document.createElement("p");
        statusp.classList.add("status-p");
        var icons = document.createElement("div");
        icons.classList.add("icons");
        var dine = document.createElement("img");
        dine.classList.add("dine-img");
        dine.src = "/images/dine.png";
        var wifi = document.createElement("img");
        wifi.classList.add("wifi-img");
        wifi.src = "/images/wifi.png";
        var bottom = document.createElement("div");
        bottom.classList.add("card-bottom");
        var car = document.createElement("img");
        car.classList.add("car-img");
        car.src = "/images/car.png";
        var time = document.createElement("p");
        time.classList.add("time-p");
        var direction = document.createElement("a");
        direction.classList.add("direction-btn");
        direction.textContent = "Show Direction";
        name_1.textContent = "".concat(stores[i].name);
        distance.textContent = "".concat(stores[i].distance, " kms away");
        statusp.textContent = "".concat(stores[i].status);
        if (statusp.textContent === "Closed") {
            statusp.style.color = "red";
        }
        time.textContent = "".concat(stores[i].time);
        img.src = "".concat(stores[i].image);
        direction.href = "".concat(stores[i].direction);
        top_1.appendChild(img);
        status_1.appendChild(distance);
        status_1.appendChild(statusp);
        icons.appendChild(dine);
        icons.appendChild(wifi);
        details.appendChild(name_1);
        details.appendChild(status_1);
        details.appendChild(icons);
        top_1.appendChild(details);
        bottom.appendChild(car);
        bottom.appendChild(time);
        bottom.appendChild(direction);
        store.appendChild(top_1);
        store.appendChild(bottom);
        cardscontainer.appendChild(store);
    }
}
