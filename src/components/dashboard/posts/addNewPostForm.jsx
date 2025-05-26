"use client";

import React, { useState, useEffect } from 'react';
import ImagePicker from "@/components/dashboard/ImagePicker.jsx";
import { toast } from "react-toastify";

export default function AddNewPostForm() {
    const [resetImages, setResetImages] = useState(false);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const initialData = {
        title: "",
        description: "",
        post_image: "",
        tags: [],
        categories: []
    };

    const [data, setData] = useState(initialData);

    useEffect(() => {
        fetchTags();
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleMultiSelectChange = (e, fieldName) => {
        const selected = Array.from(e.target.selectedOptions).map(option => option.value);
        setData(prev => ({ ...prev, [fieldName]: selected }));
    };

    const fetchTags = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/dashboard/posts/tags');
            const json = await res.json();
            if (json.success) setTags(json.data);
        } catch (err) {
            console.error('Failed to load tags', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/dashboard/posts/categories');
            const json = await res.json();
            if (json.success) setCategories(json.data);
        } catch (err) {
            console.error('Failed to load categories', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/dashboard/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (json.success) {
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
                toast.error("Failed to create post");
            }
        } catch (err) {
            toast.error("Error submitting post");
            console.error(err);
        }
    };


    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-8 offset-2">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Add New Post</h3>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Post Image</label>
                                <ImagePicker
                                    imgUrl={data.post_image}
                                    onChange={handleImageChange}
                                    fieldName="post_image"
                                    reset={resetImages}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    rows="15"
                                    value={data.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Select Tags</label>
                                <select
                                    multiple
                                    className="form-select"
                                    value={data.tags}
                                    onChange={(e) => handleMultiSelectChange(e, 'tags')}
                                >
                                    {tags.map(tag => (
                                        <option key={tag.id} value={tag.id}>{tag.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Select Categories</label>
                                <select
                                    multiple
                                    className="form-select"
                                    value={data.categories}
                                    onChange={(e) => handleMultiSelectChange(e, 'categories')}
                                >
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
