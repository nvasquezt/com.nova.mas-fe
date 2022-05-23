import React, { useEffect } from 'react';
import { getSpecMaintenanceThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SpecMaintenance.scss';

const SpecMaintenance = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const specMaintenance = useSelector((state) => state.specMaintenance);
  useEffect(() => {
    dispatch(getSpecMaintenanceThunk(id));
  }, [dispatch]);

  return (
    <div className="specMaintenance">
      <div className="specMaintenance__title">
        <h1>
          Especific Maintenances of ambulance A-0{id < 10 ? `0${id}` : `${id}`}
        </h1>
      </div>
      {specMaintenance > 0 ? (
        specMaintenance.map((item) => (
          <div key={item.idSpecific + 'spec'} className="specMaintenance__info">
            <div className="specMaintenance__info--each">
              <p>
                <strong>Id Specific:</strong> {item.idSpecific}
                <strong>Date: </strong> {item.dateSpecMaint}
                <br />
                <strong>Description: </strong> {item.description} <br />
              </p>
            </div>
            <div className="specMaintenance__info--picEvidences">
              <img src={item.picEvidence} alt="Evidences" />
            </div>
            <div className="specMaintenance__info--picInvoices">
              <img src={item.commercialInvoice} alt="commercialInvoice" />
            </div>
          </div>
        ))
      ) : (
        <p>No Especific Maintenances</p>
      )}
    </div>
  );
};

export default SpecMaintenance;
