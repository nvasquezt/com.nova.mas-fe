import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Annotations from 'src/Components/Annotations';
import Button from 'src/Components/Button';
import { getUserByIdThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import './CrewPage.scss';

const CrewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.userById);

  useEffect(() => {
    dispatch(getUserByIdThunk(id));
  }, [dispatch]);

  const { name, lastName, userPhone, jobPosition, picProfile, email, status } =
    userById;

  return (
    <div className="crewPage">
      <div className="crewPage__title">
        <h1>
          {name} {lastName}
        </h1>
      </div>
      <div className="crewPage__picUserContainer">
        <img className="crewPage__picUserContainer--pic" src={picProfile} alt={name} />
      </div>
      <div className="crewPage__info">
        <p>
          <strong>ID Number:</strong> {id} <br />
          <strong>Job Position:</strong> {jobPosition} <br />
          <strong>Phone Number:</strong> {userPhone} <br />
          <strong>Email:</strong> {email} <br />
          <strong>Status:</strong> {status ? 'Active' : 'Inactive'} <br />
        </p>
      </div>
      <div className="crewPage__annotationsTitle">
        <h1>Annotations</h1>
      </div>
      <div className="crewPage__annotationsContainer">
        <Annotations idUser={id} />
      </div>
      <div className="crewPage__buttonsContainer">
        <Link to={'/home'}>
          <Button type={'button'} name={'Home'} />
        </Link>
        <Link to={`/newannotation/${id}`}>
          <Button type={'button'} name={'Add new annotation'} />
        </Link>
      </div>
    </div>
  );
};

export default CrewPage;
