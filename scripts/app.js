// define globals
let weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

let coord = [];

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
      var x;
      var y;
      var thisCoord;

      for (var i = 2; i > 0; i--) {
        if(i === 2){
          x = element.geometry.coordinates[i-1];
          // console.log(x);
        }else if (i === 1) {
          y = element.geometry.coordinates[i-1]
          // console.log(y);
        }
        };

        thisCoord = {
          lat: x,
          lng: y
        };

        coord.push(thisCoord);
    });
    initMap(coord);
  };


    function initMap(coord) {
      var icon = {
        url: "./images/earthquake.png",
        scaledSize: new google.maps.Size(30, 30),
        };
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.342349, lng: -30.165751},
        zoom: 2
      });
      for(var i = 0; i<coord.length;i++){
        var marker = new google.maps.Marker({
          position: coord[i],
          map: map,
          icon: icon
        });
      $('#map').append(map);
      }
    };
  getQuakes();
});
