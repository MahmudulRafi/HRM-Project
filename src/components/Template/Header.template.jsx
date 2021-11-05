import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Header() {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
                <ToastContainer
                    progressClassName="toastProgress"
                    bodyClassName="toastBody"
                />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="pushmenu"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-bars" />
                        </a>
                    </li>
                    {/* <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">
                            Home
                        </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                        Contact
                        </a>
                    </li> */}
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            to="/logout"
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-controlsidebar-slide="true"
                            href="#"
                            role="button"
                        >
                            Logout <i class="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="fullscreen"
                            href="#"
                            role="button"
                        >
                            Full Screen &nbsp;
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
