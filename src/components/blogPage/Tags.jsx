'use client';
import React, {useEffect, useState} from 'react';

function Tags(props) {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/tags');
                const json = await res.json();
                if (json.success) {
                    setTags(json.data);
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
        <div className="sidebar-widget tags mb-3">
            <h5 className="mb-4">Tags</h5>
            {tags.map((tag) => (
                <a  href={`/tags/${tag.id}`}>{tag.name}</a>
            ))}
        </div>
    );
}

export default Tags;