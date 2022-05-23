import React from 'react';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from 'src/Constants';
import FormCreateVehicle from 'src/Components/FormCreateVehicle';
import './CreateVehiclePage.scss';

const CreateVehicle = () => {
  return (
    <div className="createVehiclePage">
      <div className="createVehiclePage__title">
        <h1>Create Vehicle</h1>
      </div>
      <div className="createVehiclePage__formCointainer">
        <FormCreateVehicle />
      </div>
      <div className="createVehiclePage__buttonsContainer">
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CreateVehicle;
