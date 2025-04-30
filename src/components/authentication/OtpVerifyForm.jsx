"use client";

import React, {useState, useEffect} from 'react';
import SubmitButton from "@/components/master/SubmitButton";
import {GetEmail, IsEmpty, SetOTP} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

function OtpVerifyForm() {
    const router = useRouter();
    const [data, setData] = useState({ email: "", otp: "" });
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const email = GetEmail();
        setData(prev => ({ ...prev, email }));
    }, []);

    const inputChange = (name, value) => {
        setData({ ...data, [name]: value });
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        if (IsEmpty(data.otp)) {
            alert("Please enter a valid OTP");
        } else {
            setSubmit(true);
            const options = { method: "POST", body: JSON.stringify(data) };
            let res = await (await fetch("/api/user/verifyOtp", options)).json();
            setSubmit(false);

            if (res["status"] === "success") {
                alert("Request Completed Successfully");
                SetOTP(data.otp);
                router.push("/user/resetPassword");
            } else {
                alert("Request Failed");
            }
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Enter OTP</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputOtp" type="text"
                                               placeholder="5698" name="otp" onChange={(e) => {
                                            inputChange("otp", e.target.value)
                                        }} />
                                        <label htmlFor="inputOtp">Your OTP</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <SubmitButton
                                            onClick={formSubmit}
                                            className="btn btn-primary"
                                            submit={submit}
                                            text="Next"
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

export default OtpVerifyForm;
