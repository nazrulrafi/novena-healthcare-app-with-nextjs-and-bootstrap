'use client';

import React, { useState, useEffect } from 'react';
import ModalImgPicker from "@/components/dashboard/department/ModalImgPicker.jsx";
import {toast} from "react-toastify";

function EditModal({ department, onClose,onUpdate  }) {
    const [editedDepartment, setEditedDepartment] = useState(department);
    const [items, setItems] = useState([]);
    const serviceFeature = department.dep_services_features;

    useEffect(() => {
        setEditedDepartment(department);
    }, [department]);

    useEffect(() => {
        try {
            let cleaned = serviceFeature;

            // Fix double-encoded JSON string
            if (typeof cleaned === 'string' && cleaned.startsWith("'") && cleaned.endsWith("'")) {
                cleaned = cleaned.slice(1, -1); // remove outer single quotes
            }

            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed)) {
                setItems(parsed);
            }
        } catch {
            setItems([]); // In case of any JSON parsing errors, reset to an empty array
        }
    }, [serviceFeature]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDepartment((prev) => ({ ...prev, [name]: value }));
    };

    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        handleChange({ target: { name: "dep_services_features", value: jsonString } });
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

    const handleSave =async () => {
        const res = await fetch('/api/dashboard/department/departmentSingle', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editedDepartment),
        })
        const responseData = await res.json();
        if (responseData.status === 200) {
            toast('Department updates successfully', {
                position: "top-center",
                autoClose: 1500,
            });
            if (onUpdate) {
                onUpdate(editedDepartment); // ✅ notify parent of update
            }
        }
        onClose();
    };

    return (
        // Background overlay
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal fade show"
                tabIndex="-1"
                aria-labelledby="editModalLabel"
                style={{ display: 'block' }}
                aria-hidden="true"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="modal-dialog modal-lg"> {/* Make the modal larger */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Department</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="dep_name" className="form-label">Department Name</label>
                                    <input
                                        type="text"
                                        id="dep_name"
                                        className="form-control"
                                        name="dep_name"
                                        value={editedDepartment.dep_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dep_title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        id="dep_title"
                                        className="form-control"
                                        name="dep_title"
                                        value={editedDepartment.dep_title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dep_excerpt" className="form-label">Excerpt</label>
                                    <textarea
                                        className="form-control"
                                        name="dep_excerpt"
                                        value={editedDepartment.dep_excerpt}
                                        onChange={handleChange}
                                        rows={5}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dep_description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="dep_description"
                                        value={editedDepartment.dep_description}
                                        onChange={handleChange}
                                        rows={8}
                                    ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label className="form-label">Thumbnail Image</label>
                                        <ModalImgPicker
                                            imgUrl={editedDepartment.dep_thumbnail_image}
                                            onChange={handleChange}
                                            fieldName="dep_thumbnail_img"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Feature Image</label>
                                        <ModalImgPicker
                                            imgUrl={editedDepartment.dep_feature_image}
                                            onChange={handleChange}
                                            fieldName="dep_feature_img"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <label htmlFor="dep_name" className="form-label">Services Features</label>
                                    {items.map((item, index) => (
                                        <div className="col-md-12" key={index}>
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
                                <button type="button" className="btn btn-sm btn-primary" onClick={addNewItem}>
                                    + Add Service Feature
                                </button>
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

export default EditModal;
