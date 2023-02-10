import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector( data => data );
    if(isAuth) return children;
    return <Navigate to='/login' />
}

export default PrivateRoute
