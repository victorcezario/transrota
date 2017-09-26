function initialize() {

var input = document.getElementById('origem');
var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: -23.321264, lng: -51.2351624}
  });
  directionsDisplay.setMap(map);

   //alert("Entrou no calculate");
  var origem = $("#origem").val();
  document.getElementById('txt_de').innerHTML += origem;
  var destino = $("#destino").val();
  document.getElementById('txt_para').innerHTML += destino;
  directionsService.route({
    origin: origem,
    destination: destino,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
       //alert('De' + status + "to"+response);
    } else {
      alert('Falha ao buscar dados: ' + status);
    }
  });

    //calculateAndDisplayRoute(directionsService, directionsDisplay);
 //alert("x");
  //document.getElementById('origem').addEventListener('change', onChangeHandler);
  //document.getElementById('destino').addEventListener('change', onChangeHandler);

   var request = {
       origin: origem, 
       destination: destino,
       travelMode: google.maps.DirectionsTravelMode.DRIVING
   };
   directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {

         // Display the distance:
         document.getElementById('txt_distancia').innerHTML += 
            Math.round(response.routes[0].legs[0].distance.value / 1000)+ " KM";

         // Display the duration:
         document.getElementById('txt_tempo').innerHTML += 
            Math.round(response.routes[0].legs[0].duration.value / 60 / 60) + " Horas";

         directionsDisplay.setDirections(response);
      }
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  alert("Entrou no calculate");
  var origem = $("#origem").val();
  var destino = $("#destino").val();
  directionsService.route({
    origin: origem.val(),
    destination: destino.val(),
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
       //window.alert('De' + status + "to"+response);
    } else {
      
      window.alert('Directions request failed due to ' + status);
    }
  });
  alert("saiu no calculate");
}