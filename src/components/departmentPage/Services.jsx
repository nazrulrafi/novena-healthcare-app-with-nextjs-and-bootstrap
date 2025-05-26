import React from 'react';

function Services({ departmentData = [] }) {
    return (
        <section className="section service-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2>Award winning patient care</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>
                                Let’s know more about how we deliver exceptional care across all departments.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {departmentData.map((dep) => (
                        <div className="col-lg-4 col-md-6" key={dep.id}>
                            <div className="department-block mb-5">
                                <img
                                    src={dep.dep_thumbnail_image}
                                    alt={dep.dep_name}
                                    className="img-fluid w-100"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">{dep.dep_name}</h4>
                                    <p className="mb-4">{dep.dep_excerpt}</p>
                                    <a href={`/department/${dep.id}`} className="read-more">
                                        Learn More <i className="icofont-simple-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
