import React from 'react';

function PopularPosts(props) {
    return (
        <div className="sidebar-widget latest-post mb-3">
            <h5>Popular Posts</h5>

            <div className="py-2">
                <span className="text-sm text-muted">03 Mar 2018</span>
                <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
            </div>

            <div className="py-2">
                <span className="text-sm text-muted">03 Mar 2018</span>
                <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
            </div>

            <div className="py-2">
                <span className="text-sm text-muted">03 Mar 2018</span>
                <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a>
                </h6>
            </div>
        </div>
    );
}

export default PopularPosts;