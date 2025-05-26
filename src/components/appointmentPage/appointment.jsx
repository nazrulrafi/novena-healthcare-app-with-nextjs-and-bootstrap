import React from 'react';
import AppointmentForm from "@/components/master/AppointmentForm.jsx";

function Appointment() {

    return (
        <section className="appoinment section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mt-3">
                            <div className="feature-icon mb-3">
                                <i className="icofont-support text-lg"></i>
                            </div>
                            <span className="h3">Call for an Emergency Service!</span>
                            <h2 className="text-color mt-3">+84 789 1256 </h2>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <AppointmentForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Appointment;
