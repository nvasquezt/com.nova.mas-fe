import React from "react";
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../Constants'


const NavigationBar = () => {
  return (
    <nav>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={LOGIN_ROUTE}>Login</NavLink>
    </nav>
  )
}

export default NavigationBar