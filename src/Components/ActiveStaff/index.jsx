import React from 'react';
import PropTypes from 'prop-types';

const ActiveStaff = (props) => {
  const { idVehicleFk, name, lastName, jobPosition, picProfile } = props.user;
  return (
    <div className='actStaff'>
      <div className='actStaff__picContainer'>
        <img src={picProfile} alt={name} />
      </div>
      <div className='actStaff__mainTitle'>
        <h3>
          Ambulance Crew # A-0
          {idVehicleFk < 10 ? `0${idVehicleFk}` : `${idVehicleFk}`}
        </h3>
      </div>
      <div className='actStaff__fullName'>
        <h3>{name}</h3> <h3>{lastName}</h3>
      </div>
      <div className='actStaff__jobPosition'>
        <h5>Area: {jobPosition}</h5>
      </div>
    </div>
  );
};

ActiveStaff.propTypes = {
  user: PropTypes.shape({
    idVehicleFk: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobPosition: PropTypes.string.isRequired,
    picProfile: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActiveStaff;
