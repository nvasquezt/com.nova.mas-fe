import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import './MapLogs.scss';
import { getTrackLogByIdThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MapLogs = () => {
  const dispatch = useDispatch();
  const trackLogById = useSelector((state) => state.trackLogById);
  const id = useParams().id;
  const positions = [];
  useEffect(() => {
    dispatch(getTrackLogByIdThunk(id));
  }, [dispatch]);

  trackLogById.forEach((element) => {
    positions.push({
      date: element.date,
      location: [Number(element.latitude), Number(element.longitude)],
    });
  });
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
        zoom={13}
        style={{ height: '70vh', width: '90vw' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((position, index) => (
          <Marker position={position.location} key={index} icon={icon}>
            <Popup>
              <strong>⌚Date of Location</strong>
              <p>{position.date}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapLogs;
