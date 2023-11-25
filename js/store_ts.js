"use strict";
// Define global variables for map and marker
var map;
var marker;
var lati;
var long;


// Call the initMap function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});


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


// Operations to perform when 'enter' button is pressed after typing in the input field
document.getElementById("locationInput").addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
        searchLocation();
        document.getElementById("cards").innerHTML = "";
        fetchData();
    }
});


// Function to search for a location entered by the user
function searchLocation() {
    var input = document.getElementById('locationInput').value;
    fetch("https://nominatim.openstreetmap.org/search?format=json&q=".concat(input))
        .then(function (response) { return response.json(); })
        .then(function (data) {
            if (data && data.length > 0) {
                var lat = parseFloat(data[0].lat);
                var lon = parseFloat(data[0].lon);
                // Animate map to the searched location with a smooth flyTo animation
                map.flyTo([lat, lon], 13, {
                    animate: true,
                    duration: 1 // Duration of the animation in seconds
                });
                if (marker) {
                    map.removeLayer(marker);
                }
                marker = L.marker([lat, lon]).addTo(map);
                marker.bindPopup("Searched Location").openPopup();
            } else {
                alert('Location not found');
            }
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
}


// Fetch data from API to create store cards
function fetchData() {
    fetch("https://mocki.io/v1/a1529868-11bf-4b16-bb00-1c12978dcd31")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        showStores(data);
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}


// Function to display store cards
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
        warnimg.src = "images/map.gif";
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


// Function to create cards dynamically from API data
function createCards(stores, i) {
    var cardscontainer = document.getElementById("cards");
    if (cardscontainer) {
        var store = document.createElement("div");
        store.classList.add("store-card");
        store.addEventListener("click", function () {
            showLocationOnMap(stores[i].latitude, stores[i].longitude);
        });
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


// Function to display map of the store
function showLocationOnMap(latitude, longitude) {
    map.setView([latitude, longitude], 13); // Set the view of the map to the provided coordinates

    if (marker) {
        map.removeLayer(marker); // Remove the existing marker
    }

    var latLng = new L.LatLng(latitude, longitude);
    marker = L.marker(latLng).addTo(map); // Add a new marker to the clicked location
    marker.bindPopup("Clicked Location").openPopup();
}