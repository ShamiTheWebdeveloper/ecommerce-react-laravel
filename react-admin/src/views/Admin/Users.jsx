import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
import routes from "../../Config/route.js";
import DataTable from 'react-data-table-component';
import commonRoute from "../../Config/commonRoute.js";
import {useStateContext} from "../../Context/ContextProvider.jsx";
<<<<<<< HEAD

=======
import userInfo from "../../Config/userInfo.js";
// import LoginUser from "../../Config/userInfo.js";
// import LoginUser from "../../Config/userInfo.js";
>>>>>>> 2e100552e0648bae53dd7fbfc5ad3e27483ea90f

const Users = () => {
    const [users,setUsers]=useState([]);
    const {user}=useStateContext();
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers ()  {
        axiosClient.get(routeAPI.users)
            .then(({data})=>{
                setUsers(data.data);
            })
            .catch((err)=>{
                const response = err.response;
                alert('Status: '+response.status)
            })
    }



    function deleteUser(userId) {
<<<<<<< HEAD
        if (userId===user.id)return;
        if (!window.confirm('Really want to delete this user?')){
=======
        // if (userId===userInfo().id){
        //     return;
        // }

        if (!window.confirm('Really want to delete this user?') ){
>>>>>>> 2e100552e0648bae53dd7fbfc5ad3e27483ea90f
            return
        }
        axiosClient.delete(routeAPI.users+commonRoute.singleSlash+userId)
            .then(()=>{
                getUsers();
            })
    }


    const columns=[
        {
            name:'Id',
            selector:admin=>admin.id,
            sortable: true,
        },
        {
            name:'Name',
            selector:admin => admin.name
        },
        {
            name: 'Status',
            selector:admin => (admin.status===1)?(<span data-tag="allowRowEvents" className='text-success'>Active</span>):(<span data-tag="allowRowEvents" className="text-danger">Inactive</span>),
            sortable: true
        },
        {
            name: 'Email',
            selector:admin=>admin.email
        },
        {
            name: 'Registered Date',
            selector:admin=>admin.created_at,
            sortable: true,
        },
        {
            name: 'Action',
            selector:admin=>admin.id===user.id?'You cannot Perform Action on Your self':(<div className='d-flex'>
                <Link to={routes.users+commonRoute.singleSlash+admin.id} className='btn btn-primary' >Edit</Link>
            selector:user=>user.id===userInfo().id?'':(<div className='d-flex'>
                <Link to={routes.users+commonRoute.singleSlash+user.id} className='btn btn-primary' >Edit</Link>
>>>>>>> 2e100552e0648bae53dd7fbfc5ad3e27483ea90f
                {'\u00A0'}
                {'\u00A0'}
                <button className='btn btn-danger' onClick={ev=>deleteUser(admin.id)}>Delete</button>
            </div>)
        }

    ];

    const ExpandedComponent = ({ data }) => <pre>{data.name}</pre>;
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">

                    <div className="header">
                        <div className="header-body">
                            <div className="row align-items-center">
                                <div className="col">

                                    <h6 className="header-pretitle">
                                        Overview
                                    </h6>


                                    <h1 className="header-title text-truncate">
                                        Admin Members
                                        {/*{LoginUser.id}*/}
                                    </h1>

                                </div>
                                <div className="col-auto">
                                    <Link to={routes.users+commonRoute.newRecord} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="table-responsive">
                        <DataTable columns={columns} data={users}  pagination={true} selectableRows={true} expandableRows={true} expandableRowsComponent={ExpandedComponent} fixedHeader={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;

