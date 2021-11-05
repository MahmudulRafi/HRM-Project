import React from "react";
import { Link } from "react-router-dom";
import { AddCompanyForm } from "../forms/AddCompany.form";

export function AddCompany() {
    return (
        <div className="content-wrapper">
            <div className="custom-body">
                <div className="card">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-3">
                                    <h1 className="m-0">Add Company</h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-9">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Add-Company
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Content */}
                    <br />
                    <AddCompanyForm />
                </div>
            </div>
        </div>
    );
}
