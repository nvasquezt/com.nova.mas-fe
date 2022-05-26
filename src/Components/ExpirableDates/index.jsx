import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDatesThunk } from 'src/Store/actions';
import './ExpirableDates.scss';

const ExpirableDates = () => {
  const dispatch = useDispatch();
  const allDates = useSelector((state) => state.allDates);
  useEffect(() => {
    dispatch(getAllDatesThunk());
  }, [dispatch]);


  const dateToExpire = (date) => {
    const dateObj = new Date(date);
    const today = new Date();
    const diff = dateObj - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  };
  return (
    <div className="expirableDates">
      <div className="expirableDates__info">
        {allDates.map((date) => (
          <div key={date.dateCode}>
            <div className='expirableDates__info'>
              <p>
                <strong>Ambulance: </strong> {date.idVehicleFk} <br />
                <strong className={dateToExpire(date.soatDate) < 15 ? 'expirableDates__info--expired' : ''}>SOAT Expires in: </strong> {dateToExpire(date.soatDate)} days<br />
                <strong className={dateToExpire(date.insuranceDate) < 15 ? 'expirableDates__info--expired' : ''}>Insurance Expires in: </strong> {dateToExpire(date.insuranceDate)} days <br />
                <strong className={dateToExpire(date.legalRevisionDate) < 15 ? 'expirableDates__info--expired' : ''}>Legal revision Expires in: </strong> {dateToExpire(date.legalRevisionDate)} days<br />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpirableDates;
