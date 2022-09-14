import  { useCallback, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import styles from './styles.module.css'


interface PropLatLng {
  lat: number;
  lng: number;

}

interface LocationMarkerProps{
  latlng: PropLatLng

  getCoordinates: (latlng: PropLatLng) => void
}


function LocationMarker({latlng, getCoordinates}: LocationMarkerProps) {
  const [position, setPosition] = useState<any>(latlng)
  const map = useMapEvents({
    click(ee) {

      setPosition(ee.latlng)
      getCoordinates(ee.latlng)
      map.locate()
    },

  })



  return position === null || position.lag === 0 ? null : (
    <Marker position={position} >
      <Popup>You are here Teste</Popup>
    </Marker>
  )
}


export function Mapa() {
  const oldPosition = { lat: -28.2272571, lng: -48.7127925 }
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);







  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      if(oldPosition.lat !== 0){
        setInitialPosition([oldPosition.lat, oldPosition.lng]);
      } else {
        setInitialPosition([latitude, longitude]);
      }

    });
  });

const handleGetCoordinates = useCallback((latlng: PropLatLng) => {
      console.log('retorno da coordenadas', latlng)
}, [])

  return (
    <main >
      <h1>Mapa</h1>
      {initialPosition[0] !== 0 && (
      <div className={styles.main}>
      <MapContainer
      center={{ lat: initialPosition[0], lng: initialPosition[1] }}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "460px", width: "100%" }}
      >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <LocationMarker latlng={oldPosition} getCoordinates={handleGetCoordinates}/>


</MapContainer>
</div>
)}
        <div className={styles.btns}>
            <a href="#">Click Me</a>
            <a href="#">Click Me</a>
        </div>
    </main>
  );
}
