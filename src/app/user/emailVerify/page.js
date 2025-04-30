'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {IsEmpty, SetEmail} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";

function Page(props) {
    let router = useRouter();
    let [data, setData] = useState({email:""});
    let [submit,setSubmit] = useState(false);
    const inputChange=(name,value)=>{
        setData({...data, [name]:value});
    }
    const formSubmit = async (event) => {
        event.preventDefault();
        if (IsEmpty(data.email)){
            alert("Please enter a valid email");
        }else {
            setSubmit(true);
            let res = await (await fetch(`/api/user/verifyEmail?email=${data.email}`)).json();
            setSubmit(false);
            if (res["status"] === "success"){
                alert("Request Completed Successfully");
                SetEmail(data.email);
                router.push("/user/otpVerify");
            }else {
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
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Password
                                Recovery</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputEmail" type="email"
                                               placeholder="name@example.com" name="email" onChange={(e)=>{inputChange("email",e.target.value)}}/>
                                        <label htmlFor="inputEmail">Email address</label>
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

export default Page;