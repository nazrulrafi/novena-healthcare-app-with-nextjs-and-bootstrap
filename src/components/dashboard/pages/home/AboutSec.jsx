import React from 'react';
import Image from "next/image.js";
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";

function AboutSec({data, onChange}) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h5 className="mb-0">About Section</h5>
            </div>
            <div className="card-body">
                <table className="table table-borderless align-middle">
                    <tbody>
                    <tr>
                        <th>Image One</th>
                        <td>
                            <ImagePicker
                                imgUrl={data.home_about_img_01}
                                onChange={onChange}
                                fieldName="home_about_img_01"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Image Two</th>
                        <td>
                            <ImagePicker
                                imgUrl={data.home_about_img_02}
                                onChange={onChange}
                                fieldName="home_about_img_02"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Image Three</th>
                        <td>
                            <ImagePicker
                                imgUrl={data.home_about_img_03}
                                onChange={onChange}
                                fieldName="home_about_img_03"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="home_about_title"
                                value={data.home_about_title}
                                onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Sub Title</th>
                        <td>
                            <textarea
                                className="form-control"
                                name="home_about_description"
                                value={data.home_about_description}
                                onChange={onChange}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>Button Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="home_about_button_title"
                                value={data.home_about_button_title}
                                onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Button Link</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="home_about_button_link"
                                value={data.home_about_button_link}
                                onChange={onChange}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AboutSec;