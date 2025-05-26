import React from 'react';

function SingleBlog({blog}) {
    return (
        <div className="col-lg-8">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <div className="single-blog-item">
                        <img src={blog.post_image} alt="" className="img-fluid"/>

                        <div className="blog-item-content mt-5">
                            <div className="blog-item-meta mb-3">
                                <span className="text-color-2 text-capitalize mr-3"><i
                                    className="icofont-book-mark mr-2"></i> {blog.categories[0].name}</span>
                                <span className="text-black text-capitalize mr-3"><i
                                    className="icofont-calendar mr-2"></i> 28th January 2019</span>
                            </div>

                            <h2 className="mb-4 text-md"><a href="blog-single.html">{blog.title}</a></h2>

                            <div dangerouslySetInnerHTML={{ __html: blog.description }} />


                            <div className="mt-5 clearfix">
                                <ul className="float-left list-inline tag-option">
                                    {blog.tags.map((tag,ind) => (
                                        <li className="list-inline-item" key={ind}><a href={`/tag/${tag.id}`}>{tag.name}</a></li>
                                    ))}

                                </ul>

                                <ul className="float-right list-inline">
                                    <li className="list-inline-item"> Share:</li>
                                    <li className="list-inline-item"><a href="#!"><i
                                        className="icofont-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#!"><i
                                        className="icofont-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#!"><i className="icofont-pinterest"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#!"><i
                                        className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SingleBlog;