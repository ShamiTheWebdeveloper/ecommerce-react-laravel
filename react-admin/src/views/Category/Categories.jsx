import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import routes from "../../Config/route.js";
import commonRoute from "../../Config/commonRoute.js";
import DataTable from "react-data-table-component";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
const Categories = () => {
    const [categories,setCategories]=useState();
    useEffect(() => {
        getCategories();
    }, []);
    function getCategories() {
        axiosClient.get(routeAPI.categories)
            .then(({data})=>{
                setCategories(data.data)
            })
            .catch((err)=>{
                const response = err.response;
                alert('Status: '+response.status)
            })
    }

    function deleteCategory(){}

    const columns=[
        {
            name:'Id',
            selector:category=>category.id,
            sortable: true,
        },

        {
            name: 'Name',
            selector:category => category.name,
        },
        {
            name: 'Status',
            selector:category => (category.status===1)?(<span data-tag="allowRowEvents" className='text-success'>Active</span>):(<span data-tag="allowRowEvents" className="text-danger">Inactive</span>),
            sortable: true
        },
        {
            name: 'Created Date',
            selector:category=>category.created_at,
            sortable: true,
        },
        {
            name: 'Actions',
            selector:category => (
                <div className='d-flex'>
                    <Link to={routes.categories+commonRoute.singleSlash+category.id} className='btn btn-primary' >Edit</Link>
                    {'\u00A0'}
                    {'\u00A0'}
                    <button className='btn btn-danger' onClick={ev=>deleteCategory(category.id)}>Delete</button>
                </div>
             )
        }
    ]
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
                                        Categories
                                    </h1>

                                </div>
                                <div className="col-auto">
                                    <Link to={routes.categories+commonRoute.newRecord} className="btn btn-primary ms-2">
                                        Add Category
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="table-responsive">
                        <DataTable columns={columns} data={categories}  pagination={true} selectableRows={true}  fixedHeader={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
