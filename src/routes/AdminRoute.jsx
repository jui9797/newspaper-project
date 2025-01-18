import React, { useContext } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] =useAdmin()
    const {user, loading, logOut} = useContext(AuthContext)
    const location =useLocation()
    if(loading || isAdminLoading){
        return <p>Loading...</p>
    }

    if (user && isAdmin) {
        return children;
    }
    if(!isAdmin){
   logOut();
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;