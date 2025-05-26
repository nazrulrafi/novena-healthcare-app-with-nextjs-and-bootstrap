'use client';

import React, { useState, useEffect } from "react";
import Loader from "@/components/master/Loader.jsx";

// Utility to truncate text
const truncateWords = (text, wordLimit = 20) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + "...";
};

function AllBlogs({ blogs: initialBlogs }) {
    const [blogList, setBlogList] = useState(initialBlogs || []);
    const [loading, setLoading] = useState(!initialBlogs?.length);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    useEffect(() => {
        if (initialBlogs && initialBlogs.length > 0) {
            setBlogList(initialBlogs);
            setLoading(false);
        }
    }, [initialBlogs]);

    const totalPages = Math.ceil(blogList.length / postsPerPage);
    const currentBlogs = blogList.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="col-lg-8">
            <div className="row">
                {loading ? (
                    <Loader />
                ) : currentBlogs.length === 0 ? (
                    <p>No blogs found.</p>
                ) : (
                    currentBlogs.map((blog, index) => (
                        <div key={index} className="col-lg-12 col-md-12 mb-5">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src={blog.post_image} alt={blog.title} className="img-fluid" />
                                </div>
                                <div className="blog-item-content">
                                    <div className="blog-item-meta mb-3 mt-4">
                                        <span className="text-black text-capitalize mr-3">
                                            <i className="icofont-calendar mr-1"></i> 28th January
                                        </span>
                                    </div>
                                    <h2 className="mt-3 mb-3">
                                        <a href={`/blog/${blog.id}`}>{blog.title}</a>
                                    </h2>
                                    <p className="mb-4">{truncateWords(blog.description, 40)}</p>
                                    <a
                                        href={`/blog/${blog.id}`}
                                        target="_blank"
                                        className="btn btn-main btn-icon btn-round-full"
                                    >
                                        Read More <i className="icofont-simple-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {totalPages > 1 && (
                    <div className="col-lg-12 col-md-12">
                        <nav className="pagination py-2 d-inline-block">
                            <div className="nav-links">
                                {Array.from({ length: totalPages }, (_, i) => {
                                    const page = i + 1;
                                    return page === currentPage ? (
                                        <span key={page} aria-current="page" className="page-numbers current">
                                            {page}
                                        </span>
                                    ) : (
                                        <a
                                            key={page}
                                            className="page-numbers"
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageClick(page);
                                            }}
                                        >
                                            {page}
                                        </a>
                                    );
                                })}
                                {currentPage < totalPages && (
                                    <a
                                        className="page-numbers"
                                        href="#!"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageClick(currentPage + 1);
                                        }}
                                    >
                                        <i className="icofont-thin-double-right"></i>
                                    </a>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllBlogs;
