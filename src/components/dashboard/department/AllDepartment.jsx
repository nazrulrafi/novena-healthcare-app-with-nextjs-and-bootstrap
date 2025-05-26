// components/DepartmentTable.js

'use client';

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';



function AllDepartment({ departments, onDelete, onView, onEdit }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-light">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Excerpt</th>
                    <th>Services</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {departments.map((dep, index) => {
                    const services = JSON.parse(dep.dep_services_features || "[]")
                        .map((s) => s.content)
                        .join(", ");

                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{dep.dep_name}</td>
                            <td>{dep.dep_title}</td>
                            <td>{dep.dep_excerpt}</td>
                            <td>{services}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button
                                        className="btn btn-sm btn-outline-primary p-0"
                                        title="View"
                                        onClick={() => onView(dep)}
                                    >
                                        <i className="bi bi-eye fs-4"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-warning mx-1 p-0"
                                        title="Edit"
                                        onClick={() => onEdit(dep)}
                                    >
                                        <i className="bi bi-pencil-square fs-4"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger p-0"
                                        title="Delete"
                                        onClick={() => onDelete(dep)}
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

export default AllDepartment;
