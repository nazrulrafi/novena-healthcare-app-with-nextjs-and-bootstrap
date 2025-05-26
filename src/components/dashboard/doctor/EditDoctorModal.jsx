'use client';

import React, { useState, useEffect } from 'react';
import SelectDepartment from "@/components/dashboard/doctor/SelectDepartment.jsx";
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";
import EducationQualification from "@/components/dashboard/doctor/EducationQualification.jsx";
import ExpertiseArea from "@/components/dashboard/doctor/ExpertiseArea.jsx";
import {toast} from "react-toastify";

function EditDoctorModal({ doctor, onClose, onUpdate }) {
    const [resetImages, setResetImages] = useState(false);  // New state for resetting images
    const [editedDoctor, setEditedDoctor] = useState(doctor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDoctor((prev) => ({ ...prev, [name]: value }));
    };


    const handleSave = async () => {
        const res = await fetch('/api/dashboard/doctor/doctorSingle', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editedDoctor),
        });

        const responseData = await res.json();

        if (res.status === 200) {
            if (onUpdate) {
                onUpdate(editedDoctor);
            }
            onClose(); // ✅ only close if successful
        } else {
            toast.error(responseData.message || "Update failed", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal fade show"
                tabIndex="-1"
                aria-labelledby="editModalLabel"
                style={{ display: 'block' }}
                aria-hidden="true"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Doctor</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Doctor Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                    value={editedDoctor.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Doctor Designation</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="designation"
                                    value={editedDoctor.designation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Facebook</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="facebook"
                                    value={editedDoctor.facebook}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Twitter</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="twitter"
                                    value={editedDoctor.twitter}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Linkedin</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="linkedin"
                                    value={editedDoctor.linkedin}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={editedDoctor.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dep_excerpt" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={editedDoctor.description}
                                    onChange={handleChange}
                                    rows={5}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dep_excerpt" className="form-label">Skill</label>
                                <textarea
                                    className="form-control"
                                    name="skill"
                                    value={editedDoctor.skill}
                                    onChange={handleChange}
                                    rows={5}
                                ></textarea>
                            </div>
                            <SelectDepartment departmentId={editedDoctor.departmentId}  onChange={handleChange}/>
                            <div className="mb-3">
                                <label className="form-label">Doctor Image</label>
                                <ImagePicker
                                    imgUrl={editedDoctor.doctor_image}
                                    onChange={handleChange}
                                    fieldName="doctor_image"
                                    reset={resetImages}  // Pass reset signal to ImagePicker
                                />
                            </div>
                            <EducationQualification doctorData={editedDoctor.education_qualification} onChange={handleChange}/>
                            <ExpertiseArea expertiseData={editedDoctor.expertise_area} onChange={handleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditDoctorModal;
