var map = L.map('map').fitWorld();

map.locate({setView: true, maxZoom: 16});

// var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var SatelliteHybrid = L.tileLayer("https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=X671gljGZdslUL5uB7lt", {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var Toner = L.tileLayer("https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=X671gljGZdslUL5uB7lt", {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var baseMaps = {
  'Open Street Map': osm,
  'Satellite Hybrid': SatelliteHybrid,
  'Toner': Toner
};

L.control.layers(baseMaps).addTo(map);

function addBorder(countryCode) {
  $.ajax({
    url: "countryBorders.php",
    type: 'POST',
    dataType: 'json',
    data: {
      code: countryCode
    },
    success: function(result) {
      if (result.status.name == "ok") {
        border = L.geoJSON(result['data'], {style: {color: '#357a38'}});
        border.addTo(map);
        map.fitBounds(border.getBounds());
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
    }
  });
};

addBorder("BS");

// function getCountryInfo(country) {
//   $.ajax({
//     url: "countryInfo.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getCovidInfo(country) {
//   $.ajax({
//     url: "covidInfo.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getExchangeRate(country) {
//   $.ajax({
//     url: "exchangeRates.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getNews(country) {
//   $.ajax({
//     url: "news.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getTimezone(country) {
//   $.ajax({
//     url: "timezone.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getRESTCountryInfo(country) {
//   $.ajax({
//     url: "RESTCountryInfo.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         ???
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

function getWeatherInfo(country) {
  $.ajax({
    url: "weather.php",
    type: 'GET',
    dataType: 'json',
    data: {
      lat: country.lat,
      lng: country.lng
    },
    success: function(result) {
      if (result.status.name == "ok") {
        $('#feels-like').html(result.main.feels_like)
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(JSON.stringify(jqXHR));
      console.log(JSON.stringify(textStatus));
      console.log(JSON.stringify(errorThrown));
    }
  });
};

L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
  var antarctica = [-77,70];
  map.setView(antarctica);
}).addTo(map);

L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
  var bahamas = [23.75975,-77.53466];
  map.setView(bahamas);
}).addTo(map);

var stateChangingButton = L.easyButton({
  states: [{
          stateName: 'zoom-to-forest',        // name the state
          icon:      'fa-tree',               // and define its properties
          title:     'zoom to a forest',      // like its title
          onClick: function(btn, map) {       // and its callback
              map.setView([46.25,-121.8],10);
              btn.state('zoom-to-school');    // change state on click!
          }
      }, {
          stateName: 'zoom-to-school',
          icon:      'fa-university',
          title:     'zoom to a school',
          onClick: function(btn, map) {
              map.setView([42.3748204,-71.1161913],16);
              btn.state('zoom-to-forest');
          }
  }]
});

stateChangingButton.addTo(map);


function countryData() {
  var polygon = L.polygon([
    [23.75975,-77.53466],
    [23.71,-77.78],
    [24.28615,-78.03405],
    [24.57564,-78.40848],
    [25.2103,-78.19087],
    [25.17,-77.89],
    [24.34,-77.54],
    [23.75975,-77.53466],
    [26.58,-77.82],
    [26.42,-78.91],
    [26.79,-78.98],
    [26.87,-78.51],
    [26.84,-77.85],
    [26.58,-77.82],
    [26.59,-77],
    [25.87918,-77.17255],
    [26.00735,-77.35641],
    [26.53,-77.34],
    [26.92516,-77.78802],
    [27.04,-77.79],
    [26.59,-77]
  ]).addTo(map);
}

document.getElementById("news").addEventListener("click", countryData);

// function countryBorder() {
//   $.ajax({
//     url: "",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       ???
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         var polygon = L.polygon([
//           [23.75975,-77.53466],
//           [23.71,-77.78],
//           [24.28615,-78.03405],
//           [24.57564,-78.40848],
//           [25.2103,-78.19087],
//           [25.17,-77.89],
//           [24.34,-77.54],
//           [23.75975,-77.53466],
//           [26.58,-77.82],
//           [26.42,-78.91],
//           [26.79,-78.98],
//           [26.87,-78.51],
//           [26.84,-77.85],
//           [26.58,-77.82],
//           [26.59,-77],
//           [25.87918,-77.17255],
//           [26.00735,-77.35641],
//           [26.53,-77.34],
//           [26.92516,-77.78802],
//           [27.04,-77.79],
//           [26.59,-77]
//         ]).addTo(map);
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// // // load GeoJSON from an external file
// // $.getJSON("countryBorders.geo",function(data) {
// // // add GeoJSON layer to the map once the file is loaded
// //   L.geoJson(data).addTo(map);
// // });

// // var district_boundary = new L.geoJson();
// // district_boundary.addTo(map);

// // $.ajax({
// //   dataType: "json",
// //   url: "countryBorders.geo.json",
// //   success: function(data) {
// //     $(data.features).each(function(key, data) {
// //       district_boundary.addData(data);
// //     });
// //   }
// // }).error(function() {});

// // var worlddata = L.geoJSON(worlddata).addTo('map');

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);


// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// L.geoJSON(geojsonFeature).addTo(map);

// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };

// L.geoJSON(geojsonFeature, {
//     onEachFeature: onEachFeature
// }).addTo(map);