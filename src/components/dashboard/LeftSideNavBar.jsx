import React from 'react';

function LeftSideNavBar(props) {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <a className="nav-link" href="/dashboard">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapsePosts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Posts
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapsePosts" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/posts">All Posts</a>
                                <a className="nav-link" href="/dashboard/posts/addNewPost">Add New Post</a>
                                <a className="nav-link" href="/dashboard/posts/categories">Category</a>
                                <a className="nav-link" href="/dashboard/posts/tags">Tag</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Pages
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/pages/home">Home</a>
                                <a className="nav-link" href="/dashboard/pages/about">About</a>
                                <a className="nav-link" href="/dashboard/pages/services">Services</a>
                            </nav>
                        </div>

                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseDoctors" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Doctors
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseDoctors" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/doctor">All Doctors</a>
                                <a className="nav-link" href="/dashboard/doctor/addNewDoctor">Add New Doctor</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseDepartments" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Departments
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseDepartments" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/department">All Departments</a>
                                <a className="nav-link" href="/dashboard/department/addNewDepartment">Add New Department</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseContact" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Contact
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseContact" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/pages/appointments">Appointment</a>
                                <a className="nav-link" href="/dashboard/pages/query">Query</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="/dashboard/testimonial"  aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Testimonial
                        </a>
                        <div className="sb-sidenav-menu-heading">Addons</div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseMenus" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Appearence
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseMenus" aria-labelledby="headingOne"
                             data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/menus">Menus</a>
                                <a className="nav-link" href="/dashboard/menus">Widgets</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                           data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Users
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne"
                             data-bs-parent="#collapseUsers">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/dashboard/users">All Users</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    );
}

export default LeftSideNavBar;