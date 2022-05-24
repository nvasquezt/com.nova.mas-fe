import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'src/Components/Button';
import DatesByVehicles from 'src/Components/datesByVehicles';
import MapLogs from 'src/Components/MapLogs';
import { HOME_ROUTE } from 'src/Constants';
import { getVehicleByIdThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import './VehiclePage.scss';

const VehiclePage = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const selectedVehicle = useSelector((state) => state.selectedVehicle);
  const {
    licensePlate,
    brand,
    modelAge,
    classCar,
    fuelType,
    cylinder,
    capacity,
    vehiclePhone,
    picVehicle,
  } = selectedVehicle;
  useEffect(() => {
    dispatch(getVehicleByIdThunk(id));
  }, [dispatch, id]);
  return (
    <div className="vehiclePage">
      <div className="vehiclePage__title">
        <h1>🚑  Ambulance A-0{id < 10 ? `0${id}` : `${id}`}</h1>
      </div>
      <div className="vehiclePage__picAmbulance">
        <img className="vehiclePage__picAmbulance--pic" src={picVehicle} alt="ambulance" />
      </div>
      <div className="vehiclePage__info">
        <p>
          <strong>License Plate:</strong> {licensePlate}
          {<br />}
          <strong>Brand:</strong> {brand}
          {<br />}
          <strong>Model Age:</strong> {modelAge}
          {<br />}
          <strong>Class:</strong> {classCar}
          {<br />}
          <strong>Fuel Type:</strong> {fuelType}
          {<br />}
          <strong>Cylinder:</strong> {cylinder}
          {<br />}
          <strong>Capacity:</strong> {capacity}
          {<br />}
          <strong>Vehicle Phone:</strong> {vehiclePhone}
        </p>
      </div>
      <div className="vehiclePage__title">
        <h1>📅  Dates of vehicle A-0{id < 10 ? `0${id}` : `${id}`}</h1>
      </div>
      <div className="vehiclePage__DatesByVehicleContainer">
        <DatesByVehicles />
      </div>
      <div className="vehiclePage__title">
        <h1>📍  Map of vehicle A-0{id < 10 ? `0${id}` : `${id}`}</h1>
      </div>
      <div className="vehiclePage__mapLogsContainer">
        <MapLogs />
      </div>
      <div className="vehiclePage__buttonsContainer">
        <Button type={'button'} name={'Edit this vehicle'} />
        <Button type={'button'} name={'Routes'} />
        <Link to={`/maintenances/${id}`}>
          <Button type={'button'} name={'Maintenances'} />
        </Link>
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default VehiclePage;
