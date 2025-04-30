'use client';

import React, {useState, useEffect} from 'react';
import {useRouter} from "next/navigation";
import {GetEmail, GetOTP, IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";

function SetPasswordForm() {
    const router = useRouter();
    const [data, setData] = useState({ email: "", password: "", otp: "" });
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const email = GetEmail();
        const otp = GetOTP();
        setData(prev => ({ ...prev, email, otp }));
    }, []);

    const inputChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        if (IsEmpty(data.email)) {
            alert("Please enter a valid email");
        } else {
            setSubmit(true);
            const options = { method: "POST", body: JSON.stringify(data) };
            let res = await (await fetch("/api/user/resetPassword", options)).json();
            setSubmit(false);

            if (res["status"] === "success") {
                alert("Request Completed Successfully");
                if (typeof window !== "undefined") sessionStorage.clear();
                router.push("/user/login");
            } else {
                alert("Request Failed");
            }
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputPassword" type="password"
                                               onChange={(e) => inputChange("password", e.target.value)} />
                                        <label htmlFor="inputPassword">New Password</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <SubmitButton
                                            onClick={formSubmit}
                                            className="btn btn-primary"
                                            submit={submit}
                                            text="Submit"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SetPasswordForm;
