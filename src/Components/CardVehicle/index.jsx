/* eslint-disable react/prop-types */
import React from 'react';

const CardVehicle = (props) => {
  const { picVehicle, id, licensePlate, brand } = props.vehicle;
  return (
    <div>
      <div>
        <img src={picVehicle} alt={`ambulance A-${id}`} />
      </div>
      <div>
        <h1>Ambulance A-0{id < 10 ? `0${id}` : `${id}`}</h1>
        <h5>lincese Plate: {licensePlate}</h5>
        <h5>Brand: {brand}</h5>
      </div>
    </div>
  );
};

export default CardVehicle;
