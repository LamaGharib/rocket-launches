export const addMap = (long, lan) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGFtYTMiLCJhIjoiY2txZ3MzM3J6MTI0bTJ1c2NkOXAwMXpnZiJ9.5kg3kLMUeLH24ikkpuJFlw";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [long, lan],
    zoom: 14,
  });

  const marker = new mapboxgl.Marker().setLngLat([long, lan]);
  marker.addTo(map);
};
