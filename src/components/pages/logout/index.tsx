import React from 'react';
import { useHistory } from 'react-router-dom';

import { removeStoredAuthToken } from '../../../utils/authToken';

const LogoutPage: React.FC = () => {
  const history = useHistory();

  removeStoredAuthToken();
  history.push('/login');

  return <div className="w-full h-full flex items-center justify-center"></div>;
};

export default LogoutPage;
