"use client";

import React, { useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import { IsEmpty } from "@/utility/FormHelper";

function RegistrationForm() {
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        otp: "",
    });
    const [submit, setSubmit] = useState(false);

    const inputChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const formSubmit = async (event) => {
        event.preventDefault();

        if (IsEmpty(data.email)) {
            alert("Please enter a valid email");
            return;
        }

        setSubmit(true);
        const options = {
            method: "POST",
            body: JSON.stringify(data),
        };

        const res = await (await fetch("/api/user/registration", options)).json();
        setSubmit(false);

        if (res.status === "success") {
            alert("Request Completed Successfully");
            window.location.href = "/user/login";
        } else {
            alert("Request Failed");
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">
                                    Create Account
                                </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={formSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    name="fName"
                                                    onChange={(e) => inputChange("fName", e.target.value)}
                                                />
                                                <label htmlFor="inputFirstName">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    className="form-control"
                                                    id="inputLastName"
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    name="lName"
                                                    onChange={(e) => inputChange("lName", e.target.value)}
                                                />
                                                <label htmlFor="inputLastName">Last name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    className="form-control"
                                                    id="inputEmail"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    name="email"
                                                    onChange={(e) => inputChange("email", e.target.value)}
                                                />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputPassword"
                                                    type="password"
                                                    placeholder="Create a password"
                                                    name="password"
                                                    onChange={(e) => inputChange("password", e.target.value)}
                                                />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-0">
                                        <div className="d-grid">
                                            <SubmitButton
                                                onClick={formSubmit}
                                                className="btn btn-primary"
                                                submit={submit}
                                                text="Create Account"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small">
                                    <a href="/user/login">Have an account? Go to login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegistrationForm;
