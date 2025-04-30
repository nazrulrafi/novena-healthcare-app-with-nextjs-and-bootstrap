import React from 'react';

function AboutPage(props) {
    return (
        <section className="section about-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color">Personal care for your healthy living</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae
                            dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut
                            reprehenderit dignissimos, libero delectus.</p>
                        <img src="/assets/images/about/sign.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;