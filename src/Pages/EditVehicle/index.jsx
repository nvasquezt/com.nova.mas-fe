import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UploadPicVehicle from '../../Components/UploadPicVehicle';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleByIdThunk } from 'src/Store/actions';
import { updateVehicle } from 'src/services/vehicleServices';
import Button from 'src/Components/Button';
import './EditVehicle.scss';

const EditVehicle = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const selectedVehicle = useSelector((state) => state.selectedVehicle);
  const [formVehicle, setFormVehicle] = useState({
    licensePlate: selectedVehicle.licensePlate,
    brand: selectedVehicle.brand,
    modelAge: selectedVehicle.modelAge,
    classCar: selectedVehicle.classCar,
    fuelType: selectedVehicle.fuelType,
    cylinder: selectedVehicle.cylinder,
    capacity: selectedVehicle.capacity,
    soatCode: selectedVehicle.soatCode,
    rtmCode: selectedVehicle.rtmCode,
    insurancePolicy: selectedVehicle.insurancePolicy,
    vehiclePhone: selectedVehicle.vehiclePhone,
  });
  const [activateLicense, setActivateLicense] = useState(true);
  const [activateBrand, setActivateBrand] = useState(true);
  const [activateModelAge, setActivateModelAge] = useState(true);
  const [activateclassCar, setActivateclassCar] = useState(true);
  const [activatefuelType, setActivatefuelType] = useState(true);
  const [activatecylinder, setActivatecylinder] = useState(true);
  const [activateCapacity, setActivateCapacity] = useState(true);
  const [activatesoatCode, setActivatesoatCode] = useState(true);
  const [activatertmCode, setActivatertmCode] = useState(true);
  const [activateinsurancePolicy, setActivateinsurancePolicy] = useState(true);
  const [activatevehiclePhone, setActivatevehiclePhone] = useState(true);

  const handleChange = (e) => {
    setFormVehicle({
      ...formVehicle,
      [e.target.name]: e.target.value,
    });
  };
  const handleractivateLicense = () => {
    setActivateLicense(!activateLicense);
  };
  const handleractivateBrand = () => {
    setActivateBrand(!activateBrand);
  };
  const handleractivateModelAge = () => {
    setActivateModelAge(!activateModelAge);
  };
  const handleractivateclassCar = () => {
    setActivateclassCar(!activateclassCar);
  };
  const handleractivatefuelType = () => {
    setActivatefuelType(!activatefuelType);
  };
  const handleractivatecylinder = () => {
    setActivatecylinder(!activatecylinder);
  };
  const handleractivateCapacity = () => {
    setActivateCapacity(!activateCapacity);
  };
  const handleractivatesoatCode = () => {
    setActivatesoatCode(!activatesoatCode);
  };
  const handleractivatertmCode = () => {
    setActivatertmCode(!activatertmCode);
  };
  const handleractivateinsurancePolicy = () => {
    setActivateinsurancePolicy(!activateinsurancePolicy);
  };
  const handleractivatevehiclePhone = () => {
    setActivatevehiclePhone(!activatevehiclePhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVehicle(id, formVehicle);
    window.location.href = '/home';
  };

  useEffect(() => {
    dispatch(getVehicleByIdThunk(id));
  }, [dispatch]);

  return (
    <div className="editVehicle">
      <div className="editVehicle__uploadImageContainer">
        <UploadPicVehicle />
      </div>
      <div className="editVehicle__formTitle">
        <h1>🚑 Edit Vehicle</h1>
      </div>

      <form action="submit" onSubmit={handleSubmit}>
        <div className="editVehicle__form">
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateLicense} />
            <label htmlFor="licensePlate">License Plate</label>
            <input
              type="text"
              name="licensePlate"
              onChange={handleChange}
              defaultValue={selectedVehicle.licensePlate}
              disabled={activateLicense}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateBrand} />
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              defaultValue={selectedVehicle.brand}
              disabled={activateBrand}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateModelAge} />
            <label htmlFor="modelAge">Model Age</label>
            <input
              type="text"
              name="modelAge"
              onChange={handleChange}
              defaultValue={selectedVehicle.modelAge}
              disabled={activateModelAge}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateclassCar} />
            <label htmlFor="classCar">Class Car</label>
            <input
              type="text"
              name="classCar"
              onChange={handleChange}
              defaultValue={selectedVehicle.classCar}
              disabled={activateclassCar}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivatefuelType} />
            <label htmlFor="fuelType">Fuel Type</label>
            <input
              type="text"
              name="fuelType"
              onChange={handleChange}
              defaultValue={selectedVehicle.fuelType}
              disabled={activatefuelType}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivatecylinder} />
            <label htmlFor="cylinder">Cylinder</label>
            <input
              type="text"
              name="cylinder"
              onChange={handleChange}
              defaultValue={selectedVehicle.cylinder}
              disabled={activatecylinder}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateCapacity} />
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              name="capacity"
              onChange={handleChange}
              defaultValue={selectedVehicle.capacity}
              disabled={activateCapacity}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivatesoatCode} />
            <label htmlFor="soatCode">Soat Code</label>
            <input
              type="text"
              name="soatCode"
              onChange={handleChange}
              defaultValue={selectedVehicle.soatCode}
              disabled={activatesoatCode}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivatertmCode} />
            <label htmlFor="rtmCode">Rtm Code</label>
            <input
              type="text"
              name="rtmCode"
              onChange={handleChange}
              defaultValue={selectedVehicle.rtmCode}
              disabled={activatertmCode}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivateinsurancePolicy} />
            <label htmlFor="insurancePolicy">Insurance Policy</label>
            <input
              type="text"
              name="insurancePolicy"
              onChange={handleChange}
              defaultValue={selectedVehicle.insurancePolicy}
              disabled={activateinsurancePolicy}
            />
          </div>
          <div className="editVehicle__form__inputs">
            <input type="checkbox" onChange={handleractivatevehiclePhone} />
            <label htmlFor="vehiclePhone">Vehicle Phone</label>
            <input
              type="text"
              name="vehiclePhone"
              onChange={handleChange}
              defaultValue={selectedVehicle.vehiclePhone}
              disabled={activatevehiclePhone}
            />
          </div>
        </div>
        <div className="editVehicle__form__buttons">
          <Link to={`/vehiclepage/${id}`}>
            <Button type={'button'} name={'Vehicle detail'} />
          </Link>
          <Button type="submit" name="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditVehicle;
