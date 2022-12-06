import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import { NavStyles, NavMenuStyles } from './NavStyles';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <NavStyles>
      <a href="/">
        <img className="logo" src={logo} alt="" />
      </a>
      <NavMenuStyles>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </NavMenuStyles>

      <div className="login">
        <Link to="/login" className="Link">
          Login
        </Link>
        {/* <button className="loginButton">Login</button> */}
      </div>
    </NavStyles>
  );
}

export default Nav;
