import React from 'react';
import MainContentContainer from '../common';
import Navbar from '../limb/navbar';

import { useHistory } from 'react-router-dom';
import { getStoredAuthToken } from '../../utils/authToken';

const ProfilePageLayout: React.FC = (props) => {
  const history = useHistory();

  if (!getStoredAuthToken()) {
    history.push('/login');
  }

  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <MainContentContainer>{children}</MainContentContainer>
    </div>
  );
};

export default ProfilePageLayout;
