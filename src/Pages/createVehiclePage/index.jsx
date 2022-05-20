import React from 'react';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, VEHICLEPAGE_ROUTE } from 'src/Constants';
import FormCreateVehicle from 'src/Components/FormCreateVehicle';

const CreateVehiclePage = () => {
  return (
    <div>
      <div>
        <h1>Create Vehicle</h1>
      </div>
      <div>
        <FormCreateVehicle />
      </div>
      <div>
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
        <Link to={VEHICLEPAGE_ROUTE}>
          <Button type={'button'} name={'Vehicle detail'} />
        </Link>
      </div>
    </div>
  );
};

export default CreateVehiclePage;
