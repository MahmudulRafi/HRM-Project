import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">
                        AdminLTE 3
                    </span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
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
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/test" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>Widgets</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>Layout Options</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie" />
                                    <p>Charts</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>Forms</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>Tables</p>
                                </a>
                            </li>
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
