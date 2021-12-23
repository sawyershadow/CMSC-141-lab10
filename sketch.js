var fence;
var polygon = [
  { lat: 42.036077, lon: -73.91148 }, // top left
  { lat: 42.03556, lon: -73.896392 }, // top right
  { lat: 42.014521, lon: -73.902987 }, // bottom right
  { lat: 42.01144, lon: -73.923622 } // bottom left
];
function setup() {
  //optional options object for geoFencegeoFencePolygon
  //fence = new geoFenceCircle(polygon, insideTheFence, 'mi', fenceOptions)
  // fenceOptions = {
  //   enableHighAccuracy: false,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  fence = new geoFencePolygon(polygon, insideTheFence, outsideTheFence, "mi");
}

function insideTheFence(position) {
  print("INlat: " + position.latitude);
  print("INlong: " + position.longitude);
  print("user is at bard");
}

function outsideTheFence(position) {
  print("OUTlat: " + position.latitude);
  print("OUTlong: " + position.longitude);
  print("user is not at bard");
}
