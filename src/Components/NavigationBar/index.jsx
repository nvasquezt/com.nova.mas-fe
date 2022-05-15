import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../Constants';

const NavigationBar = () => {
  if (localStorage.token) {
    return (
    <nav>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
      >Cerrar Sesión</Link>
    </nav>
    );
  };
  return (
    <div></div>
  );
};

export default NavigationBar;
