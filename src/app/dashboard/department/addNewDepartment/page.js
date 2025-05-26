"use client"
import React, { useState } from 'react';
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";
import { toast } from "react-toastify";

function Page(props) {
    const [items, setItems] = useState([]);
    const [resetImages, setResetImages] = useState(false);  // New state for resetting images
    const initialData = {
        dep_name: "",
        dep_title: "",
        dep_description_title: "",
        dep_excerpt: "",
        dep_description: "",
        dep_thumbnail_img: "",
        dep_feature_image: "",
        dep_services_feature: "",
    };
    const [data, setData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        handleChange({ target: { name: "dep_services_feature", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { content: "" }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        const res = await fetch("/api/dashboard/department/departmentSingle", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const responseData = await res.json();
        if (responseData.status === 200) {
            toast('Department created successfully', {
                position: "top-center",
                autoClose: 1500,
            });
            setResetImages(true); // Trigger image reset
        }
        setData(initialData);
        setItems([]);

    };

    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-8 offset-2">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <div className=" d-flex justify-content-between align-items-center">
                                <h3>Add New Department</h3>
                                <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Department Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="dep_name"
                                    value={data.dep_name}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="dep_title"
                                    value={data.dep_title}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description Title</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="dep_description_title"
                                    value={data.dep_description_title}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Excerpt</label>
                                <textarea
                                    className="form-control"
                                    rows={6}
                                    name="dep_excerpt"
                                    onChange={handleChange}
                                    value={data.dep_excerpt}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    rows={10}
                                    name="dep_description"
                                    onChange={handleChange}
                                    value={data.dep_description}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Thumbnail Image</label>
                                <ImagePicker
                                    imgUrl={data.dep_thumbnail_img}
                                    onChange={handleChange}
                                    fieldName="dep_thumbnail_img"
                                    reset={resetImages}  // Pass reset signal to ImagePicker
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Feature Image</label>
                                <ImagePicker
                                    imgUrl={data.dep_feature_image}
                                    onChange={handleChange}
                                    fieldName="dep_feature_image"
                                    reset={resetImages}  // Pass reset signal to ImagePicker
                                />
                            </div>
                            <div className="card shadow-sm mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5>Services features</h5>
                                    <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {items.map((item, index) => (
                                            <div className="col-md-12 " key={index}>
                                                <div className="mb-3 d-flex">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={item.content}
                                                        onChange={(e) =>
                                                            handleItemChange(index, 'content', e.target.value)
                                                        }
                                                    />
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => removeItem(index)}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
