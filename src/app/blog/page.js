export const dynamic = 'force-dynamic'; // ✅ Add this

import React from "react";
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import BlogWrap from "@/components/blogPage/BlogWrap";
async function getAllPosts() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/blog`, {
            cache: 'no-store', // disable caching
        });
        const data = await res.json();

        if (!data || data.message === 'fail') {
            return null;
        }

        return data.data;
    } catch (err) {
        console.error("Failed to fetch department:", err);
        return null;
    }
}
async function BlogPage() {
    const blog = await getAllPosts();

    return (
        <>
            <Header />
            <PageTitle title="Blog Articles" />
            <BlogWrap blogs={blog}/>
            <Footer />
        </>
    );
}

export default BlogPage;
