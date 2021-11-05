import { Link } from "react-router-dom";

export function CompanyMenu() {
    return (
        <>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-home" />
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
                <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-list-alt" />
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
    );
}
