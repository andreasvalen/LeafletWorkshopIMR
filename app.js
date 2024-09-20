// Initialize the map and set its view to Bergen, Norway
var map = L.map('map').setView([60.399559, 5.30175], 16);

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker at the workshop location
var marker = L.marker([60.399559, 5.30175]).addTo(map);

// Add a circle around the workshop location
var circle = L.circle([60.399559, 5.30175], {
    color: 'lightblue',
    fillColor: 'blue',
    fillOpacity: 0.2,
    radius: 150
}).addTo(map);


// Bind popups to the shapes
marker.bindPopup("<b>Workshop Location</b><br>This is where the Leaflet workshop is held.").openPopup();
circle.bindPopup("This circle represents area of uncertainty.");
polygon.bindPopup("This is a polygon near the workshop.");

// Display a popup with coordinates when the map is clicked
map.on('click', function(e) {
    L.popup()
     .setLatLng(e.latlng)
     .setContent("You clicked the map at " + e.latlng.toString())
     .openOn(map);
});
