import React from 'react';

function Features({ appointment, workingHours, emergency }) {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-block d-lg-flex">

                            {/* Appointment Feature */}
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className={appointment.icon}></i>
                                </div>
                                <span>{appointment.subTitle}</span>
                                <h4 className="mb-3">{appointment.title}</h4>
                                <p className="mb-4">{appointment.description}</p>
                                <a href={appointment.buttonLink} className="btn btn-main btn-round-full">
                                    {appointment.buttonTitle}
                                </a>
                            </div>

                            {/* Working Hours Feature */}
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className={workingHours.icon}></i>
                                </div>
                                <span>{workingHours.subTitle}</span>
                                <h4 className="mb-3">{workingHours.title}</h4>
                                <ul className="w-hours list-unstyled" dangerouslySetInnerHTML={{ __html: workingHours.subContent }} />
                            </div>

                            {/* Emergency Feature */}
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className={emergency.icon}></i>
                                </div>
                                <span>{emergency.subTitle}</span>
                                <h4 className="mb-3">{emergency.title}</h4>
                                <p>{emergency.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
