import React from 'react'

const UploadPicVehicle = () => {
  return (
    <div>
        <div>
            <h1>Upload Image</h1>
        </div>
        <form action="submit">
            <input type="file" name="file" id="file" />
            <input type="submit" value="Update" />
        </form>
    </div>
  )
}

export default UploadPicVehicle