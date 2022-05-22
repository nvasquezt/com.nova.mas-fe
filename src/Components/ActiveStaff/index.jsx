/* eslint-disable react/prop-types */
import React from 'react';

const ActiveStaff = (props) => {
  const { idVehicleFk, name, lastName, jobPosition, picProfile } = props.user;
  return (
    <div>
      <div>
        <img src={picProfile} alt={name} />
      </div>
      <div>
        <h3>
          Ambulance Crew # A-0
          {idVehicleFk < 10 ? `0${idVehicleFk}` : `${idVehicleFk}`}
        </h3>
      </div>
      <div>
        <h3>{name}</h3> <h3>{lastName}</h3>
      </div>
      <div>
        <h5>Area: {jobPosition}</h5>
      </div>
    </div>
  );
};

export default ActiveStaff;
