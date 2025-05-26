import React from 'react';

function DoctorTitle({data}) {
    return (
        <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <span className="text-white">{data.designation}</span>
                            <h1 className="text-capitalize mb-5 text-lg">{data.name}</h1>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorTitle;