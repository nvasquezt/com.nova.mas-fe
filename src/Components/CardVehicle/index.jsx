import React from 'react';
import PropTypes from 'prop-types';

const CardVehicle = (props) => {
  const { picVehicle, id, licensePlate, brand } = props.vehicle;
  return (
    <div className='cardVehicle'>
      <div className='cardVehicle__picContainer'>
        <img src={picVehicle} alt={`ambulance A-${id}`} />
      </div>
      <div className='cardVehicle__info'>
        <h1>Ambulance A-0{id < 10 ? `0${id}` : `${id}`}</h1>
        <h5>lincese Plate: {licensePlate}</h5>
        <h5>Brand: {brand}</h5>
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
