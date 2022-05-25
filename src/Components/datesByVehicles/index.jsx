import React, { useEffect, useState } from 'react';
import { getDateByIdVehicleThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateDate } from 'src/services/dateServices';
import './DatesByVehicles.scss';
import Button from '../Button';

const DatesByVehicles = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const dateByIdVehicle = useSelector((state) => state.dateByIdVehicle);
  const selectedVehicle = useSelector((state) => state.selectedVehicle);
  const [displayModify, setDisplayModify] = useState(false);
  const [date, setDate] = useState({});
  const handlerEnable = () => {
    setDisplayModify(!displayModify);
  };

  const handleDateChange = (e) => {
    const data = {[e.target.name]: e.target.value+'T23:59:00.461Z'}
    setDate({
      ...date,
      ...data});
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await updateDate(id, date);
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getDateByIdVehicleThunk(id));
  }, [dispatch]);
  const { soatDate, insuranceDate, legalRevisionDate } = dateByIdVehicle;
  const newSoatDate = soatDate ? soatDate.split('T')[0] : '';
  const newInsuranceDate = insuranceDate ? insuranceDate.split('T')[0] : '';
  const newLegalRevisionDate = legalRevisionDate ? legalRevisionDate.split('T')[0] : '';
  const { soatCode, insurancePolicy, rtmCode } = selectedVehicle;
  return (
    <div className="datesByVhehicle">
      <div className="datesByVhehicle__info">
        <div className="datesByVhehicle__info--soat">
          <h3>SOAT Secure Date</h3>
          <p>
            <strong>Code: </strong> {soatCode} <br />
            <strong>Expire: </strong> {newSoatDate} <br />
          </p>
        </div>
        <div className="datesByVhehicle__info--insurance">
          <h3>Insurance Date</h3>
          <p>
            <strong>Code: </strong> {insurancePolicy} <br />
            <strong>Expire: </strong> {newInsuranceDate} <br />
          </p>
        </div>
        <div className="datesByVhehicle__info--legalRevision">
          <h3>Legal revision Date</h3>
          <p>
            <strong>Code: </strong> {rtmCode} <br />
            <strong>Expire: </strong> {newLegalRevisionDate} <br />
          </p>
        </div>
      </div>
      <div className="datesByVhehicle__button">
        <Button type="button" name="Edit Dates" onClick={handlerEnable} />
      </div>
      <form className="datesByVhehicle__modify" onSubmit={handlerSubmit}>
        <div className="datesByVhehicle__input">
          <label
          htmlFor="soatDate"
          className={
            displayModify
              ? 'datesByVhehicle__input--show'
              : 'datesByVhehicle__input--hide'
          }
          ><strong>SOAT Secure Date</strong>
          </label>
          <input
            type="date"
            name="soatDate"
            className={
              displayModify
                ? 'datesByVhehicle__input--show'
                : 'datesByVhehicle__input--hide'
            }
            onChange={handleDateChange}
          />
        </div>
        <div className="datesByVhehicle__input">
          <label
          htmlFor="insuranceDate"
          className={
            displayModify
              ? 'datesByVhehicle__input--show'
              : 'datesByVhehicle__input--hide'
          }
          ><strong>Insurance Date</strong>
          </label>
          <input
            type="date"
            name="insuranceDate"
            className={
              displayModify
                ? 'datesByVhehicle__input--show'
                : 'datesByVhehicle__input--hide'
            }
            onChange={handleDateChange}
          />
        </div>
        <div className="datesByVhehicle__input">
          <label
          htmlFor="legalRevisionDate"
          className={
            displayModify
              ? 'datesByVhehicle__input--show'
              : 'datesByVhehicle__input--hide'
          }
          ><strong>Insurance Date</strong>
          </label>
          <input
            type="date"
            name="legalRevisionDate"
            className={
              displayModify
                ? 'datesByVhehicle__input--show'
                : 'datesByVhehicle__input--hide'
            }
            onChange={handleDateChange}
          />
        </div>
        <div className="datesByVhehicle__button">
          <Button
            type="submit"
            name="Save"
            className={
              displayModify
                ? 'datesByVhehicle__input--show'
                : 'datesByVhehicle__input--hide'
            }
          />
        </div>
      </form>
    </div>
  );
};

export default DatesByVehicles;
