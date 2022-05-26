import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { uploadUserImage } from 'src/services/userServices';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByIdThunk } from 'src/Store/actions';
import './UploadPicUser.scss';

const UploadPicUser = () => {
  const id = useParams().id;
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.userById);

  useEffect(() => {
    dispatch(getUserByIdThunk(id));
  }, [dispatch]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    await uploadUserImage(id, formData);
    window.location.reload();
  };

  return (
    <div className="uploadPicUser">
      <div className="uploadPicUser__title">
        <h1> 📷 Upload Image</h1>
      </div>
      <div className="uploadPicUser__uploadImageContainer">
        <img
          className="uploadPicUser__uploadImageContainer--img"
          src={userById.picProfile}
          alt="imageAmbulance"
        />
      </div>
      <div className="uploadPicUser__form">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleImageChange}
          />
          <input type="submit" value="Update Image" />
        </form>
      </div>
    </div>
  );
};

export default UploadPicUser;
