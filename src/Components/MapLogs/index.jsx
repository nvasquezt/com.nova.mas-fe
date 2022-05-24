import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import './MapLogs.scss';

const MapLogs = () => {
  const position = [[4.684335, -74.113644], [4.684335, -74.123644], [4.684335, -74.133644]];
  const center = [4.684335, -74.113644];
  const icon = new Icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="mapLogs">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: '70vh', width: '49vw' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {position.map((position, index) => (
            <Marker position={position} key={index} icon={icon}>
                <Popup>
                    <strong>⌚Hora y fecha</strong>        
                    <p>{position}</p>
                </Popup>
            </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapLogs;
