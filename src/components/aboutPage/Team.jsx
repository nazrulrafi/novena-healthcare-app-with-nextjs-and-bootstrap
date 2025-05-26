import React from 'react';

function Team({ data }) {

    const doctors = data.slice(0, 4); // Show only the first 4

    return (
        <section className="section team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2 className="mb-4">Meet Our Specialist</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>Today’s users expect effortless experiences. Don’t let essential people and processes
                                stay stuck in the past. Speed it up, skip the hassles</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {doctors.map((item, index) => (
                        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <div className="position-relative doctor-inner-box">
                                    <div className="doctor-profile">
                                        <div className="doctor-img">
                                            <img
                                                src={item.doctor_image}
                                                alt={item.name}
                                                className="img-fluid w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="mb-0">
                                            <a href={`/doctors/${item.id}`}>{item.name}</a>
                                        </h4>
                                        <p>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
