import React, { useState, useRef, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useMyBookings from '../../hooks/useMyBookings';

const DashboardTitle = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [bookings] = useMyBookings();
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(res => {
      if (res === undefined) {
        navigate('/login');
      }
    });
  };

  // Toggle dropdown visibility on profile icon click
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="navBg text-white p-6">
        <h2 className="font-bold text-xl">Doc House</h2>
        <div className="flex md:flex-row gap-3 justify-end text-3xl mr-5 relative">
          {/* Notification Icon */}
          <IoNotificationsOutline />

          {/* Profile Icon with Dropdown */}
          <div ref={dropdownRef} className="relative">
            <CgProfile
              onClick={handleProfileClick}
              className="cursor-pointer"
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <Link
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                      to={'/profile'}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                      to={'/appointment'}
                    >
                      My Appointment ({bookings.length})
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-start"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTitle;
