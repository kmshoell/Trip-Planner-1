
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoia21zaG9lbGwiLCJhIjoiY2tmd3NqZHljMTY5cjJ4bXRnOGVtbDkzayJ9.q3ntiPlClNLtB2tMRc9nOA';
let map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v12'
});
