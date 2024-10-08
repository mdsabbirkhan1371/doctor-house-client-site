import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../src/assets/Required/logo.png';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const { user, logOut } = useAuth();
  console.log({ user });

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/appointment'}>Appointment</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={'/myBooking'}>My Booking</NavLink>
          </li>
          {/* Show "Dashboard" link only if the user is an admin */}
          {user.role === 'admin' && (
            <li>
              <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
          )}
          <li>
            <NavLink onClick={handleLogout} to={'/login'}>
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="px-5 py-3 navBg">
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
              className="menu menu-sm dropdown-content bg-slate-700 bg-opacity-30 rounded-box z-[1] mt-3 w-52 p-3 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-48" src={logo} alt="Logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
