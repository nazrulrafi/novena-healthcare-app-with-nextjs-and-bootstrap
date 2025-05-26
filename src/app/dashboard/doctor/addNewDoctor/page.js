"use client"
import React, { useState } from 'react';
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";
import { toast } from "react-toastify";
import EducationQualification from "@/components/dashboard/doctor/EducationQualification.jsx";
import ExpertiseArea from "@/components/dashboard/doctor/ExpertiseArea.jsx";
import SelectDepartment from "@/components/dashboard/doctor/SelectDepartment.jsx";

function Page(props) {
    const [resetImages, setResetImages] = useState(false);  // New state for resetting images
    const initialData = {
        name: "",
        designation: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        title: "",
        description: "",
        doctor_image:"",
        education_qualification: "",
        skill: "",
        expertise_area: "",
        departmentId:""
    };
    const [data, setData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // Check for empty fields
        const emptyFields = Object.entries(data).filter(([key, value]) => {
            // Trim strings to ignore whitespace-only values
            return value === "" || value === null || value === undefined || (typeof value === "string" && value.trim() === "");
        });

        if (emptyFields.length > 0) {
            toast.error(`Please fill in all fields before submitting. Missing: ${emptyFields.map(([key]) => key).join(", ")}`, {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        const res = await fetch("/api/dashboard/doctor/doctorSingle", {
            method: "POST",
            body: JSON.stringify(data),
        });

        const responseData = await res.json();

        if (responseData.status === 200) {
            toast('Doctor created successfully', {
                position: "top-center",
                autoClose: 1500,
            });
            setResetImages(true); // Trigger image reset
            setData(initialData);
            setTimeout(() => {
                window.location.reload();
            }, 1600); // wait slightly more than autoClose
        } else {
            toast.error("Something went wrong while saving.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
        setData(initialData);
    };

    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-8 offset-2">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <div className=" d-flex justify-content-between align-items-center">
                                <h3>Add New Doctor</h3>
                                <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Doctor Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Designation</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="designation"
                                    value={data.designation}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Facebook</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="facebook"
                                    value={data.facebook}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Twitter</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="twitter"
                                    value={data.twitter}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Linkedin</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="linkedin"
                                    value={data.linkedin}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    rows={6}
                                    name="description"
                                    onChange={handleChange}
                                    value={data.description}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill</label>
                                <textarea
                                    className="form-control"
                                    rows={6}
                                    name="skill"
                                    onChange={handleChange}
                                    value={data.skill}
                                ></textarea>
                            </div>
                            <SelectDepartment departmentId={data.departmentId} onChange={handleChange} />
                            <div className="mb-3">
                                <label className="form-label">Doctor Image</label>
                                <ImagePicker
                                    imgUrl={data.doctor_image}
                                    onChange={handleChange}
                                    fieldName="doctor_image"
                                    reset={resetImages}  // Pass reset signal to ImagePicker
                                />
                            </div>
                            <EducationQualification doctorData={data.education_qualification} onChange={handleChange}/>
                            <ExpertiseArea expertiseData={data.expertise_area} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;



