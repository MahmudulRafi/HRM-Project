import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/User.service";
const role = getCurrentUser().user_type_id;

function Menu() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img
                        src="dist/img/hrClipart.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                    />
                    <span className="brand-text font-weight-light">
                        HR Management
                    </span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user4.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                &nbsp;&nbsp; {getCurrentUser().username}
                            </a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                            {role === 3 && (
                                <>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-columns" />
                                            <p>Dashboard</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-plus-square" />
                                            <p>Add Company</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/widgets.html"
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-copy" />
                                            <p>View Companies</p>
                                        </a>
                                    </li>
                                </>
                            )}
                            {role === 2 && (
                                <>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-columns" />
                                            <p>Dashboard</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-user-plus" />
                                            <p>Add Employee</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/widgets.html"
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-copy" />
                                            <p>View Employees</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-copy" />
                                            <p>Branches</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-chart-pie" />
                                            <p>Departments</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-tree" />
                                            <p>Positions</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-edit" />
                                            <p>Transection Types</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-table" />
                                            <p>Attendances</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-table" />
                                            <p>Transections</p>
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default Menu;
