// define globals
let weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

let coord = {};

$(document).ready(function() {

  function getQuakes(){
    $.ajax({
      method: 'GET',
      url: weekly_quakes_endpoint,
      dataType: 'json',
      success: onSuccess,
      // error: onError
    });
  }

  function onSuccess(earthquakeData){
    earthquakeData.features.forEach(function(element){
      $('#info').append("<p>" + (element.properties.mag + ' M - ' + element.properties.place)+ "</p>");

      var thisCoord = [];

      for (var i = 2; i > 0; i--) {
        thisCoord.push(element.geometry.coordinates[i-1]);
      };

    });


  };






    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.342349, lng: -30.165751},
        zoom: 2
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
      $('#map').append(map);
    }



    initMap();








    getQuakes();





});
