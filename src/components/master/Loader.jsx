import React from 'react';

function Loader() {
    return (
        <div className="text-center my-4">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default Loader;

