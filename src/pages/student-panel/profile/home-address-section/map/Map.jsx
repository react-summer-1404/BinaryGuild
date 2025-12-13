import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./ChooseAddress.css"
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();
    const position = [36.5971688, 53.0645213]
  return (
    <div className='mr-4 w-11/12'>
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <p className='font-persian'>{t("YourCurrentLocation")}</p>
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default Map