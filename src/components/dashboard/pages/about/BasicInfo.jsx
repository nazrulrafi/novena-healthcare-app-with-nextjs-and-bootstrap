import React from 'react';
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";

function BasicInfo({ data, onChange }) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h5 className="mb-0">Basic Info</h5>
            </div>
            <div className="card-body">
                <table className="table table-borderless align-middle">
                    <tbody>
                    <tr>
                        <th style={{width: '200px'}}>Personal Care Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="topTitle"
                                name="about_personal_care_title"
                                value={data.about_personal_care_title}
                                onChange={onChange}
                                placeholder="Enter title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <textarea
                                className="form-control"
                                id="subTitle"
                                name="about_personal_care_description"
                                value={data.about_personal_care_description}
                                onChange={onChange}
                                rows="3"
                                placeholder="Enter sub title"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>Doctor Achievement Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="buttonTitle"
                                name="about_doctor_achievement_title"
                                value={data.about_doctor_achievement_title}
                                onChange={onChange}
                                placeholder="Enter Achievement Title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Testimonial Left Image</th>
                        <td>
                            <ImagePicker
                                imgUrl={data.about_testimonial_left_image}
                                onChange={onChange}
                                fieldName="about_testimonial_left_image"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BasicInfo;
