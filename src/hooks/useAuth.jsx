import React, { useContext } from 'react';
import { AuthContext } from '../Component/Provider/AuthProvider/AuthProvider';

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
