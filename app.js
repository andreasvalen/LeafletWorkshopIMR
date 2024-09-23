var map = L.map('map').setView([60.399559, 5.30175], 16);

const GebcoWmsUrl = 'https://wms.gebco.net/mapserv?';

L.tileLayer
.wms(GebcoWmsUrl, {
  layers: 'GEBCO_LATEST',
  format: 'image/png',
  attribution: '&copy; <a target="blank_" href="https://www.gebco.net/">GEBCO</a>',
  opacity: 1,
  maxZoom: 18
})
.addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution:
  '&copy; <a target="blank_" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | EPSG:3857',
opacity: 0.78,
maxZoom: 18
}).addTo(map);


var marker = L.marker([60.399559, 5.30175]).addTo(map);

var circle = L.circle([60.399559, 5.30175], {
    color: 'lightblue',
    fillColor: 'blue',
    fillOpacity: 0.2,
    radius: 150
}).addTo(map);


marker.bindPopup("<b>Workshop Location</b><br>This is where the Leaflet workshop is held.").openPopup();
circle.bindPopup("This circle represents area of uncertainty.");

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems, 
        remove: true              
    },
    draw: {
        polygon: true, 
        polyline: false, 
        rectangle: false, 
        circle: false, 
        marker: false  
    }
});

map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer); 
});