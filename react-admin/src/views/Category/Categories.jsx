import React from 'react';
import {Link} from "react-router-dom";
import routes from "../../Config/route.js";
import commonRoute from "../../Config/commonRoute.js";
import DataTable from "react-data-table-component";

const Categories = () => {
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
                        {/*<DataTable columns={columns} data={users}  pagination={true} selectableRows={true} expandableRows={true} expandableRowsComponent={ExpandedComponent} fixedHeader={true}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
