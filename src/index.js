
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoia21zaG9lbGwiLCJhIjoiY2tmd3E1enRrMGxqdjJ3azB6Z2h2aWQwciJ9.VF-xwJMrBLCTvOH647DTnQ';
let map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v12'
});
