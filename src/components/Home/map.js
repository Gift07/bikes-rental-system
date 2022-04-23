import React, { useRef, useEffect,useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { fetchUserLocation } from '../../store/actions/map';
import { useDispatch, useSelector } from 'react-redux';
import "../../layout.css"

const Map = () => {
  const access_token = "pk.eyJ1IjoiZ2lmdDA3IiwiYSI6ImNsMWc3ZDJyZTA3NG4zZ3F1cmkwc3NrbmkifQ._T6D4V9QTVQBg3ajYnWiEw"
  mapboxgl.accessToken = access_token
  const dispatch = useDispatch()
  const {long,lat} = useSelector(state => state.map)

  const mapContainer = useRef(null);

  //MapBox rendered element
  const [lng, setLng] = useState(39.26951);  //Latitude
  const [lati, setLat] = useState(-6.82349);  //Longitude
  const [userLng, setUserLng] = useState(null)
  const [userLat, setUserLat] = useState(null)
  const [zoom, setZoom] = useState(13);    //Zoom Level
  const [coords, setCoords] = useState()
  const start = [lng, lat];
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lati],
      zoom: zoom,
    });
  //  add markers
  const el = document.createElement('div');
  el.className = 'marker';
    new mapboxgl.Marker(el).setLngLat([long,lat]).addTo(map)  

  }, []);

  useEffect(() => {
    dispatch(fetchUserLocation())
  }, [])
  return (
    <div
      ref={mapContainer}
      className={`w-11/12 h-128 lg:h-96 rounded-md ml-4 mt-4 bg-yellow-300`} />
  )
}

export default Map