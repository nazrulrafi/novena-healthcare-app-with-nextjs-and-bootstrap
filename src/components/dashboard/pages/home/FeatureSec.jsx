import React from 'react';

function FeatureSec({data, onChange}) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header"><h5>Features Section</h5></div>
            <div className="card-body">
                <div className="row">
                    {/* Appointment Feature */}
                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-header"><h5>Appointment</h5></div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Icon</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_appointmet_icon"
                                        value={data.home_features_appointmet_icon}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_appointmet_title"
                                        value={data.home_features_appointmet_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sub Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_appointmet_sub_title"
                                        value={data.home_features_appointmet_sub_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="home_features_appointmet_description"
                                        value={data.home_features_appointmet_description}
                                        onChange={onChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Button Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_appointmet_button_title"
                                        value={data.home_features_appointmet_button_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Button Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_appointmet_button_link"
                                        value={data.home_features_appointmet_button_link}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours Feature */}
                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-header"><h5>Working Hours</h5></div>
                            <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Icon</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="home_features_working_hours_icon"
                                    value={data.home_features_working_hours_icon}
                                    onChange={onChange}
                                />
                            </div>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_working_hours_title"
                                        value={data.home_features_working_hours_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sub Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_working_hours_sub_title"
                                        value={data.home_features_working_hours_sub_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sub Content</label>
                                    <textarea
                                        className="form-control"
                                        name="home_features_working_hours_sub_content"
                                        value={data.home_features_working_hours_sub_content}
                                        onChange={onChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Feature */}
                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-header"><h5>Emergency</h5></div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Icon</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_emergency_icon"
                                        value={data.home_features_emergency_icon}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_emergency_title"
                                        value={data.home_features_emergency_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sub Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="home_features_emergency_sub_title"
                                        value={data.home_features_emergency_sub_title}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="home_features_emergency_description"
                                        value={data.home_features_emergency_description}
                                        onChange={onChange}
                                        rows={10}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSec;