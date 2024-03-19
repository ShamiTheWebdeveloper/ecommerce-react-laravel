import React, {useEffect} from "react";
import axiosClient from "../axios-client.js";
import routeAPI from "./routeAPI.js";
import {useStateContext} from "../Context/ContextProvider.jsx";

function UserInfo() {
    const {user,setUser}=useStateContext();


    useEffect(() => {
        axiosClient.get(routeAPI.user)
            .then(({data})=>{
                setUser(data);
            })
    }, []);

    return {
        id: user.id,
        name: user.name,
    }

}

export default UserInfo;



