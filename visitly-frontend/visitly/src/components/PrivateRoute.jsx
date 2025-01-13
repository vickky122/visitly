import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../services/api';

const PrivateRoute = ({ element }) => {
  const token = getAuthToken();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default PrivateRoute;
