import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Annotations from 'src/Components/Annotations';
import Button from 'src/Components/Button';
import { getUserByIdThunk } from 'src/Store/actions';
import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      <div>
        <img src={picProfile} alt={name} />
      </div>
      <div>
        <h1>
          {name} {lastName}
        </h1>
      </div>
      <div>
        <p>
          <strong>ID Number:</strong> {id} <br />
          <strong>Job Position:</strong> {jobPosition} <br />
          <strong>Phone Number:</strong> {userPhone} <br />
          <strong>Email:</strong> {email} <br />
          <strong>Status:</strong> {status ? 'Active' : 'Inactive'} <br />
        </p>
      </div>
      <div>
        <Annotations idUser={id} />
      </div>
      <div>
        <Link to={'/home'}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CrewPage;
