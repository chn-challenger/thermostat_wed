thermostat = new Thermostat();

var userInteract = function(interaction) {
  interaction;
  updateHtmlTemperature();
};

var updateHtmlTemperature = function() {
  document.getElementById("temperature").innerHTML = thermostat.temperature;
  document.getElementById("temperature").style.color = thermostat.colour();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("Up").addEventListener("click", function() {
    userInteract(thermostat.increaseTemperature());
  });

  document.getElementById("Down").addEventListener("click", function() {
    userInteract(thermostat.decreaseTemperature());
  });

  document.getElementById("Reset").addEventListener("click", function() {
    userInteract(thermostat.resetTemperature());
  });

  document.getElementById("PowerSaver").addEventListener("click", function() {
    userInteract(thermostat.switchPowerSaving());
  });

  var urlCity = window.location.search.replace('?city=', '')|| 'london';
  // var weathertemp;
  // var weathername;
  // var pos;

  $.ajax('http://api.openweathermap.org/data/2.5/weather?q={' + urlCity + '}', {
    success: function(data) {
      // console.log(data);
      var weathertemp = (data.main.temp - 273.15).toFixed(1);
      var weathername = data.name;
      var lati = data.coord.lat;
      var long = data.coord.lon;
      var pos = {lat: lati, lng: long};
      // console.log(lati);
      // console.log(long);

      var map1 = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lati, lng: long},
        zoom: 7
      });

        var infoWindow = new google.maps.InfoWindow({map: map1});
        infoWindow.setPosition({lat: lati, lng: long});
        infoWindow.setContent('Found');
        map1.setCenter(pos);


      // console.log(weathertemp);
      // console.log(weathername);
      $('#locationTemp').html(weathertemp);
      $('#location').html(weathername);
    }
  });

  // console.log(pos);

  // $.ajax('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyA6H-yp5yYrieFg7osZBAoJLRvQGNe0xhs', {
  //   success: function(data2) {
  //     console.log(data2);
  //   }
  // });




});
