import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  CREW_ROUTE,
  VEHICLEPAGE_ROUTE,
  MAINTENANCE_ROUTE,
  CREATEVEHICLE_ROUTE,
  CREATEUSER_ROUTE,
  NEWANNOTATION_ROUTE,
  NEWLOG_ROUTE,
  EDITVEHICLE_ROUTE,
} from '../../Constants';
import NavigationBar from '../NavigationBar';
import Home from '../../Pages/Home';
import Login from 'src/Pages/Login';
import CrewPage from 'src/Pages/CrewPage';
import VehiclePage from 'src/Pages/VehiclePage';
import MaintenancesPage from 'src/Pages/MaintenancesPage';
import CreateVehicle from 'src/Pages/CreateVehicle';
import CreateUserPage from 'src/Pages/CreateUserPage';
import CreateAnnotations from '../CreateAnnotations';
import CreateRoute from 'src/Pages/CreateRoute';
import EditVehicle from 'src/Pages/EditVehicle';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={CREW_ROUTE} element={<CrewPage />} />
        <Route path={VEHICLEPAGE_ROUTE} element={<VehiclePage />} />
        <Route path={MAINTENANCE_ROUTE} element={<MaintenancesPage />} />
        <Route path={CREATEVEHICLE_ROUTE} element={<CreateVehicle />} />
        <Route path={CREATEUSER_ROUTE} element={<CreateUserPage />} />
        <Route path={NEWANNOTATION_ROUTE} element={<CreateAnnotations />} />
        <Route path={NEWLOG_ROUTE} element={<CreateRoute />} />
        <Route path={EDITVEHICLE_ROUTE} element={<EditVehicle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
