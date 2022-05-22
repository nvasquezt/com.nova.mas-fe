import React, { useEffect } from 'react';
import { getDateByIdVehicleThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DatesByVehicles = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const dateByIdVehicle = useSelector((state) => state.dateByIdVehicle);
  const selectedVehicle = useSelector((state) => state.selectedVehicle);
  useEffect(() => {
    dispatch(getDateByIdVehicleThunk(id));
  }, [dispatch]);
  const { soatDate, insuranceDate, legalRevisionDate } = dateByIdVehicle;
  const { soatCode, insurancePolicy, rtmCode } = selectedVehicle;
  return (
    <div>
      <div>
        <h1>Dates of vehicle A-0{id < 10 ? `0${id}` : `${id}`}</h1>
      </div>
      <div>
        <h3>SOAT Secure Date</h3>
        <p>
          <strong>Code: </strong> {soatCode} <br />
          <strong>Expire Date: </strong> {soatDate} <br />
        </p>

        <h3>Insurance Date</h3>
        <p>
          <strong>Code: </strong> {insurancePolicy} <br />
          <strong>Expire Date: </strong> {insuranceDate} <br />
        </p>

        <h3>Legal revision Date</h3>
        <p>
          <strong>Code: </strong> {rtmCode} <br />
          <strong>Expire Date: </strong> {legalRevisionDate} <br />
        </p>
      </div>
    </div>
  );
};

export default DatesByVehicles;
