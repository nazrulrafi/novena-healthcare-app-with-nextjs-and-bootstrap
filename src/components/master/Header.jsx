// app/components/Header.jsx or Header.tsx
import React from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Header() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const signinLink = token ? (
        <Link className="ml-4" href="/dashboard"><span>Dashboard</span></Link>
    ) : (
        <Link className="ml-4" href="/user/login"><span>Sign In</span></Link>
    );

    return (
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                <li className="list-inline-item">
                                    <a href="mailto:support@gmail.com">
                                        <i className="icofont-support-faq mr-2"></i>support@novena.com
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                <a href="tel:+23-345-67890">
                                    <span>Call Now : </span>
                                    <span className="h4">823-4565-13456</span>
                                </a>
                                {signinLink}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                    </a>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="/department">Departments</a></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><a className="dropdown-item" href="/doctors">Doctors</a></li>
                                    <li><a className="dropdown-item" href="/doctor-single">Doctor Single</a></li>
                                    <li><a className="dropdown-item" href="/appointment">Appointment</a></li>

                                    <li className="dropdown dropdown-submenu dropleft">
                                        <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                            <li><a className="dropdown-item" href="/submenu1">Submenu 01</a></li>
                                            <li><a className="dropdown-item" href="/submenu2">Submenu 02</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
