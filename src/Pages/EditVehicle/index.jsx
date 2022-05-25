import React/*, { useState, useEffect } */ from 'react'
// import { useParams } from 'react-router-dom'
import UploadPicVehicle from '../../Components/UploadPicVehicle'
// import { useDispatch, useSelector } from 'react-redux';
// import { getVehicleByIdThunk } from 'src/Store/actions';

const EditVehicle = () => {
    // const id = useParams().id
    // const dispatch = useDispatch()
    // const selectedVehicle = useSelector(state => state.selectedVehicle)



    
    return (
        <div className="editVehicle">
            <div className="editVehicle__uploadImageContainer">
                <UploadPicVehicle />    
            </div>
        </div>
    )
}


export default EditVehicle
