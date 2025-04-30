'use client';

import React, { useState } from 'react';
import SubmitButton from '@/components/master/SubmitButton';

export default function LoginForm() {
    const [data, setData] = useState({ email: '', password: '' });
    const [submit, setSubmit] = useState(false);

    const inputOnChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        if (!data.email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }

        setSubmit(true);

        try {
            const res = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            setSubmit(false);
            setData({ email: '', password: '' });

            if (result.status === 'success') {
                alert('Login successful');
                window.location.href = '/';
            } else {
                alert('Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
            setSubmit(false);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">Login</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputEmail"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={data.email}
                                            onChange={(e) => inputOnChange('email', e.target.value)}
                                        />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputPassword"
                                            type="password"
                                            placeholder="Password"
                                            value={data.password}
                                            onChange={(e) => inputOnChange('password', e.target.value)}
                                        />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" />
                                        <label className="form-check-label" htmlFor="inputRememberPassword">
                                            Remember Password
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <a className="small" href="/user/emailVerify">
                                            Forgot Password?
                                        </a>
                                        <SubmitButton
                                            onClick={formSubmit}
                                            className="btn btn-primary"
                                            submit={submit}
                                            text="Login"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small">
                                    <a href="/user/registration">Need an account? Sign up!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
