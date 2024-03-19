import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";
import routes from "../Config/route.js";

function GuestLayout() {
    const {user,token,setUser,setToken}=useStateContext();

    useEffect(()=>{
        let BodyClasses = document.body;
        BodyClasses.classList.add('d-flex', 'align-items-center', 'bg-auth', 'border-top', 'border-top-2', 'border-primary')
    },[])
    if (token){
        return <Navigate to={routes.dashboard}/>
    }
    return (
           <Outlet/>
    );
}

export default GuestLayout;
