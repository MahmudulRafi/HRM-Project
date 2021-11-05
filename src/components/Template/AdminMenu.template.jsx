import { Link } from "react-router-dom";

export function AdminMenu() {
    return (
        <>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <i className="nav-icon fas fa-home" />
                    <p>Dashboard</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/add-company" className="nav-link">
                    <i className="nav-icon fas fa-plus-square" />
                    <p>Add Company</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/companies" className="nav-link">
                    <i className="nav-icon fas fa-list-alt" />
                    <p>View Companies</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/company/rafi" className="nav-link">
                    <i className="nav-icon fas fa-list-alt" />
                    <p>Test Menu</p>
                </Link>
            </li>
        </>
    );
}
