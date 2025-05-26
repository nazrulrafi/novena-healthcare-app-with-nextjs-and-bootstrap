import React from 'react';

function Service({ data }) {
    const serviceItem = data.find(item => item.metaKey === 'all_services');
    const services = serviceItem ? JSON.parse(serviceItem.value) : [];

    return (
        <section className="section service-2">
            <div className="container">
                <div className="row">
                    {services.length === 0 ? (
                        <div className="col-12 text-center">
                            <p>No services found.</p>
                        </div>
                    ) : (
                        services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="service-block mb-5">
                                    <img
                                        src={service.avatar}
                                        alt={service.title}
                                        className="img-fluid"
                                    />
                                    <div className="content">
                                        <h4 className="mt-4 mb-2 title-color">{service.title}</h4>
                                        <p className="mb-4">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Service;
