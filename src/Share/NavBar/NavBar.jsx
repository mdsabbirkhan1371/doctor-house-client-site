import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../src/assets/Required/logo.png';
const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/appointment'}>Appointment</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
    </>
  );
  return (
    <div className="px-5 navBg">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-g rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-48" src={logo} alt="" />
        </div>
        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
