import React from 'react';

function ContactInfo(props) {
    return (
        <section className="section contact-info pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-live-support"></i>
                            <h5>Call Us</h5>
                            +823-4565-13456
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-support-faq"></i>
                            <h5>Email Us</h5>
                            contact@mail.com
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-location-pin"></i>
                            <h5>Location</h5>
                            North Main Street,Brooklyn Australia
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;