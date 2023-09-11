import { LOGIN_ROUTE } from 'components/config/routes';
import { selectUserAuthention } from 'components/redux/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }) => {
  const authenticatied = useSelector(selectUserAuthention);

  return authenticatied ? children : <Navigate to={redirectTo} replace />;
};
