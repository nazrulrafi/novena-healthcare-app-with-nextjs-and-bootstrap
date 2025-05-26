import React from 'react';
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";

function AppointmentSec({data,onChange}) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h5 className="mb-0">Appointment Section</h5>
            </div>
            <div className="card-body">
                <table className="table table-borderless align-middle">
                    <tbody>
                    <tr>
                        <th style={{width: '200px'}}>Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="topTitle"
                                name="home_appointment_title"
                                value={data.home_appointment_title}
                                onChange={onChange}
                                placeholder="Enter top title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                name="home_appointment_description"
                                value={data.home_appointment_description}
                                onChange={onChange}
                                rows="3"
                                placeholder="Enter sub title"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="home_appointment_number"
                                value={data.home_appointment_number}
                                onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Appointment Image</th>
                        <td>
                            <ImagePicker
                                imgUrl={data.home_appointment_img_url}
                                onChange={onChange}
                                fieldName="home_appointment_img_url"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppointmentSec;