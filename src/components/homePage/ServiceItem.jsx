import React from 'react';

function Service(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                    <i className="icofont-crutch text-lg"></i>
                    <h4 className="mt-3 mb-3">Body Surgery</h4>
                </div>

                <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
            </div>
        </div>
    );
}

export default Service;