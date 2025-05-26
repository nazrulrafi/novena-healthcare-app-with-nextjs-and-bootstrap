import React from 'react';

function FeaturePage({ data }) {
    const serviceItem = data.find(item => item.metaKey === 'all_services');
    const services = serviceItem ? JSON.parse(serviceItem.value).slice(0, 4) : [];

    return (
        <section className="fetaure-page">
            <div className="container">
                <div className="row">
                    {services.length === 0 ? (
                        <div className="col-12 text-center">
                            <p>No features available.</p>
                        </div>
                    ) : (
                        services.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="about-block-item mb-5 mb-lg-0">
                                    <img
                                        src={service.avatar}
                                        alt={service.title}
                                        className="img-fluid w-100"
                                    />
                                    <h4 className="mt-3">{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default FeaturePage;
