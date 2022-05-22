import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDatesThunk } from 'src/Store/actions';

const ExpirableDates = () => {
  const dispatch = useDispatch();
  const allDates = useSelector((state) => state.allDates);
  useEffect(() => {
    dispatch(getAllDatesThunk());
  }, [dispatch]);

  return (
    <div className='expirableDates'>
      <div className='expirableDates__title'>
        <h1>Soon to expire</h1>
      </div>
      <div className='expirableDates__info'>
        {allDates.map((date) => (
          <div key={date.dateCode}>
            <div className='expirableDates__info'>
              <p>
                <strong>Date code:</strong> {date.dateCode}
                <strong>Ambulance: </strong> {date.idVehicleFk}
                <strong>SOAT: </strong> {date.soatDate}
                <strong>Insurance: </strong> {date.insuranceDate}
                <strong>Legal revision: </strong> {date.legalRevisionDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpirableDates;
