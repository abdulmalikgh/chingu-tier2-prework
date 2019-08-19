mapboxgl.accessToken = 'pk.eyJ1IjoibGF3aXgxMCIsImEiOiJjamJlOGE1bmcyZ2V5MzNtcmlyaWRzcDZlIn0.ZRQ73zzVxwcADIPvsqB6mg';

let map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center:[-1.615800,6.695070],
    zoom:13
})
;
//adding marker attach empty div to each point in your jeoJson point
//so you have to style the markers before adding the points
let geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-1.602856,6.709202]
      },
      properties: {
        title: 'Mapbox',
        description: 'Dichemso'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-1.617956,6.701360]
      },
      properties: {
        title: 'Mapbox',
        description: 'Ashtown'
      }
    }]
  };

//adding markers 
geojson.features.forEach((marker)=>{
    let element = document.createElement('div');
    element.className="marker";
    //adding marker to each feature on the marp
    new mapboxgl.Marker(element)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset:25})
     .setHTML("<h3>"+ marker.properties.title + "</h3><p>" + marker.properties.description + "</p>"))
    .addTo(map);

});