import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* Toggle button for mobile view */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 text-white bg-green-950"
        >
          <FaBars />
        </button>

        {/* Sidebar with updated background color */}
        <div
          className={`fixed inset-0 z-30 transform md:relative md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-gray-800 text-white min-h-screen p-5 md:block ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/dashboard/allUsers"
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold bg-green-700 rounded p-2' // Active link styles
                    : 'hover:text-gray-300'
                }
              >
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addDoctor"
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold bg-green-700 rounded p-2' // Active link styles
                    : 'hover:text-gray-300'
                }
              >
                Add Doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageDoctor"
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold bg-green-700 rounded p-2' // Active link styles
                    : 'hover:text-gray-300'
                }
              >
                Manage Doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold bg-green-700 rounded p-2' // Active link styles
                    : 'hover:text-gray-300'
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 ml-0 md:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
