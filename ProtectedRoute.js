// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;