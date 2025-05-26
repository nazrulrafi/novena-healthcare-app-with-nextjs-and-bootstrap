"use client";
import React, { useState, useEffect } from 'react';
import TestimonialAvatarPicker from "@/components/dashboard/testimonial/testimonialAvatarPicker.jsx";

function AllServices({ data, onChange }) {
    const [items, setItems] = useState([]);
    const allServices = data.all_services;

    useEffect(() => {
        try {
            let cleaned = allServices;

            // Fix double-encoded JSON string
            if (typeof cleaned === 'string' && cleaned.startsWith("'") && cleaned.endsWith("'")) {
                cleaned = cleaned.slice(1, -1);
            }

            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed)) {
                setItems(parsed);
            }
        } catch {
            setItems([]);
        }
    }, [allServices]);

    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        onChange && onChange({ target: { name: "all_services", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { title: '', description: '', avatar: ''}]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>All Services</h5>
                <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
            </div>
            <div className="card-body">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card card-item shadow-sm mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <h6>Service #{index + 1}</h6>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeItem(index)}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.title}
                                            onChange={(e) =>
                                                handleItemChange(index, 'title', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            rows={6}
                                            className="form-control"
                                            value={item.description}
                                            onChange={(e) =>
                                                handleItemChange(index, 'description', e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Service IImage</label>
                                        <TestimonialAvatarPicker
                                            onChange={handleItemChange}
                                            index={index}
                                            avatar={item.avatar}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllServices;
