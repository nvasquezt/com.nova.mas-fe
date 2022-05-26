import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByIdThunk } from 'src/Store/actions';
import { updateUser } from 'src/services/userServices';
import Button from 'src/Components/Button';
import './EditStaff.scss';
import UploadPicUser from 'src/Components/UploadPicUser';

const EditStaff = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const userById = useSelector((state) => state.userById);
    const [formUser, setFormUser] = useState({
        idVehicleFk: userById.idVehicleFk,
        name: userById.name,
        lastName: userById.lastName,
        userPhone: userById.userPhone,
        email: userById.email,
        jobPosition: userById.jobPosition,
    });
    const [activateidVehicle, setActivateidVehicle] = useState(true);
    const [activateName, setActivateName] = useState(true);
    const [activateLastName, setActivateLastName] = useState(true);
    const [activateUserPhone, setActivateUserPhone] = useState(true);
    const [activateEmail, setActivateEmail] = useState(true);
    const [activateJobPosition, setActivateJobPosition] = useState(true);

    const handleChange = (e) => {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleravtVehicle = () => {
        setActivateidVehicle(!activateidVehicle);
    };

    const handleravtName = () => {
        setActivateName(!activateName);
    };

    const handleravtLastName = () => {
        setActivateLastName(!activateLastName);
    };

    const handleravtUserPhone = () => {
        setActivateUserPhone(!activateUserPhone);
    };

    const handleravtEmail = () => {
        setActivateEmail(!activateEmail);
    };

    const handleravtJobPosition = () => {
        setActivateJobPosition(!activateJobPosition);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(id, formUser);
        window.location.href = '/home';
    };

    useEffect(() => {
        dispatch(getUserByIdThunk(id));
    }, [dispatch]);


  return (
    <div className="editStaff">
        <div className="editStaff__uploadImageContainer">
        <UploadPicUser />
      </div>
        <div className="editStaff__title">
            <h1>Edit Staff</h1>
        </div>

        <form action="submit" onSubmit={handleSubmit}>
            <div className="editStaff__form">
                <div className="editStaff__form__input">
                    <input type="checkbox" onChange={handleravtVehicle} />
                    <label htmlFor="idVehicleFk">idVehicleFk</label>
                    <input
                        type="number"
                        name="idVehicleFk"
                        onChange={handleChange}
                        defaultValue={userById.idVehicleFk}
                        disabled={activateidVehicle}
                    />
                </div>
            <div className="editStaff__form__input">
                <input type="checkbox" onChange={handleravtName} />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    defaultValue={userById.name}
                    disabled={activateName}
                />
            </div>
            <div className="editStaff__form__input">
                <input type="checkbox" onChange={handleravtLastName} />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    defaultValue={userById.lastName}
                    disabled={activateLastName}
                />
            </div>
            <div className="editStaff__form__input">
                <input type="checkbox" onChange={handleravtUserPhone} />
                <label htmlFor="userPhone">User Phone</label>
                <input
                    type="text"
                    name="userPhone"
                    onChange={handleChange}
                    defaultValue={userById.userPhone}
                    disabled={activateUserPhone}
                />
            </div>
            <div className="editStaff__form__input">
                <input type="checkbox" onChange={handleravtEmail} />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    defaultValue={userById.email}
                    disabled={activateEmail}
                />
            </div>
            <div className="editStaff__form__input">
                <input type="checkbox" onChange={handleravtJobPosition} />
                <label htmlFor="jobPosition">Job Position</label>
                <input
                    type="text"
                    name="jobPosition"
                    onChange={handleChange}
                    defaultValue={userById.jobPosition}
                    disabled={activateJobPosition}
                />
            </div>
            </div>
            <div className="editStaff__form__button">
                <Button type="submit" name="Submit" />
                <Link to="/home">
                    <Button type="button" name="Cancel" />
                </Link>
            </div>
        </form>
    </div>
    );
};


export default EditStaff;
