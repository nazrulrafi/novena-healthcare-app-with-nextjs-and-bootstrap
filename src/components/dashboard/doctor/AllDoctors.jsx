'use client';

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AllDoctors({ doctors,onEdit,onDelete,onView}) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-light">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Expertise</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {doctors.map((doctor, index) => {
                    const expertise = JSON.parse(doctor.expertise_area || "[]")
                        .map((s) => s.content)
                        .join(", ");

                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>
                                <div className="doctor-image">
                                    <img src={doctor.doctor_image}/>
                                </div>
                            </td>
                            <td>{doctor.designation}</td>
                            <td>{doctor.department?.dep_name}</td>
                            <td>{expertise}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button
                                        className="btn btn-sm btn-outline-primary p-0"
                                        title="View"
                                        onClick={() => onView(doctor)}
                                    >
                                        <i className="bi bi-eye fs-4"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-warning mx-1 p-0"
                                        title="Edit"
                                        onClick={() => onEdit(doctor)}
                                    >
                                        <i className="bi bi-pencil-square fs-4"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger p-0"
                                        title="Delete"
                                        onClick={() => onDelete(doctor)}
                                    >
                                        <i className="bi bi-trash fs-4"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AllDoctors;
