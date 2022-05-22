import React,{ useEffect } from 'react';
import { getCtvMaintenanceThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CtvMaintenance = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const ctvMaintenance = useSelector(state => state.ctvMaintenance);
  useEffect(() => {
    dispatch(getCtvMaintenanceThunk(id));
  }, [dispatch]);
  return (
    <div className='ctvMaint'>
      <div className='ctvMaint__title'>
        <h1>Corrective Maintenances of ambulance A-0{id < 10 ? `0${id}` : `${id}`}</h1>
      </div>
      {ctvMaintenance > 0 ? (ctvMaintenance.map((item) => (
        <div key={item.idCorrective+'ctv'} className='ctvMaint__info'>
        <div className='ctvMaint__info'>
          <p>
            <strong>Id Corrective:</strong> {item.idCorrective}
            <strong>Date: </strong> {item.dateCtvMaint}
            <br />
            <strong>Description: </strong> {item.description} <br />
          </p>
        </div>
        <div className='ctvMaint__picEvidences'>
          <img src={item.picEvidence} alt="Pic Evidences" />
        </div>
        <div className='ctvMaint__picCommercialInv'>
          <img src={item.commercialInvoice} alt="commercialInvoice" />
        </div>
        </div>))) : <p>No Corrective Maintenances</p>}
      
    </div>
  );
};

export default CtvMaintenance;
