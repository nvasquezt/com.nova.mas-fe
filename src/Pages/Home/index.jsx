import React from 'react';
import { Link } from 'react-router-dom';
import ActiveCrew from 'src/Components/ActiveCrew';
import CardVehicle from 'src/Components/CardVehicle';
import ExpirableDates from 'src/Components/ExpirableDates';

const Home = () => {
  return (
    <div>
      <div>
        <Link to={'/vehiclepage'}>
          <CardVehicle />
        </Link>
      </div>
      <div>
        <ActiveCrew />
      </div>
      <div>
        <ExpirableDates />
      </div>
    </div>
  );
};

export default Home;
