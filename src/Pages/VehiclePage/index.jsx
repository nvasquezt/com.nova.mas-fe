import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/Components/Button';
import DatesByVehicles from 'src/Components/datesByVehicles';

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
        <div>
          <Button type={'button'} name={'Options'} />
          <Button type={'button'} name={'Create'} />
          <Button type={'button'} name={'Edit'} />
        </div>
        <Button type={'button'} name={'Routes'} />
        <Link to={'/maintenances'}>
          <Button type={'button'} name={'Maintenances'} />
        </Link>
        <Link to={'/home'}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default VehiclePage;
