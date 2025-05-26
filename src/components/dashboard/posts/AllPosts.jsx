'use client';

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AllPosts({ posts, onDelete, onView, onEdit }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-light">
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Tags</th>
                    <th>Categories</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {posts.length === 0 ? (
                    <tr><td colSpan="7">No posts found</td></tr>
                ) : (
                    posts.map((post, index) => {
                        // Safely join tags and categories names if present
                        const tagsList = post.tags && post.tags.length
                            ? post.tags.map(tag => tag.name).join(", ")
                            : "No Tags";

                        const categoriesList = post.categories && post.categories.length
                            ? post.categories.map(cat => cat.name).join(", ")
                            : "No Categories";

                        return (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{tagsList}</td>
                                <td>{categoriesList}</td>
                                <td>
                                    {post.post_image ? (
                                        <img src={post.post_image} alt="Post" width="100" />
                                    ) : 'No Image'}
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-outline-primary p-0"
                                            title="View"
                                            onClick={() => onView(post)}
                                        >
                                            <i className="bi bi-eye fs-4"></i>
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-warning mx-1 p-0"
                                            title="Edit"
                                            onClick={() => onEdit(post)}
                                        >
                                            <i className="bi bi-pencil-square fs-4"></i>
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger p-0"
                                            title="Delete"
                                            onClick={() => onDelete(post)}
                                        >
                                            <i className="bi bi-trash fs-4"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                )}
                </tbody>
            </table>
        </div>
    );
}

export default AllPosts;
