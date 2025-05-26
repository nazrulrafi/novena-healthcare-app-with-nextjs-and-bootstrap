'use client';
import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Loader from "@/components/master/Loader.jsx";

function Page() {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true); // 👈 loading state

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        setLoading(true); // 👈 start loading
        try {
            const res = await fetch('/api/dashboard/posts/tags');
            const json = await res.json();
            if (json.success) {
                setTags(json.data);
            }
        } catch (err) {
            console.error('Failed to load tags', err);
        } finally {
            setLoading(false); // 👈 stop loading
        }
    };

    const handleAddOrUpdateTag = async () => {
        const trimmed = tagInput.trim();
        if (!trimmed) return;

        try {
            const method = editId ? 'PUT' : 'POST';
            const body = JSON.stringify(editId ? { id: editId, name: trimmed } : { name: trimmed });

            const res = await fetch('/api/dashboard/posts/tags', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            const result = await res.json();
            if (result.success) {
                await fetchTags();
                setEditId(null);
                setTagInput('');
            }
        } catch (err) {
            console.error('Failed to add/update tag', err);
        }
    };

    const handleDeleteTag = async (id) => {
        if (!confirm('Are you sure you want to delete this tag?')) return;
        try {
            const res = await fetch('/api/dashboard/posts/tags', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            const result = await res.json();
            if (result.success) {
                await fetchTags();
            }
        } catch (err) {
            console.error('Failed to delete tag', err);
        }
    };

    const handleEditTag = (tag) => {
        setTagInput(tag.name);
        setEditId(tag.id);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleAddOrUpdateTag();
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-4">Post Tags</h4>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        {editId ? 'Edit Tag' : 'Add New Tag'}
                    </label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a tag"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            className={`btn ${editId ? 'btn-success' : 'btn-primary'}`}
                            onClick={handleAddOrUpdateTag}
                        >
                            {editId ? 'Update' : 'Add'}
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <h6>All Tags</h6>
                    <div className="table-responsive">
                        {loading ? (
                          <Loader/>
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tag</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tags.length > 0 ? (
                                    tags.map((tag, index) => (
                                        <tr key={tag.id}>
                                            <td>{index + 1}</td>
                                            <td>{tag.name}</td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() => handleEditTag(tag)}
                                                >
                                                    <Pencil size={16} />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteTag(tag.id)}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-muted">
                                            No tags available.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
