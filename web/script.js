// set map to İstanbul's coordinates, zoom 10 units
const map = L.map("istanbulMap").setView([41.0082, 28.9784], 10);

// add openstreet layer to map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);



fetch("../data/ilce_geojson_clean.json")  // file path from script.js
  .then(response => response.json())      // read as json
  .then(geojsonData => { // name the value from the previous .then as geojsonData

    console.log("GeoJSON Data:", geojsonData);
    console.log("All Features:", geojsonData.features);
    
    L.geoJSON(geojsonData, {
      style: function(feature) {
        return {
          color: "#3388ff",   // border color
          weight: 1,          // border thickness
          fillOpacity: 0.2    
        };
      },
      onEachFeature: function(feature, layer) {
        // show districtname when clicked
        /*if (feature.properties && feature.properties.ilce_adi) {
          layer.bindPopup(feature.properties.ilce_adi);
        }*/
      }
    }).addTo(map);
  })
  .catch(error => console.error("error while loading geoJSON:", error));
