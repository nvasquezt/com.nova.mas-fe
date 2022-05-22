import React from 'react';

const UploadPicVehicle = () => {
  return (
    <div className="uploadPicVehicle">
      <div className="uploadPicVehicle__title">
        <h1>Upload Image</h1>
      </div>
      <div className="uploadPicVehicle__form">
        <form action="submit">
          <input type="file" name="file" id="file" />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UploadPicVehicle;
