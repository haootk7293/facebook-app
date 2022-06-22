import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImage from '../profile_image';

import { getStoredUserInfo } from '../../../utils/authToken';

const Navbar: React.FC = () => {
  const userInfo = getStoredUserInfo();

  return (
    <div className="w-full h-14 bg-white grid grid-cols-7 gap-4 fixed z-50">
      <div className="col-span-2 flex items-center">
        <div className="flex items-center ml-2">
          <div className="h-10 text-primary">
            <Link to="/">
              <i className="fab fa-facebook" style={{ fontSize: 40 }}></i>
            </Link>
          </div>
          <div className="h-10">
            <input
              placeholder="Search Facebook"
              className="bg-gray-100 rounded-full h-full focus:outline-none ml-2 px-3 pr-4"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-center space-x-2"></div>
      <div className="col-span-2 flex items-center justify-end">
        <div className="h-10 w-auto flex items-center space-x-2 pr-2">
          <Link to="/profile">
            <button className="h-10 px-2 flex space-x-1 items-center justify-center focus:outline-none hover:bg-gray-300 rounded-full">
              <div className="h-8">
                <ProfileImage />
              </div>
              <div className="h-8 flex items-center justify-content">
                <p className="font-semibold text-sm">{userInfo.first_name}</p>
              </div>
            </button>
          </Link>
          <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
            <i className="fas fa-plus"></i>
          </button>
          <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
            <i className="fab fa-facebook-messenger"></i>
          </button>
          <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
            <i className="fas fa-bell"></i>
          </button>
          <Link to="/logout">
            <button className="h-10 px-2 flex space-x-1 items-center justify-center focus:outline-none hover:bg-gray-300 rounded-full">
              <div className="h-8 flex items-center justify-content">
                <p className="font-semibold text-sm">Logout</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
