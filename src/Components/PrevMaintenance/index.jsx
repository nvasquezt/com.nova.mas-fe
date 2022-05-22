import React, { useEffect } from 'react';
import { getPrevMaintenanceThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const PrevMaintenance = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const prevMaintenance = useSelector((state) => state.prevMaintenance);
  useEffect(() => {
    dispatch(getPrevMaintenanceThunk(id));
  }, [dispatch]);
  return (
    <div className="prevMaintenance">
      <div className="prevMaintenance__title">
        <h1>
          Preventive Maintenances of ambulance A-0{id < 10 ? `0${id}` : `${id}`}
        </h1>
      </div>
      {prevMaintenance > 0 ? (
        prevMaintenance.map((item) => (
          <div
            key={item.idMaintenance + 'prev'}
            className="prevMaintenance__info"
          >
            <div className="prevMaintenance__info--each">
              <p>
                <strong>Id Maintenance:</strong> {item.idMaintenance}
                <strong>Date: </strong> {item.datePrevMaint}
                <br />
                <strong>Description: </strong> {item.description}
                <br />
              </p>
            </div>
            <div className="prevMaintenance__info--picCommInv">
              <img src={item.commercialInvoice} alt="commercialInvoice" />
            </div>
          </div>
        ))
      ) : (
        <p>No Preventive Maintenances</p>
      )}
    </div>
  );
};

export default PrevMaintenance;
