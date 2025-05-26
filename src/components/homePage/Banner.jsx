import React from 'react';

function Banner({bannerBgImg,bannerTopTitle,bannerTitle,bannerSubTitle,bannerButtonTitle,bannerButtonLink}) {
    return (
        <section className="banner" style={{backgroundImage: `url(${bannerBgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xl-7">
                        <div className="block">
                            <div className="divider mb-3"></div>
                            <span className="text-uppercase text-sm letter-spacing ">{bannerTopTitle}</span>
                            <h1 className="mb-3 mt-3">{bannerTitle}</h1>

                            <p className="mb-4 pr-5">{bannerSubTitle}</p>
                            <div className="btn-container ">
                                <a href={bannerButtonLink} target="_blank"
                                   className="btn btn-main-2 btn-icon btn-round-full">{bannerButtonTitle} <i
                                    className="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;