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


// function getCountryInfo(country) {
//   $.ajax({
//     url: "countryInfo.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       country: country.iso_a2,
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         country.area = result['data']['geonames']['0']['areaInSqKm'];
//         country.capitalCity = result['data']['geonames']['0']['capital'];
//         country.continent = result['data']['geonames']['0']['continentName'];
//         country.currencyCode = result['data']['geonames']['0']['currencyCode'];
//         country.languages = result['data']['geonames']['0']['languages'];
//         country.population = result['data']['geonames']['0']['population'];
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
//       code: country.iso_a2,
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         country.covid_total.push(result['data']['data']['latest_data']['confirmed'],result['data']['data']['latest_data']['deaths'],result['data']['data']['latest_data']['recovered']);
//         country.covid_latest.push(result['data']['data']['timeline']['0']['new_confirmed'],result['data']['data']['timeline']['0']['new_deaths'],result['data']['data']['timeline']['0']['new_recovered']);
//         country.covid_3MonthsAgo.push(result['data']['data']['timeline']['90']['confirmed'],result['data']['data']['timeline']['90']['deaths'],result['data']['data']['timeline']['90']['recovered']);
//         country.covid_6MonthsAgo.push(result['data']['data']['timeline']['180']['confirmed'],result['data']['data']['timeline']['180']['deaths'],result['data']['data']['timeline']['180']['recovered']);
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
//     data: {},
//     success: function(result) {
//       if (result.status.name == "ok") {
//         country.exchangeRate = result['data']['rates'][country.currencyCode];
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
//       country: country.iso_a2,
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         // Modal 4 - News Articles - ([Image] [Title] [URL] [Source] [Published])
//         country.news_article1.push(result['data']['articles']['0']['urlToImage'], result['data']['articles']['0']['title'], result['data']['articles']['0']['url'], result['data']['articles']['0']['source']['name'], result['data']['articles']['0']['publishedAt']);
//         country.news_article2.push(result['data']['articles']['1']['urlToImage'], result['data']['articles']['1']['title'], result['data']['articles']['1']['url'], result['data']['articles']['1']['source']['name'], result['data']['articles']['1']['publishedAt']);
//         country.news_article3.push(result['data']['articles']['2']['urlToImage'], result['data']['articles']['2']['title'], result['data']['articles']['2']['url'], result['data']['articles']['2']['source']['name'], result['data']['articles']['2']['publishedAt']);
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
//       lat: country.lat,
//       lng: country.lng,
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         country.timezone = result['data']['timezoneId'];
//         country.timeOffset = result['data']['dstOffset'];
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
//       alpha3: country.iso_a3,
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         country.flag = result['data']['flag'];
//         country.languages = result['data']['languages']['0']['name'];
//         country.currencyCode = result['data']['currencies']['0']['code'];
//         country.currencyName = result['data']['currencies']['0']['name'];
//         country.currencySymbol = result['data']['currencies']['0']['symbol'];
//         country.topLevelDomain = result['data']['topLevelDomain']['0'];
//         country.callingCode = result['data']['callingCodes'];
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// function getWeatherInfo(country) {
//   $.ajax({
//     url: "weather.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       lat: country.lat,
//       lng: country.lng $('#selGeonameId').val()
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         $('#txtToponymName').html(result['data'][0]['toponymName']);
//         $('#txtName').html(result['data'][0]['name']);
//         $('#txtLat').html(result['data'][0]['lat']);
//         $('#txtLng').html(result['data'][0]['lng']);
//         $('#txtGeonameId').html(result['data'][0]['geonameId']);
//         $('#txtCountryCode').html(result['data'][0]['countryCode']);
//         $('#txtCountryName').html(result['data'][0]['countryName']);
//         $('#txtFcl').html(result['data'][0]['fcl']);
//         $('#txtFcode').html(result['data'][0]['fcode']);
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