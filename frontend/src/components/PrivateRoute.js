import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    // You might want a loading state here for better UX
    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
