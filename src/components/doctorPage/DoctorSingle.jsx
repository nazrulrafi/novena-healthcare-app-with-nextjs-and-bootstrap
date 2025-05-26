import React from 'react';

function DoctorSingle({data}) {
    const education_qualification = data.education_qualification
        ? JSON.parse(data.education_qualification)
        : [];
    const expertise_area = data.expertise_area
        ? JSON.parse(data.expertise_area)
        : [];
    return (
        <>
            <section className="section doctor-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="doctor-img-block">
                                <img src={data.doctor_image} alt="" className="img-fluid w-100"/>

                                <div className="info-block mt-4">
                                    <h4 className="mb-0">{data.name}</h4>
                                    <p>{data.designation}</p>

                                    <ul className="list-inline mt-4 doctor-social-links">

                                        <li className="list-inline-item"><a href={data.facebook}><i
                                            className="icofont-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href={data.twitter}><i
                                            className="icofont-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href={data.linkedin}><i
                                            className="icofont-linkedin"></i></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6">
                            <div className="doctor-details mt-4 mt-lg-0">
                                <h2 className="text-md">{data.title}</h2>
                                <div className="divider my-4"></div>
                                <div className="doctor-single-description">
                                   <p> {data.description}</p>
                                </div>
                                <a href="appoinment.html" className="btn btn-main-2 btn-round-full mt-3">Make an
                                    Appoinment<i className="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section doctor-qualification gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3>My Educational Qualifications</h3>
                                <div className="divider my-4"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {education_qualification.map((item, index) => (
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="edu-block mb-5">
                                    <span className="h6 text-muted">{item.year} </span>
                                    <h4 className="mb-3 title-color">{item.university}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="section doctor-skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>My skills</h3>
                            <div className="divider my-4"></div>
                            <p>{data.skill}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="skill-list">
                                <h5 className="mb-4">Expertise area</h5>
                                <ul className="list-unstyled department-service">
                                    {expertise_area.map((item, index) => (
                                        <li><i className="icofont-check mr-2"></i>{item.content}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-widget  gray-bg p-4">
                                <h5 className="mb-4">Make Appoinment</h5>

                                <ul className="list-unstyled lh-35">
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Monday - Friday</span>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Saturday</span>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div className="sidebar-contatct-info mt-4">
                                    <p className="mb-0">Need Urgent Help?</p>
                                    <h3 className="text-color-2">+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorSingle;