import { Link } from "react-router-dom";

export function AdminDashboard() {
    return (
        <div className="custom-body">
            <div className="card">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Admin
                                    </li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <br />
                <div className="container-fluid">
                    {/* Info boxes */}
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-users" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Employees
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                            </Link>
                            {/* /.info-box */}
                        </div>
                        {/* /.col */}
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-address-card" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Attendance
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                        {/* fix for small devices only */}
                        <div className="clearfix hidden-md-up" />
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-atlas" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Leave Requests
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-code-branch" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Branches
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                    </div>

                    {/* /.row */}
                    <br />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-building" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Departments
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-vote-yea" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Positions
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                        {/* fix for small devices only */}
                        <div className="clearfix hidden-md-up" />
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-bars" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Leave Types
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </Link>
                        </div>
                        {/* /.col */}
                        <div className="col-12 col-sm-6 col-md-3">
                            <Link to="">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-dark elevation-1">
                                        <i className="fas fa-clipboard-check" />
                                    </span>
                                    <div className="info-box-content">
                                        <span
                                            className="info-box-text"
                                            style={{ color: "black" }}
                                        >
                                            Available <br /> Leaves
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                            </Link>
                            {/* /.info-box */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
