"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ImagePicker from "@/components/dashboard/ImagePicker";

export default function EditPostModal({ post, onClose, onUpdate }) {
    const [editedPost, setEditedPost] = useState(null);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [loading, setLoading] = useState(true); // <-- loading state
    const [resetImages, setResetImages] = useState(false);

    useEffect(() => {
        if (post) {
            setEditedPost({
                ...post,
                tags: post.tags.map((tag) => tag.id),
                categories: post.categories.map((cat) => cat.id),
            });
        }
    }, [post]);

    useEffect(() => {
        async function loadData() {
            try {
                await Promise.all([fetchTags(), fetchCategories()]);
            } catch (err) {
                console.error("Error loading tags/categories", err);
            } finally {
                setLoading(false); // <-- set loading to false only after fetching
            }
        }
        loadData();
    }, []);

    const fetchTags = async () => {
        try {
            const res = await fetch("/api/dashboard/posts/tags");
            const json = await res.json();
            if (json.success) setTags(json.data);
        } catch (err) {
            console.error("Failed to load tags", err);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch("/api/dashboard/posts/categories");
            const json = await res.json();
            if (json.success) setCategories(json.data);
        } catch (err) {
            console.error("Failed to load categories", err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setEditedPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleMultiSelectChange = (e, field) => {
        const selected = Array.from(e.target.selectedOptions).map((opt) =>
            parseInt(opt.value)
        );
        setEditedPost((prev) => ({ ...prev, [field]: selected }));
    };

    const handleSubmit = async () => {
        setIsSaving(true);
        const toastId = "edit-post-toast";

        try {
            const res = await fetch(`/api/dashboard/posts`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editedPost),
            });
            const json = await res.json();
            if (json.success) {
                toast.success("Post updated successfully", {
                    toastId,
                    autoClose: 1500,
                });
                onUpdate(editedPost); // <-- call onUpdate to update table data
                onClose();
                setTimeout(() => {
                    window.location.reload();
                }, 1600);
            } else {
                toast.error("Failed to update post");
            }
        } catch (err) {
            console.error("Update error:", err);
            toast.error("Error updating post");
        } finally {
            setIsSaving(false);
        }
    };

    // Wait until loading is done and editedPost is ready before rendering
    if (loading || !editedPost) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Post</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={editedPost.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Post Image</label>
                            <ImagePicker
                                imgUrl={editedPost.post_image}
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
                                rows="10"
                                value={editedPost.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Tags</label>
                            <select
                                multiple
                                className="form-select"
                                value={editedPost.tags}
                                onChange={(e) => handleMultiSelectChange(e, "tags")}
                            >
                                {tags.map((tag) => (
                                    <option key={tag.id} value={tag.id}>
                                        {tag.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Categories</label>
                            <select
                                multiple
                                className="form-select"
                                value={editedPost.categories}
                                onChange={(e) => handleMultiSelectChange(e, "categories")}
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                            disabled={isSaving}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={isSaving}
                        >
                            {isSaving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
