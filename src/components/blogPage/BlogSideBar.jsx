import React from 'react';
import Search from "@/components/blogPage/Search.jsx";
import PopularPosts from "@/components/blogPage/PopularPosts.jsx";
import Categories from "@/components/blogPage/Categories.jsx";
import Tags from "@/components/blogPage/Tags.jsx";
import MakeAppointment from "@/components/master/MakeAppointment.jsx";

function BlogSideBar(props) {
    return (
        <div className="col-lg-4">
            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <Search/>
                <PopularPosts/>
                <Categories/>
                <Tags/>
                <MakeAppointment/>
            </div>
        </div>
    );
}

export default BlogSideBar;