'use client';

import React, { useEffect, useState } from 'react';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/categories-with-count');
                const json = await res.json();
                if (json.success) {
                    setCategories(json.data);
                } else {
                    setError('Failed to fetch categories');
                }
            } catch (err) {
                setError('An error occurred while fetching categories.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="sidebar-widget category mb-3">
            <h5 className="mb-4">Categories</h5>

                <ul className="list-unstyled">
                    {categories.map((cat) => (
                        <li key={cat.id} className="align-items-center">
                            <a  href={`/categories/${cat.id}`}>{cat.name}</a>
                            <span>({cat._count.posts})</span>
                        </li>
                    ))}
                </ul>

        </div>
    );
}

export default Categories;
