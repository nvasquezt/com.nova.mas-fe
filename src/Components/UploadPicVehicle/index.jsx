import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { uploadVehicleImage } from 'src/services/vehicleServices';
import { useSelector, useDispatch } from 'react-redux';
import { getVehicleByIdThunk } from 'src/Store/actions';
import './UploadPicVehicle.scss';


const UploadPicVehicle = () => {
  const id = useParams().id;
  const [image, setImage] = useState(null); 
  const dispatch = useDispatch();
  const selectedVehicle = useSelector(state => state.selectedVehicle);

  useEffect(() => {
    dispatch(getVehicleByIdThunk(id));
  }, [dispatch]);
  
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    await uploadVehicleImage(id, formData);
    window.location.reload();
  }

  return (
    <div className="uploadPicVehicle">
      <div className="uploadPicVehicle__title">
        <h1> 📷 Upload Image</h1>
      </div>
      <div className="uploadPicVehicle__uploadImageContainer">
        <img className='uploadPicVehicle__uploadImageContainer--img' src={selectedVehicle.picVehicle} alt="imageAmbulance" />
      </div>
      <div className="uploadPicVehicle__form">
        <form action="submit" onSubmit={handleSubmit} >
          <input type="file" name="file" id="file" onChange={handleImageChange}/>
          <input type="submit" value="Update"/>
        </form>
      </div>
    </div>
  );
};

export default UploadPicVehicle;
