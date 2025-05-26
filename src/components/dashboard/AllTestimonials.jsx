"use client";
import React, { useState, useEffect } from 'react';
import TestimonialAvatarPicker from "@/components/dashboard/testimonial/testimonialAvatarPicker.jsx";

function AllTestimonials({ data, onChange }) {
    const [items, setItems] = useState([]);
    const allTestimonials = data.all_testimonials;

    useEffect(() => {
        try {
            let cleaned = allTestimonials;

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
    }, [allTestimonials]);

    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        onChange && onChange({ target: { name: "all_testimonials", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { name: '', designation: '', avatar: '', testimonial: '' }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>All Testimonial</h5>
                <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
            </div>
            <div className="card-body">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card card-item shadow-sm mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <h6>Testimonial #{index + 1}</h6>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeItem(index)}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.name}
                                            onChange={(e) =>
                                                handleItemChange(index, 'name', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Designation</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.designation}
                                            onChange={(e) =>
                                                handleItemChange(index, 'designation', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Avatar</label>
                                        <TestimonialAvatarPicker
                                            onChange={handleItemChange}
                                            index={index}
                                            avatar={item.avatar}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Testimonial</label>
                                        <textarea
                                            rows={6}
                                            className="form-control"
                                            value={item.testimonial}
                                            onChange={(e) =>
                                                handleItemChange(index, 'testimonial', e.target.value)
                                            }
                                        ></textarea>
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

export default AllTestimonials;
