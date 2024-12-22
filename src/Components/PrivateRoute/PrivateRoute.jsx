import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { div } from 'framer-motion/client';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center text-orange-500' >
                <span className="loading loading-ring loading-lg"></span>


            </div>
        );
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
};

export default PrivateRoute;