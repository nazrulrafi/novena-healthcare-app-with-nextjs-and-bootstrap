import React from 'react';

function About({homeAboutImg01,homeAboutImg02,homeAboutImg03,homeAboutTitle,homeAboutDescription,homeAboutButtonTitle,homeAboutButtonLink}) {
    return (
        <section className="section about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img">
                            <img src={homeAboutImg01} alt="" className="img-fluid"/>
                            <img src={homeAboutImg02}  alt="" className="img-fluid mt-4"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img mt-4 mt-lg-0">
                            <img src={homeAboutImg03} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-content pl-4 mt-4 mt-lg-0">
                            <h2
                                className="title-color"
                                dangerouslySetInnerHTML={{__html: homeAboutTitle}}
                            />
                            <p className="mt-4 mb-5" dangerouslySetInnerHTML={{__html: homeAboutDescription}}/>
                            <a href={homeAboutButtonLink} className="btn btn-main-2 btn-round-full btn-icon">{homeAboutButtonTitle}<i
                                className="icofont-simple-right ml-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;