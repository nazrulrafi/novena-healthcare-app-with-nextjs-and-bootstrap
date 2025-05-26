import React from 'react';

function Search(props) {
    return (
        <div className="sidebar-widget search  mb-3 ">
            <h5>Search Here</h5>
            <form action="#" className="search-form">
                <input type="text" className="form-control" placeholder="search"/>
                <i className="ti-search"></i>
            </form>
        </div>
    );
}

export default Search;