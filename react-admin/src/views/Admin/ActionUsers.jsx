import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
import commonRoute from "../../Config/commonRoute.js";
import routes from "../../Config/route.js";
import {useStateContext} from "../../Context/ContextProvider.jsx";

const ActionUsers = () => {
    let {id} = useParams();
    const {user}=useStateContext();
    const navigate=useNavigate();
    const [admin,setAdmin]=useState({
        id:null,
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    });

    if (id){

        if (id===user.id){
            return <Navigate to={routes.users}/>
        }
        useEffect(() => {
            axiosClient.get(routeAPI.users+commonRoute.singleSlash+id)
                .then(({data})=>{
                    // setLoading(false);
                    setAdmin(data);
                    // console.log(data.name);

        if (id===user.id) {
            return <Navigate to={routes.users} />
        }
        useEffect(() => {

            axiosClient.get(routeAPI.users+commonRoute.singleSlash+`${id}`)
                .then(({data})=>{
                    // setLoading(false);
                    setAdmin(data);
                })
                .catch(()=>{
                    // setLoading(false);
                });
        }, []);


    function storeUser(ev) {
          ev.preventDefault();
        if (admin.id) {
            if (admin.id === user.id) {
                alert('Cannot Update your self from here');
                return navigate(routes.users);
            }

            if (admin.id) {

                axiosClient.put(routeAPI.users + commonRoute.singleSlash + admin.id, admin)
                    .then(() => {
                        navigate(routes.users)
                        // setNotification('Users successfully updated');
                    })
                    .catch(err => {
                        const response = err.response;
                        if (response && response.status === 422) {
                            // setErrors(response.data.errors);
                        } else {
                            alert(response.status);
                        }
                    })
            } else {
                axiosClient.post(routeAPI.users, admin)
                    .then(() => {
                        navigate(routes.users)
                        // setNotification('User successfully Added');
                    })
                    .catch(err => {
                        const response = err.response;
                        if (response && response.status === 422) {
                            // setErrors(response.data.errors);
                        } else {
                            alert(response.status);
                        }
                    })
            }
        }
    }
    return (
        <div className='container my-5'>
            {admin.id && <h2>Update User:{admin.name}</h2>}
            {!admin.id && <h2>Add new User</h2>}
            <div className="card">
                <div className="card-body">

                    <form onSubmit={storeUser}>
                        <div className="row g-3">
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" value={admin.name} onChange={ev =>setAdmin({...admin,name:ev.target.value }) } required/>

                            </div>
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Email</label>
                                <input type="email" className="form-control "   value={admin.email} onChange={ev =>setAdmin({...admin,email:ev.target.value }) } required/>

                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Password</label>
                                <input type="text" className="form-control " onChange={ev =>setAdmin({...admin,password:ev.target.value }) } required/>

                            </div>
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Confirm Password</label>
                                <input type="text" className="form-control "  onChange={ev =>setAdmin({...admin,password_confirmation:ev.target.value }) }  required/>

                            </div>
                        </div>


                        <button className="btn btn-primary" type="submit">Save</button>

                    </form>

                </div>
            </div>
        </div>
    );


export default ActionUsers;
