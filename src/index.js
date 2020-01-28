import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGE5dGE5IiwiYSI6InZCSDEtaW8ifQ.6XJrdNdKWoyuixwX-BG6xQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 14,
  center: [139.75, 35.70],
  // pitchWithRotate: false
});


// 地図の中心位置の変化時の処理
map.on('move', () => {
  console.log('move:', map.getCenter());
});

// 地図の拡大率の変化時の処理
map.on('zoom', () => {
  console.log('zoom:', map.getZoom());
});

// 地図の回転の変化時の処理
map.on('rotate', () => {
  console.log('rotation:', map.getBearing());
});

// 地図の傾きの変化時の処理
map.on('pitch', () => {
  console.log('pitch:', map.getPitch());
  map.setPitch(0);
});

map.on('pitchend', () => {
  map.setPitch(0);
});

map.addControl(new mapboxgl.NavigationControl());
