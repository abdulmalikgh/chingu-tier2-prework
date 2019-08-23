mapboxgl.accessToken = 'pk.eyJ1IjoibGF3aXgxMCIsImEiOiJjamJlOGE1bmcyZ2V5MzNtcmlyaWRzcDZlIn0.ZRQ73zzVxwcADIPvsqB6mg';

let map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center:[-1.615800,6.695070],
    zoom:13
});
//adding marker attach empty div to each point in your jeoJson point
//so you have to style the markers before adding the points
let  geojson = [
  {
    name: "Ofori Kurom",
    coordinates:[-1.591188,6.684993]
  },
  {
    name:"Nhyiaeso",
    coordinates: [-1.622760,6.677832]
  },
  {
  name:"Airpot Road",
  coordinates: [-1.617956,6.701360]
  },
  {
   name:"Ashtown",
   coordinates: [-1.624819,6.705111] 
  },
  {
    name:"Dechemso",
    coordinates: [-1.602856,6.709202]
  }
];
//adding markers 
const list = document.createElement('ul');
list.className ='searchList';
const container = document.querySelector('#sidebar');
const currentMarker = [];
const input = document.querySelector('#search');

geojson.forEach((location)=>{
   const marker = new mapboxgl.Marker()
    .setLngLat([location.coordinates[0],location.coordinates[1]])
    .setPopup(new mapboxgl.Popup({offset:25})
     .setHTML("<h1>"+ location.name + "</h1>"))
    .addTo(map);
    location.marker = marker;
    currentMarker.push(marker);
    location.listItem = document.createElement('li');
    location.listItem.className="searchListItem";
    location.listItem.id=location.name;
    list.appendChild(location.listItem);
    container.appendChild(list);
    location.listItem.textContent = location.name;
});

let searchLocation = ()=>{
  geojson.forEach(location =>{
    location.marker.remove();
    let locations = document.querySelector('li');
    if(locations) locations.remove();
  });

  if(input.value.trim() === "") {
    geojson.forEach(location=>{
      location.marker.addTo(map);
      list.appendChild(location.listItem);
      container.appendChild(list)
    })
  }  
 let find = new RegExp(`${input.value}`,'gi');
 geojson.forEach(location=>{
   if(location.name.search(find) !== -1){
     location.marker.addTo(map);
     list.appendChild(location.listItem);
     container.appendChild(list);
   }
 })
};
// menubar click event;
let toggleMenuBar =()=>{
  const sideBar = document.querySelector('#sidebar');
  if(window.getComputedStyle(sideBar).display == 'block'){
    sideBar.style.display = 'none';
  }else{
    sideBar.style.display = 'block'
  }
  
};
document.querySelector('#sidebar-btn').addEventListener('click',toggleMenuBar,false);
document.querySelector('#search').addEventListener('keydown',searchLocation,false);


