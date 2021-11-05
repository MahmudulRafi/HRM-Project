import { Link } from "react-router-dom";
import { getCurrentUser, getUserRole } from "../../services/User.service";
import { AdminMenu } from "./AdminMenu.template";
import { CompanyMenu } from "./CompanyMenu.template";

function Menu() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="" className="brand-link">
                    <img
                        src="dist/img/hrClipart.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                    />
                    <span className="brand-text font-weight-light">
                        HR Management
                    </span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user4.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <Link to="" className="d-block">
                                &nbsp;&nbsp; {getCurrentUser().username}
                            </Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {getUserRole() === 3 && <AdminMenu />}
                            {getUserRole() === 2 && <CompanyMenu />}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default Menu;
