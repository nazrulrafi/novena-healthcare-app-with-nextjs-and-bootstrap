import React from "react";
import Header from "@/components/master/Header.jsx";
import Footer from "@/components/master/Footer.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import BlogWrap from "@/components/blogPage/BlogWrap";
import SingleBlog from "@/components/blogPage/SingleBlog.jsx";
import SingleBlogWrap from "@/components/blogPage/SingleBlogWrap.jsx";

async function getSingleBlog(id) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/blog/${id}`, {
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
async function page({params}) {
    const { id } = await params;
    const blog = await getSingleBlog(id);
    return (
        <>
            <Header />
            <PageTitle title={blog.title} />
            <SingleBlogWrap blog={blog} />
            <Footer />
        </>
    );
}

export default page;
