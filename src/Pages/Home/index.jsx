import React from 'react';
import { Link } from 'react-router-dom';
import ActiveStaff from 'src/Components/ActiveStaff';
import CardVehicle from 'src/Components/CardVehicle';
import ExpirableDates from 'src/Components/ExpirableDates';
import Button from 'src/Components/Button';
import { CREATEVEHICLE_ROUTE } from 'src/Constants';

const Home = () => {
  return (
    <div>
      <div>
        <Link to={'/vehiclepage'}>
          <CardVehicle />
        </Link>
      </div>
      <div>
        <ActiveStaff />
      </div>
      <div>
        <ExpirableDates />
      </div>
      <div>
      <Link to={CREATEVEHICLE_ROUTE}>
          <Button type={'button'} name={'Create'} />
          </Link>
      </div>
    </div>
  );
};

export default Home;
