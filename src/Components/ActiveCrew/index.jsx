import React from 'react';
import { Link } from 'react-router-dom';

const ActiveCrew = () => {
  return (
    <div>
      <div>
        <h1>Ambulance Crew # 1</h1>
      </div>
      <Link to={'/crewpage'}>
        <div>
          <h3>Jhon</h3> <h3>Doe</h3>
        </div>
        <div>
          <h5>Role: Driver</h5>
        </div>
      </Link>
    </div>
  );
};

export default ActiveCrew;
