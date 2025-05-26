import React from 'react';

function DepartmentSingle({data}) {
    const features = data.dep_services_features
        ? JSON.parse(data.dep_services_features)
        : [];
    return (
        <section className="section department-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="department-img">
                            <img src={data.dep_feature_image} alt="" className="img-fluid"/>
                        </div>
                        <div className="department-content mt-5">
                            <h3 className="text-md">{data.dep_name}</h3>
                            <div className="divider my-4"></div>
                            <p className="lead">Age forming covered you entered the examine. Blessing scarcely confined
                                her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially
                                affection.</p>
                            <p dangerouslySetInnerHTML={{__html: data.dep_description}}/>


                            <h3 className="mt-5 mb-4">Services features</h3>
                            <div className="divider my-4"></div>
                            <ul className="list-unstyled department-service">
                                {features.map((item, index) => (
                                    <li key={index}>
                                        <i className="icofont-check mr-2"></i>
                                        {item.content}
                                    </li>
                                ))}
                            </ul>

                            <a href="appoinment.html" className="btn btn-main-2 btn-round-full">Make an Appoinment<i
                                className="icofont-simple-right ml-2  "></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar-widget schedule-widget mt-5">
                            <h5 className="mb-4">Time Schedule</h5>

                            <ul className="list-unstyled">
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
                                <h3>+23-4565-65768</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepartmentSingle;