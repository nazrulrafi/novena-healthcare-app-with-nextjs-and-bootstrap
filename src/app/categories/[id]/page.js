import React from "react";
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import BlogWrap from "@/components/blogPage/BlogWrap";

async function getCategoryPosts(id) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/categories/${id}`, {
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
async function BlogPage({params}) {
    const { id } = await params;
    const blog = await getCategoryPosts(id);
    return (
        <>
            <Header />
            <PageTitle title={blog.name} />
            <BlogWrap blogs={blog.posts} />
            <Footer />
        </>
    );
}

export default BlogPage;
