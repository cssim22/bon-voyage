let map;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 34.053339805032834, lng: -118.3305692891801 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}