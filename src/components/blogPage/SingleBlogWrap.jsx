import React from 'react';

import AllBlogs from "@/components/blogPage/AllBlogs.jsx";
import BlogSideBar from "@/components/blogPage/BlogSideBar.jsx";
import SingleBlog from "@/components/blogPage/SingleBlog.jsx";

function SingleBlogWrap({blog}) {
    return (
        <section className="section blog-wrap">
            <div className="container">
                <div className="row">
                    <SingleBlog blog={blog}/>
                    <BlogSideBar/>
                </div>
            </div>
        </section>
    );
}

export default SingleBlogWrap;