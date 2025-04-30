import React from 'react';
import Logout from "@/components/dashboard/Logout";

function TopBar(props) {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ps-3" target="_blank" href="/">Novena</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                className="fas fa-bars"></i></button>

            <ul className="navbar-nav ml-auto me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <Logout/>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;