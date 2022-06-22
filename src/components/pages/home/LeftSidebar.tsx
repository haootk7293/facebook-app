import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImage from '../../limb/profile_image';

import { getStoredUserInfo } from '../../../utils/authToken';

const LeftSidebar: React.FC = () => {
  const userInfo = getStoredUserInfo();

  return (
    <div className="w-9/12 h-auto py-3">
      <ul className="w-full text-gray-600">
        <Link to="/profile">
          <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
            <div>
              <ProfileImage />
            </div>
            <div>
              <p className="text-sm font-semibold">
                {userInfo.first_name + ' ' + userInfo.last_name}
              </p>
            </div>
          </li>
        </Link>
        {/* <Link to="/friends">
          <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                alt="user"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Friends</p>
            </div>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default LeftSidebar;
