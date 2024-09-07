import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../src/Context/AuthContext'; // Assuming you have this context

const PrivateRoute = ({ children }) => {
    const { currentUser } = AuthContext(); // Replace with your auth logic

    return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
