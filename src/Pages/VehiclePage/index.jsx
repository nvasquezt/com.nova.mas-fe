import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'src/Components/Button';
import DatesByVehicles from 'src/Components/datesByVehicles';
import MapLogs from 'src/Components/MapLogs';
import { HOME_ROUTE, MAINTENANCE_ROUTE } from 'src/Constants';
import { getVehicleByIdThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';

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
    soatCode,
    insurancePolicy,
    rtmCode,
    vehiclePhone,
    status,
    picVehicle,
  } = selectedVehicle;
  useEffect(() => {
    dispatch(getVehicleByIdThunk(id));
  }, [dispatch, id]);
  return (
    <div>
      <div>
        <h1>Ambulance A-00{id}</h1>
      </div>
      <div>
        <img src={picVehicle} alt="ambulance" />
      </div>
      <div>
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
          <strong>Soat Code:</strong> {soatCode}
          {<br />}
          <strong>Insurance Policy:</strong> {insurancePolicy}
          {<br />}
          <strong>RTM Code:</strong> {rtmCode}
          {<br />}
          <strong>Vehicle Phone:</strong> {vehiclePhone}
          {<br />}
          <strong>Status:</strong> {status}
          {<br />}
        </p>
      </div>
      <div>
        <DatesByVehicles />
      </div>
      <div>
        <MapLogs />
      </div>
      <div>
        <Button type={'button'} name={'Edit this vehicle'} />
        <Button type={'button'} name={'Routes'} />
        <Link to={MAINTENANCE_ROUTE}>
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
