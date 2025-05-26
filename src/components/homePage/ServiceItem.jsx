import React from 'react';

function ServiceItem({title,icon,description}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                    <i className={`${icon} text-lg`}></i>
                    <h4 className="mt-3 mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                </div>

                <div className="content">
                    <p className="mb-4" dangerouslySetInnerHTML={{__html: description}} />
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;