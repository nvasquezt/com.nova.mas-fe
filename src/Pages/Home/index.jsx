import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ActiveStaff from 'src/Components/ActiveStaff';
import CardVehicle from 'src/Components/CardVehicle';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVehiclesThunk, getAllUsersThunk } from 'src/Store/actions';
import ExpirableDates from 'src/Components/ExpirableDates';
import Button from 'src/Components/Button';
import { CREATEUSER_ROUTE, CREATEVEHICLE_ROUTE } from 'src/Constants';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const allVehicles = useSelector((state) => state.allVehicles);
  const allUsers = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getAllVehiclesThunk());
    dispatch(getAllUsersThunk());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home__activeVehicles">
        <div className="home__activeVehicles--title">
          <h1>Active Vehicles</h1>
        </div>
        <div className="home__activeVehicles--container">
          {allVehicles.slice(1).map((vehicle) => (
            vehicle.id && (
            <Link key={vehicle.id} to={`/vehiclepage/${vehicle.id}`}>
              <CardVehicle key={vehicle.id} vehicle={vehicle} />
            </Link>
          )))}
        </div>
      </div>
      <div className="home__activeStaff">
        <div className="home__activeStaff--title">
          <h1>Active Staff</h1>
        </div>
        <div className="home__activeStaff--container">
          {allUsers.slice(1).map((user) => (
            <Link key={user.idUser} to={`/crewpage/${user.idUser}`}>
              <ActiveStaff key={user.idUser} user={user} />
            </Link>
          ))}
        </div>
      </div>
      <div className="home__expirableDates">
        <ExpirableDates />
      </div>
      <div className="home__buttonsContainer">
        <Link to={CREATEVEHICLE_ROUTE}>
          <Button type={'button'} name={'Add new ambulance'} />
        </Link>
        <Link to={CREATEUSER_ROUTE}>
          <Button type={'button'} name={'Add new user'} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
