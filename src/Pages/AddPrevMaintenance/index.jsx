import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addMaintenanceService } from 'src/services/maintenancesServices';
import './AddPrevMaintenance.scss';

const AddPrevMaintenance = () => {
  const id = useParams().id;
  const invoice =
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/a2ad94ee-ef0d-4701-8d8d-ae237898ed19.png';
  const date = new Date();
  const [data, setData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      commercialInvoice: invoice,
      idVehicleFk: Number(id),
      datePrevMaint: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await addMaintenanceService(data);
    if (response.message === 'Error while adding PrevMaint') {
      console.log(response.message);
    } else {
      window.location.href = `/maintenances/${id}`;
    }
  };
  return (
    <div className="addPrevMaintenance">
      <div className="addPrevMaintenance__title">
        <h1>
          🧰 AddPrevMaintenance to Ambulance A-0{id < 10 ? `0${id}` : `${id}`}
        </h1>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="addPrevMaintenance__form">
          <div className="addPrevMaintenance__data">
            <label htmlFor="description"></label>
            <textarea
              name="description"
              id="description"
              cols="100"
              rows="10"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="addPrevMaintenance__button">
          <Link to={`/vehiclepage/${id}`}>
            <button type="button" name="Cancel">
              Cancel
            </button>
          </Link>
          <button type="submit" name="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPrevMaintenance;
