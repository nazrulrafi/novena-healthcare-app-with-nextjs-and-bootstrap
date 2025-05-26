import React from 'react';

import AllBlogs from "@/components/blogPage/AllBlogs.jsx";
import BlogSideBar from "@/components/blogPage/BlogSideBar.jsx";

function BlogWrap({blogs}) {
    return (
        <section className="section blog-wrap">
            <div className="container">
                <div className="row">
                    <AllBlogs blogs={blogs}/>
                    <BlogSideBar/>
                </div>
            </div>
        </section>
    );
}

export default BlogWrap;