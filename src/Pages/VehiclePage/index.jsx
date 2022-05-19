import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/Components/Button';
import DatesByVehicles from 'src/Components/datesByVehicles';
import MapLogs from 'src/Components/MapLogs';
import { HOME_ROUTE, MAINTENANCE_ROUTE } from 'src/Constants';

const VehiclePage = () => {
  return (
    <div>
      <div>
        <h1>Ambulance A-001(ID MOVIL)</h1>
      </div>
      <div>
        <img
          src="https://img.medicalexpo.es/images_me/photo-g/126411-15466232.webp"
          alt="ambulance"
        />
      </div>
      <div>
        <p>
          placa, marca, modelo, clase, tipo combulstible, cilindraje, capacidad,
          estatus
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
