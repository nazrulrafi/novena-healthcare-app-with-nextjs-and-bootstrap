import React from 'react';

function DepartmentTitle({data}) {
    return (
        <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <span className="text-white">{data.dep_name}</span>
                            <h1 className="text-capitalize mb-5 text-lg">{data.dep_title}</h1>

                            <ul className="list-inline breadcumb-nav">
                                <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                                <li className="list-inline-item"><span className="text-white">/</span></li>
                                <li className="list-inline-item"><a href="#" className="text-white-50">{data.dep_name}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepartmentTitle;