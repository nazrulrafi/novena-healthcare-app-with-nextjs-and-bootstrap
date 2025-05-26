import React from 'react';

function Awards({data}) {
    const logos = JSON.parse(data.aboutDoctorAchievementImages);
    return (
        <section className="section awards">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h2 className="title-color">{data.aboutDoctorAchievementTitle} </h2>
                        <div className="divider mt-4 mb-5 mb-lg-0"></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {logos.map(logo => (
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={logo.logo} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;