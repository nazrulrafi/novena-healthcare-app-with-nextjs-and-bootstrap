import React from 'react';
async function getAllDepartmentData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/department`);
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return [];
        }
        return data.data;
    } catch (error) {
        return [];
    }
}
async function Doctors({doctors}) {
    const allDepartment = await getAllDepartmentData()

    return (
        <section className="section doctors">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Doctors</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>We provide a wide range of creative services adipisicing elit. Autem maxime rem modi
                                eaque, voluptate. Beatae officiis neque </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center  mb-5">
                    <div className="btn-group btn-group-toggle " data-toggle="buttons">
                        <label className="btn active ">
                            <input type="radio" name="shuffle-filter" value="all" checked="checked"/>All Department
                        </label>
                        {allDepartment.map((department, index) => (
                            <label className="btn" key={index}>
                                <input
                                    type="radio"
                                    name="shuffle-filter"
                                    value={department.dep_name.toLowerCase()}
                                />
                                {department.dep_name}
                            </label>
                        ))}


                    </div>
                </div>

                <div className="row shuffle-wrapper portfolio-gallery">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups={JSON.stringify([doctor.department.dep_name.toLowerCase()])}
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={doctor.doctor_image}
                                            alt="doctor-image"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0"><a href={`/doctors/${doctor.id}`}>{doctor.name}</a></h4>
                                    <p>{doctor.department.dep_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Doctors;