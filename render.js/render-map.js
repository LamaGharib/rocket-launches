export const addMap = () =>{
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFtYTMiLCJhIjoiY2txZ3MzM3J6MTI0bTJ1c2NkOXAwMXpnZiJ9.5kg3kLMUeLH24ikkpuJFlw';
    
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[f.pad.longitude,f.pad.latitude],
     zoom:14
  });

    const marker = new mapboxgl.Marker().setLngLat([f.pad.longitude,f.pad.latitude]);
    marker.addTo(map)
};