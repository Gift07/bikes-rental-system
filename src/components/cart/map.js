import React, { useRef, useEffect,useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const access_token = "pk.eyJ1IjoiZ2lmdDA3IiwiYSI6ImNsMWc3ZDJyZTA3NG4zZ3F1cmkwc3NrbmkifQ._T6D4V9QTVQBg3ajYnWiEw"
  mapboxgl.accessToken = access_token

  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRef = useRef(null)

  //MapBox rendered element
  const [lng, setLng] = useState(39.26951);  //Latitude
  const [lat, setLat] = useState(-6.82349);  //Longitude
  const [userLng, setUserLng] = useState(null)
  const [userLat,setUserLat] = useState(null)
  const [zoom, setZoom] = useState(13);    //Zoom Level
  const [coords,setCoords] = useState()
  const start = [lng, lat];

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      minZoom: 11,
      maxZoom:15
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    // route();

  }, [map.current]);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     if (position) {
  //       setUserLat(position.coords.latitude)
  //       setUserLng(position.coords.longitude)
  //      console.log(position) 
  //     }
  //   });
  // }, [])
  // useEffect(() => {
  //   var marker = new mapboxgl.Marker().setLngLat([userLng,userLat]).addTo(map)
  // },[])

  return (
          <div
              ref={mapContainer}
              className="w-full h-72 md:h-128 lg:h-128 rounded-t-md  bg-yellow-300" />
  )
}

export default Map