import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LOGIN_ROUTE, HOME_ROUTE } from '../../Constants';
import NavigationBar from '../NavigationBar';
import Home from '../../Pages/Home';
import Login from 'src/Pages/Login';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
