'use client';

import React, { useEffect, useState } from 'react';
import Loader from "@/components/master/Loader.jsx";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AllPosts from "@/components/dashboard/posts/AllPosts.jsx";
import EditPostModal from "@/components/dashboard/posts/EditPostModal.jsx";

async function getAllPosts() {
    try {
        const res = await fetch('/api/dashboard/posts');
        const data = await res.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

function Page() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleEdit = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleUpdate = (updatedPost) => {
        setPosts(prev => prev.map(p => (p.id === updatedPost.id ? updatedPost : p)));
    };

    const handleDelete = async (post) => {
        if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return;
        try {
            const res = await fetch(`/api/dashboard/posts/${post.id}`, {
                method: 'DELETE'
            });
            const json = await res.json();
            if (json.success) {
                toast.success("Post deleted");
                setPosts(prev => prev.filter(p => p.id !== post.id));
            } else {
                toast.error("Delete failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error deleting post");
        }
    };

    const handleView = (post) => {
        alert(`Viewing Post: ${post.title}`);
    };

    const handleClick = () => {
        router.push('/dashboard/posts/addNewPost');
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>All Posts</h3>
                <button className="btn btn-primary" onClick={handleClick}>Add New</button>
            </div>
            {loading ? <Loader /> : (
                <AllPosts posts={posts} onDelete={handleDelete} onEdit={handleEdit} onView={handleView} />
            )}

            {isModalOpen && selectedPost && (
                <EditPostModal
                    post={selectedPost}
                    onUpdate={handleUpdate}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Page;
