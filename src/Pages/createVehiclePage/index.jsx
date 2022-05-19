import React from 'react';
import UploadPicVehicle from 'src/Components/UploadPicVehicle';
import Input from 'src/Components/Input';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';
import {
    HOME_ROUTE,
    VEHICLEPAGE_ROUTE,
  } from 'src/Constants';

const CreateVehiclePage = () => {
  return (
    <div>
        <div>
            <h1>Create Vehicle</h1>
        </div>
        <div>
            <UploadPicVehicle />
        </div>
        <div>
            <form action="submit">
                <label htmlFor="plate"></label>
                <Input type={'text'} name={'plate'} placeholder={'Placa del vehiculo'} onChange />
                <Button type={'button'} name={'Submit'} />
            </form>
        </div>
        <div>
            <Link to={HOME_ROUTE}>
                <Button type={'button'} name={'Home'} />
            </Link>
            <Link to={VEHICLEPAGE_ROUTE}>
                <Button type={'button'} name={'Vehicle detail'} />
            </Link>
        </div>
    </div>
  )
}

export default CreateVehiclePage