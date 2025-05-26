import React from 'react';

function AboutPage({data}) {

    return (
        <section className="section about-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color">{data.aboutPersonalCareTitle}</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>{data.aboutPersonalCareDescription}</p>
                        <img src="/assets/images/about/sign.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;