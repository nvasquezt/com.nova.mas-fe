import React from 'react';
import PropTypes from 'prop-types';
import './ActiveStaff.scss';

const ActiveStaff = (props) => {
  const { idVehicleFk, name, lastName, jobPosition, picProfile } = props.user;
  return (
    <div className="actStaff">
      <div className="actStaff__picContainer">
        <img className="actStaff__picContainer--pic" src={picProfile} alt={name} />
      </div>
      <div className="actStaff__text">
      <h2>Ambulance Crew: A-0
          {idVehicleFk < 10 ? `0${idVehicleFk}` : `${idVehicleFk}`}</h2>
      <p>
        <strong>Name:</strong> {name} {lastName} <br />
        <strong>Job Position:</strong> {jobPosition}
      </p>
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
