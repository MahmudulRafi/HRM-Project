import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/User.service";
import { getCompanyInfo } from "../../services/Admin.service";
const imageUrl = "../../../../anjumHR-rest-api/public/assets/images";

const listIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-card-checklist"
        viewBox="0 0 16 16"
    >
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
    </svg>
);

export function Company(props) {
    const [userProfile, setUserProfile] = useState([]);
    const [companyProfile, setCompanyProfile] = useState([]);
    const [userCountry, setUserCountry] = useState([]);
    const username = props.match.params.username;

    function getCompany() {
        const data = {
            admin_id: getCurrentUser().id,
            username: username,
        };
        const info = getCompanyInfo(data);
        Promise.all([info]).then((values) => {
            setUserProfile(values[0]);
            setCompanyProfile(values[0].company);
            setUserCountry(values[0].user_country_in_user.country.name);
        });
    }

    useEffect(() => {
        getCompany();
    }, []);

    return (
        <div className="content-wrapper">
            <div className="custom-body">
                <div className="card">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-3">
                                    <h1 className="m-0">Company Profile</h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-9">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="">Company</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            {username}
                                        </li>
                                    </ol>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /Page Content */}
                    <br />
                    <hr />
                    <h5 style={{ color: "green", textAlign: "center" }}>
                        <i class="fas fa-cube"></i> Basic Information
                    </h5>
                    <hr />
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="mb-3">
                                <h5>
                                    {listIcon}
                                    &nbsp; Company Name : &nbsp;
                                    <b> {companyProfile.name_en} </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <h5>
                                    {listIcon} &nbsp; Contact Person Name :
                                    &nbsp;
                                    <b>
                                        {companyProfile.contact_person_name_en}{" "}
                                    </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <h5>
                                    {listIcon} &nbsp; Phone No : &nbsp;
                                    <b> {companyProfile.phone_no} </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <h5>
                                    {listIcon} &nbsp; Email : &nbsp;
                                    <b> {userProfile.email} </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <h5>
                                    {listIcon} &nbsp; Country : &nbsp;
                                    <b> {userCountry} </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <h5>
                                    {listIcon} &nbsp; Status : &nbsp;
                                    <b>
                                        {userProfile.is_active === "1"
                                            ? "Active"
                                            : "InActive"}
                                    </b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img
                                src={companyProfile.image}
                                height="320px"
                                width="280px"
                            ></img>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <h5 style={{ color: "green", textAlign: "center" }}>
                        <i class="fas fa-cube"></i> License Information
                    </h5>
                    <hr />
                    <div className="mb-3">
                        <h5>
                            {listIcon} &nbsp; License Start Date : &nbsp;
                            <b> {companyProfile.license_start_date} </b>
                        </h5>
                    </div>
                    <div className="mb-3">
                        <h5>
                            {listIcon} &nbsp; License End Date : &nbsp;
                            <b> {companyProfile.license_end_date} </b>
                        </h5>
                    </div>
                    <div className="mb-3">
                        <h5>
                            {listIcon} &nbsp; Maximum Employee Limit: &nbsp;
                            <b> {companyProfile.users_limit} </b>
                        </h5>
                    </div>
                    <div className="mb-3">
                        <h5>
                            {listIcon} &nbsp; Maximum Branch Limit : &nbsp;
                            <b> {companyProfile.branches_limit} </b>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
