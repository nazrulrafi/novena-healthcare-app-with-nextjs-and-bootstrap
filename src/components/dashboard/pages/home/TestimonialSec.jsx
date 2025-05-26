import React, { useState, useEffect } from 'react';


function TestimonialSec({ data, onChange }) {

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Testimonial Section</h5>
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
                                name="home_testimonial_sec_title"
                                value={data.home_testimonial_sec_title}
                                onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '200px'}}>Description</th>
                        <td>
                               <textarea
                                   className="form-control"
                                   name="home_testimonial_sec_description"
                                   value={data.home_testimonial_sec_description}
                                   onChange={onChange}
                                   rows="3"
                               ></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TestimonialSec;
