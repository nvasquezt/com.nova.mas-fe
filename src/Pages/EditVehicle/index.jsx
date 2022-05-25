import React from 'react'
import { useParams } from 'react-router-dom'
import UploadPicVehicle from '../../Components/UploadPicVehicle'

const EditVehicle = () => {
    const id = useParams().id
    console.log(id);
  return (
    <div className="editVehicle">
        <div className="editVehicle__title">
            <h1>Edit Vehicle</h1>
        </div>
        <div className="editVehicle__imageContainer">
            <UploadPicVehicle />
        </div>
        <div className="editVehicle__options">
            <input type="checkbox" name="option" id="option1" />
            <label htmlFor="option1">Option 1</label>
            <input type="checkbox" name="option" id="option2" />
            <label htmlFor="option2">Option 2</label>
            <input type="checkbox" name="option" id="option3" />
            <label htmlFor="option3">Option 3</label>
        </div>
        <div className="editVehicle__submit">
            <button>Submit</button>
        </div>
    </div>
  )
}

export default EditVehicle