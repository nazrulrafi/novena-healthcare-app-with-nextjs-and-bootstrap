import React from 'react';
import AppointmentForm from "@/components/master/AppointmentForm.jsx";

function Appointment({homeAppointmentTitle,homeAppointmentDescription,homeAppointmentImgUrl,homeAppointmentNumber}) {
    return (
        <section className="section appoinment">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <div className="appoinment-content">
                            <img src={homeAppointmentImgUrl} alt="" className="img-fluid"/>
                            <div className="emergency">
                                <h2 className="text-lg"><i className="icofont-phone-circle text-lg"></i>{homeAppointmentNumber}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 ">
                        <AppointmentForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Appointment;