import React from 'react';
import PropTypes from 'prop-types';
import './CardVehicle.scss';

const CardVehicle = (props) => {
  const { picVehicle, id, licensePlate, brand } = props.vehicle;
  return (
    <div className="cardVehicle">
      <div className="cardVehicle__picContainer">
        <img className="cardVehicle__picContainer--pic" src={picVehicle} alt={`ambulance A-${id}`} />
      </div>
      <div className="cardVehicle__info">
        <h1>Ambulance A-0{id < 10 ? `0${id}` : `${id}`}</h1>
        <p>
          <strong>License Plate:</strong> {licensePlate} <br />
          <strong>Brand:</strong> {brand}
        </p>
      </div>
    </div>
  );
};

CardVehicle.propTypes = {
  vehicle: PropTypes.shape({
    picVehicle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    licensePlate: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardVehicle;
