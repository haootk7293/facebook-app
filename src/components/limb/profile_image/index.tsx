import React from 'react';

import { getStoredUserInfo } from '../../../utils/authToken';

const ProfileImage: React.FC = () => {
  const userInfo = getStoredUserInfo();
  const profile_image = userInfo.profile_image
    ? userInfo.profile_image
    : 'https://picsum.photos/200';

  return (
    <img src={`${profile_image}`} className="w-8 h-8 rounded-full" alt="" />
  );
};

export default ProfileImage;
