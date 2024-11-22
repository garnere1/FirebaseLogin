import { Navigate, Outlet } from 'react-router-dom'
import React from "react";

export const PrivateRoutes = ({auth}) => {
    return (<>
        {auth==="true" ? (<Outlet/>) : (<Navigate to='/login'/>)};
    </>     
    )
}