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
  

  // const locate = () => {
  //   map.current.addControl(
  //     new mapboxgl.GeolocateControl({
  //       positionOptions: {
  //         enableHighAccuracy: true,
  //       },
  //       // When active the map will receive updates to the device's location as it changes.
  //       trackUserLocation: true,
  //       style: {
  //         right: 10,
  //         top: 10
  //       },
  //       position: 'bottom-left',
  //       // Draw an arrow next to the location dot to indicate which direction the device is heading.
  //       showUserHeading: true
  //     })
  //   );
  // }
  // async function getRoute(end) {
  //       const query = await fetch(
  //   `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
  //         { method: 'GET' }
  //       );

  //       const json = await query.json();
  //       const data = json.routes[0];
  //   const route = data.geometry.coordinates;
  //       const geojson = {
  //         type: 'Feature',
  //         properties: {},
  //         geometry: {
  //           type: 'LineString',
  //           coordinates: route
  //         }
  //       };
  //       if (map.current.getLayer('end')) {
  //         map.current.getSource('end').setData(end);
  //       } else {
  //         map.current.addLayer({
  //           id: 'end',
  //           type: 'circle',
  //           source: {
  //             type: 'geojson',
  //             data: {
  //               type: 'FeatureCollection',
  //               features: [{
  //                 type: 'Feature',
  //                 properties: {},
  //                 geometry: {
  //                   type: 'Point',
  //                   coordinates: coords
  //                 }
  //               }]
  //             }
  //           },
  //           paint: {
  //             'circle-radius': 10,
  //             'circle-color': '#f30'
  //           }
  //         });
  //       }
  //     }

  //   const route = () => {
  //     locate();
  //     map.current.on('load', () => {
  //       map.current.addLayer({
  //         id: 'point',
  //         type: 'circle',
  //         source: {
  //           type: 'geojson',
  //           data: {
  //             type: 'FeatureCollection',
  //             features: [{
  //               type: 'Feature',
  //               properties: {},
  //               geometry: {
  //                 type: 'Point',
  //                 coordinates: start
  //               }
  //             }]
  //           }
  //         },
  //         paint: {
  //           'circle-radius': 10,
  //           'circle-color': '#3887be'
  //         }
  //       });
  //     });
  // }
  // map.current.on('click', (event) => {
  //   const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  //   const end = {
  //     type: 'FeatureCollection',
  //     features: [{
  //       type: 'Feature',
  //       properties: {},
  //       geometry: {
  //         type: 'Point',
  //         coordinates: coords
  //       }
  //     }]
  //   };
  //     getRoute(coords);
  //   });
  
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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        setUserLat(position.coords.latitude)
        setUserLng(position.coords.longitude)
       console.log(position) 
      }
    });
  }, [])
  // useEffect(() => {
  //   var marker = new mapboxgl.Marker().setLngLat([userLng,userLat]).addTo(map)
  // },[])

  return (
        <div className="w-full py-3 flex items-center justify-center">
            <div ref={mapContainer}  className="w-10/12 h-96 rounded-md bg-yellow-300 mt-10"/>
        </div>
  )
}

export default Map