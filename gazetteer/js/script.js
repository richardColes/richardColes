var map = L.map('map').fitWorld();

map.locate({setView: true, maxZoom: 16});

// var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
//   attribution: '&copy; <a href="http://osm.org/copyright" target = "_blank">

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

var kabul = L.marker([34.543896, 69.160652]).bindPopup("City of Kabul, capital of Afghanistan<br>Population: 1"),
    london = L.marker([51.509865, -0.118092]).bindPopup("City of London, capital of England<br>Population: 1"),
    tirana = L.marker([41.327953, 19.819025]).bindPopup("City of Tirana, capital of Albania<br>Population: 1"),
    algiers = L.marker([36.737232, 3.086472]).bindPopup("City of Algiers, capital of Algeria<br>Population: 1"),
    andorraLaVella = L.marker([42.506317, 1.521835]).bindPopup("City of Andorra La Vella, capital of Andorra<br>Population: 1"),
    luanda = L.marker([-8.838333, 13.234444]).bindPopup("City of Luanda, capital of Angola<br>Population: 1"),
    saintJohns = L.marker([17.11717, -61.84573]).bindPopup("City of Saint John's, capital of Antigua & Barbuda<br>Population: 1"),
    buenosAires = L.marker([-34.603722, -58.381592]).bindPopup("City of Buenos Aires, capital of Argentina<br>Population: 1"),
    yerevan = L.marker([40.177200, 44.503490]).bindPopup("City of Yerevan, capital of Armenia<br>Population: 1"),
    canberra = L.marker([-35.282001, 149.128998]).bindPopup("City of Canberra, capital of Australia<br>Population: 1"),
    vienna = L.marker([48.210033, 16.363449]).bindPopup("City of Vienna, capital of Austira<br>Population: 1"),
    baku = L.marker([40.409264, 49.867092]).bindPopup("City of Baku, capital of Azerbaijan<br>Population: 1"),
    sheffield = L.marker([53.383331, -1.466667]).bindPopup("City of Sheffield<br>Population: 1<br>Birthplace of ?"),
    sunderland = L.marker([54.906101, -1.381130]).bindPopup("City of Sunderland<br>Population: 1<br>Birthplace of ?"),
    truro = L.marker([50.259998, -5.051000]).bindPopup("City of Truro<br>Population: 1<br>Birthplace of ?"),
    wakefield = L.marker([53.680000, -1.490000]).bindPopup("City of Wakefield<br>Population: 1<br>Birthplace of ?"),
    wells = L.marker([51.209000, -2.647000]).bindPopup("City of Wells<br>Population: 1<br>Birthplace of Kris Marshall, Edgar Wright"),
    winchester = L.marker([51.063202, -1.308000]).bindPopup("City of Winchester<br>Population: 1<br>Birthplace of Jack Dee, Colin Firth, Henry III"),
    worcester = L.marker([52.192001, -2.220000]).bindPopup("City of Worcester<br>Population: 103,872"),
    york = L.marker([53.958332, -1.080278]).bindPopup("City of York<br>Population: 1");

var capitalCities = L.layerGroup([kabul, tirana, algiers, andorraLaVella, luanda, saintJohns, buenosAires, yerevan, canberra, vienna, baku]);

var overlayMaps = {
  "Capital Cities": capitalCities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

//

// for(let i = 0; i < data.features.length; i++) {
//   let name = data.features[i].properties.name;
//   let iso_a2 = data.features[i].properties.iso_a2;

//   countryNames.push([name, iso_a2]);
// }

$(document).ready(() => {
  let countryNames = [];
  $.ajax({
    type: "GET",
    url: "php/countryBorders.php",
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      let select = document.getElementById("selectCountry");
      for(let i = 0; i < data.data.features.length; i++) {
        select.innerHTML += `<option value="${data.data.features[i].properties.iso_a2}">${data.data.features[i].properties.name}</option>`;
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
});

var test = new Array(["Bahamas", "BS"], ["Canada", "CA"]);

//

// var mymap = L.map('map', {
//   center: [48.7, 11.5],
//   zoom: 6,
//   zoomControl: false,
// });

// var popup = L.popup();

// //Pop-up function
// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString()) //esample from leaflet, will be immediately replaced by weatherpopup...
//     .openOn(map);

// //getting json function
//   $(document).ready(function() {
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?lat=" + e.latlng.lat + '&lon=' + e.latlng.lng + "&appid=e70e583d40878c78c9ef4626078028b9",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         weatherlocation_lon = data.coord.lon;
//         weatherlocation_lat = data.coord.lat;

//         weathertime = data.dt; // Time of weatherdata (UTC)

//         weatherIcon = data.weather[0].icon;
//         weatherType = data.weather[0].main;
//         weatherDescription = data.weather[0].description;
//         temp = data.main.temp;
//         feelsLike = data.main.feels_like;
//         humidity = data.main.humidity;
//         windspeed = data.wind.speed;
//         cloudCoverage = data.clouds.all;

//         // Converting Unix UTC Time
//         var utctimecalc = new Date(weathertime * 1000);
//         var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
//         var month = months[utctimecalc.getMonth()];
//         var time = utctimecalc.getDate() + "/" + month + "/" + utctimecalc.getFullYear() + " " + utctimecalc.getHours() + ":" + utctimecalc.getMinutes();

//         // Recalculations
//         var weatherIconLogo = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
//         var weathertimenormal = time;
//         var tempInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var feelsLikeInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var windspeedInKmh = Math.round((windspeed * 3.6) * 100) / 100; // Converts windspeed from m/s to km/h, rounded to 2 decimals

//         // Popup with weather
//         var fontSizeSmall = 1;
//         popup.setContent("Weather:<br>" + "<img src=" + weatherIconLogo + "><br>" + weatherType + " (" + weatherDescription + ")" + "<br><br>Temperature: " + tempInCelsius + "°C" + "<br>Feels Like: " + feelsLikeInCelsius + "°C" + "<br>Humidity: " + humidity + "%" + "<br>Windspeed: " + windspeedInKmh + "kmh" + "<br>Cloud Coverage: " + cloudCoverage + "%" + "<br><br><font size=" + fontSizeSmall + ">Data Source:<br>openweathermap.org  " + weathertimenormal);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//     $.ajax({
//       url: "https://openexchangerates.org/api/latest.json?app_id=48933b75a67342ec8f079785e1473e92",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         exchangeRateGBP = data.rates.GBP;

//         // Popup with weather
//         var fontSizeSmall = 1;
//         popup.setContent("Exchange Rates:<br>" + "$1 = £" + exchangeRateGBP + "<br>" + cloudCoverage);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   });
// };

// // Pop-up
// map.on('click', onMapClick);

// $('#options').on('change', function() {
//   addBorder(countryCode);
// });

// function addBorder(countryCode) {
//   $.ajax({
//     url: "countryBorders.php",
//     type: 'POST',
//     dataType: 'json',
//     data: {
//       code: countryCode
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         border = L.geoJSON(result['data'], {style: {color: '#357a38'}});
//         border.addTo(map);
//         map.fitBounds(border.getBounds());
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(jqXHR);
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
//       lng: country.lng
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         $('#pp').html(result.main.feels_like);
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

// L.easyButton('fa-comment-o', function(btn, map) {
//   $('#myModal').modal('show');
//   getWeatherInfo(countrycoord);
// }, 'Weather').addTo(map);



//// function onMapClick2(e) {
//   $('#myModal').modal('show');
//   $(document).ready(function() {
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?lat=" + e.latlng.lat + '&lon=' + e.latlng.lng + "&appid=e70e583d40878c78c9ef4626078028b9",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         weatherlocation_lon = data.coord.lon;
//         weatherlocation_lat = data.coord.lat;
  
//         weathertime = data.dt; // Time of weatherdata (UTC)
  
//         weatherIcon = data.weather[0].icon;
//         weatherType = data.weather[0].main;
//         weatherDescription = data.weather[0].description;
//         temp = data.main.temp;
//         feelsLike = data.main.feels_like;
//         humidity = data.main.humidity;
//         windspeed = data.wind.speed;
//         cloudCoverage = data.clouds.all;
  
//         // Converting Unix UTC Time
//         var utctimecalc = new Date(weathertime * 1000);
//         var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
//         var month = months[utctimecalc.getMonth()];
//         var time = utctimecalc.getDate() + "/" + month + "/" + utctimecalc.getFullYear() + " " + utctimecalc.getHours() + ":" + utctimecalc.getMinutes();
  
//         // Recalculations
//         var weatherIconLogo = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
//         var weathertimenormal = time;
//         var tempInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var feelsLikeInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var windspeedInKmh = Math.round((windspeed * 3.6) * 100) / 100; // Converts windspeed from m/s to km/h, rounded to 2 decimals
  
//         // Popup with weather
//         $("#txtFeelsLike").html(feelsLikeInCelsius);
//         $('#txtCloudCoverage').html(cloudCoverage);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   });
// };

// map.on('click', onMapClick2);

// var popup2 = L.popup();

// //Pop-up function
// function onMapClick(e) {
//   popup2
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString()) //esample from leaflet, will be immediately replaced by weatherpopup...
//     .openOn(map);

//   //getting json function
//   $(document).ready(function() {
//     $.ajax({
//       url: "https://openexchangerates.org/api/latest.json?app_id=48933b75a67342ec8f079785e1473e92",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         exchangeRateGBP = data.rates.GBP;

//         // Popup with weather
//         var fontSizeSmall = 1;
//         popup2.setContent("Exchange Rates:<br>" + "$1 = £" + exchangeRateGBP);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   });
// };

// // Pop-up
// map.on('click', onMapClick);

// function onClick(e) {
//   var coord = e.latlng;
//   var lat = coord.lat;
//   var lng = coord.lng;
//   alert("You clicked the map at latitude: " + lat + " and longitude: " + lng);
// };

// map.on('click', onClick);

// var lat = latlng.lat;
// var lng = latlng.lng;

// L.easyButton('fa-comment-o', function(btn, map) {
//   $('#myModal').modal('show');
//   $(document).ready(function() {
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?lat=" + e.latlng.lat + '&lon=' + e.latlng.lng + "&appid=e70e583d40878c78c9ef4626078028b9",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         weatherlocation_lon = data.coord.lon;
//         weatherlocation_lat = data.coord.lat;

//         weathertime = data.dt; // Time of weatherdata (UTC)

//         weatherIcon = data.weather[0].icon;
//         weatherType = data.weather[0].main;
//         weatherDescription = data.weather[0].description;
//         temp = data.main.temp;
//         feelsLike = data.main.feels_like;
//         humidity = data.main.humidity;
//         windspeed = data.wind.speed;
//         cloudCoverage = data.clouds.all;

//         // Converting Unix UTC Time
//         var utctimecalc = new Date(weathertime * 1000);
//         var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
//         var month = months[utctimecalc.getMonth()];
//         var time = utctimecalc.getDate() + "/" + month + "/" + utctimecalc.getFullYear() + " " + utctimecalc.getHours() + ":" + utctimecalc.getMinutes();

//         // Recalculations
//         var weatherIconLogo = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
//         var weathertimenormal = time;
//         var tempInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var feelsLikeInCelsius = Math.round((temp - 273) * 100) / 100;  // Converts temperature from Kelvin to Celsius
//         var windspeedInKmh = Math.round((windspeed * 3.6) * 100) / 100; // Converts windspeed from m/s to km/h, rounded to 2 decimals

//         // Popup with weather
//         $("#txtFeelsLike").html(feelsLikeInCelsius);
//         $('#txtCloudCoverage').html(cloudCoverage);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   });
// }, 'Weather').addTo(map);


// L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map) {

//   // var popup = L.popup()
//   //   .setLatLng( [-77, 70] )
// 	//   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
// 	//   .openOn(map);

//   // $(document).ready(function(){
//   //   $("button").click(function(){
//   //     $.ajax({url: "demo_test.txt", success: function(result){
//   //       $("#div1").html(result);
//   //     }});
//   //   });
//   // });
//     $.ajax({
//       url: "https://openexchangerates.org/api/latest.json?app_id=48933b75a67342ec8f079785e1473e92",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         exchangeRateGBP = data.rates.GBP;

//         // var fontSizeSmall = 1;
//         // popup.setContent("Exchange Rates:<br>" + "$1 = £" + exchangeRateGBP);
//           $('#txtToponymName').html(data.rates.GBP);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   }).addTo(map);

//   var popupFrance = L.popup()
//   .setLatLng( [46.711, 1.7191] )
//   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//   .openOn(map);

//   $(document).ready(function() {
//     $.ajax({
//       url: "https://openexchangerates.org/api/latest.json?app_id=48933b75a67342ec8f079785e1473e92",
//       dataType: 'json',
//       success: function(data) {
//         // storing json data in variables
//         exchangeRateEUR = data.rates.EUR;

//         // Popup with weather
//         var fontSizeSmall = 1;
//         popupFrance.setContent("Exchange Rates:<br>" + "$1 = €" + exchangeRateEUR);
//       },
//       error: function() {
//         alert("Error retrieving data from Openweathermap!");
//       }
//     });
//   });
// }).addTo(map);

// $(document).ready(function() {
//   $.ajax({
//     url: "countryBorders.geo.json",
//     dataType: 'json',
//     success: function(data) {
//       border = L.geoJSON(data.features[2].coordinates[lng,lat], {style: {color: '#357a38'}});
//       border.addTo(map);
//       map.fitBounds(border.getBounds());
//     },
//     error: function() {
//       alert("Error retrieving data from Openweathermap!");
//     }
//   });
// });

// function addBorder(countryCode) {
//   $.ajax({
//     url: "countryBorders.php",
//     type: 'POST',
//     dataType: 'json',
//     data: {
//       code: countryCode
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         border = L.geoJSON(result['data'], {style: {color: '#357a38'}});
//         border.addTo(map);
//         map.fitBounds(border.getBounds());
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(jqXHR);
//     }
//   });
// };

// $('#options').on('change', function() {
//   countryCode = $("#options").val();
//   addBorder(countryCode);
// });



// var polygon2 = addBorder("BS");
// polygon2.addTo(map);

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

// var mymap = L.map('maptest').setView([51.505, -0.09], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OSM contributors'
// }).addTo(mymap);

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("Fetching weather info")
//         .openOn(map);

//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng + '&appid=e70e583d40878c78c9ef4626078028b9')
//         .then(r => r.json()) 
//         .then(data => { 
//             // Change this line to show exactly the info you need
//             popup.setContent(data.weather.map(w => w.description).join(", "))
//         });
// };

// map.on('click', onMapClick);


// function getWeatherInfo(country) {

  // $(document).ready(function(){
  //   $("button").click(function(){
  //     $.ajax({url: "demo_test.txt", success: function(result){
  //       $("#div1").html(result);
  //     }});
  //   });
  // });

// function getWeatherInfo(country) {
//   $.ajax({
//     url: "weather.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       lat: country.lat,
//       lng: country.lng
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         $('#pp').html(result.main.feels_like);
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

//       url: "", success: function(result) {
//       $("#button").html(result);
//     }});
//   });
// });


//   $.ajax({
//     url: "weather.php",
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       lat: country.lat,
//       lng: country.lng
//     },
//     success: function(result) {
//       if (result.status.name == "ok") {
//         $('#feels-like').html(result.main.feels_like)
//       }
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(JSON.stringify(jqXHR));
//       console.log(JSON.stringify(textStatus));
//       console.log(JSON.stringify(errorThrown));
//     }
//   });
// };

L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
  var antarctica = [-77,70];
  map.setView(antarctica);
}).addTo(map);

L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
  var marker = L.marker([17.438139, 78.395830]);
  marker.bindPopup('This is Tutorialspoint').openPopup();
  marker.addTo(map);
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


// function countryData() {
//   var polygon = L.polygon([
//     [23.75975,-77.53466],
//     [23.71,-77.78],
//     [24.28615,-78.03405],
//     [24.57564,-78.40848],
//     [25.2103,-78.19087],
//     [25.17,-77.89],
//     [24.34,-77.54],
//     [23.75975,-77.53466],
//     [26.58,-77.82],
//     [26.42,-78.91],
//     [26.79,-78.98],
//     [26.87,-78.51],
//     [26.84,-77.85],
//     [26.58,-77.82],
//     [26.59,-77],
//     [25.87918,-77.17255],
//     [26.00735,-77.35641],
//     [26.53,-77.34],
//     [26.92516,-77.78802],
//     [27.04,-77.79],
//     [26.59,-77]
//   ]).addTo(map);
// }

// document.getElementById("news").addEventListener("click", countryData);

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