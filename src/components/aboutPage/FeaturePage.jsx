import React from 'react';

function FeaturePage(props) {
    return (
        <section className="fetaure-page ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="about-block-item mb-5 mb-lg-0">
                            <img src="/assets/images/about/about-1.jpg" alt="" className="img-fluid w-100"/>
                            <h4 className="mt-3">Healthcare for Kids</h4>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-block-item mb-5 mb-lg-0">
                            <img src="/assets/images/about/about-2.jpg" alt="" className="img-fluid w-100"/>
                            <h4 className="mt-3">Medical Counseling</h4>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-block-item mb-5 mb-lg-0">
                            <img src="/assets/images/about/about-3.jpg" alt="" className="img-fluid w-100"/>
                            <h4 className="mt-3">Modern Equipments</h4>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-block-item">
                            <img src="/assets/images/about/about-4.jpg" alt="" className="img-fluid w-100"/>
                            <h4 className="mt-3">Qualified Doctors</h4>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturePage;