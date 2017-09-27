// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

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
      $('#info').append("<p>" + (element.properties.mag + ' - ' + element.properties.place)+ "</p>");
      console.log(element.properties.mag + ' - ' + element.properties.place);
    });

    console.log("here");
  };
  getQuakes();
});
