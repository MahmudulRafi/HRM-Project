import React, { useState, useEffect } from "react";
import { getCompaniesInfo } from "../../services/Admin.service";
import { getCurrentUser } from "../../services/User.service";
import { CompaniesTable } from "./CompaniesTable.component";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";

export function Companies() {
    const [companiesInfo, setCompaniesInfo] = useState([]);

    function getCompanies() {
        const adminId = {
            admin_id: getCurrentUser().id,
        };
        const info = getCompaniesInfo(adminId);
        Promise.all([info]).then((values) => {
            setCompaniesInfo(values[0]);
        });
    }

    const columns = [
        {
            title: "ID",
            field: "id",
        },
        {
            title: "Name",
            field: "name_en",
        },
        {
            title: "Email",
            field: "user.email",
        },
        {
            title: "Phone",
            field: "phone_no",
        },
        {
            title: "Status",
            field: "user.is_active",
            render: (row) => {
                row.user.is_active === 1 ? (
                    <Switch defaultChecked />
                ) : (
                    <Switch />
                );
            },
        },
    ];

    useEffect(() => getCompanies(), []);

    return (
        <div className="content-wrapper">
            <div className="custom-body">
                <div className="card">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-3">
                                    <h1 className="m-0">Companies</h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-9">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <Link to="">Companies</Link>
                                        </li>
                                    </ol>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                    </div>
                    <CompaniesTable columns={columns} data={companiesInfo} />
                </div>
            </div>
        </div>
    );
}
