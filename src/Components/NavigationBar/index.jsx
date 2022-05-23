import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../Constants';
import './NavigationBar.scss';

const NavigationBar = () => {
  if (sessionStorage.token) {
    return (
      <nav className='navigationBar'>
        <NavLink to={HOME_ROUTE}>Home</NavLink>
        <Link
          to="/"
          onClick={() => {
            sessionStorage.removeItem('token');
            window.location.href = '/';
          }}
        >
          Logout
        </Link>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default NavigationBar;
