var fence;
var polygon = [
    {lat: 34.045303, lon: -118.334650},  // top left  
    {lat: 34.045252, lon: -118.334462},  // top right
    {lat: 34.045131, lon: -118.334498},  // bottom right
    {lat: 34.045185, lon: -118.334684},  // bottom left
];
function setup(){

    //optional options object for geoFencegeoFencePolygon
    //fence = new geoFenceCircle(polygon, insideTheFence, 'mi', fenceOptions)
    // fenceOptions = {
    //   enableHighAccuracy: false,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    fence = new geoFencePolygon(polygon, insideTheFence, outsideTheFence, 'mi')
}

function insideTheFence(position){
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
}

function outsideTheFence(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
}
