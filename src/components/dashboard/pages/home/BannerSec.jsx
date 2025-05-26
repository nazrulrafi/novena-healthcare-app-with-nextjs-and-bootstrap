import React from 'react';

function BannerSec({ data, onChange }) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h5 className="mb-0">Banner Section</h5>
            </div>
            <div className="card-body">
                <table className="table table-borderless align-middle">
                    <tbody>
                    <tr>
                        <th style={{ width: '200px' }}>Top Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="topTitle"
                                name="home_banner_top_title"
                                value={data.home_banner_top_title}
                                onChange={onChange}
                                placeholder="Enter top title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Main Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="home_banner_title"
                                value={data.home_banner_title}
                                onChange={onChange}
                                placeholder="Enter main title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Sub Title</th>
                        <td>
                            <textarea
                                className="form-control"
                                id="subTitle"
                                name="home_banner_sub_title"
                                value={data.home_banner_sub_title}
                                onChange={onChange}
                                rows="3"
                                placeholder="Enter sub title"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>Button Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="buttonTitle"
                                name="home_banner_button_title"
                                value={data.home_banner_button_title}
                                onChange={onChange}
                                placeholder="Enter button text"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Button Link</th>
                        <td>
                            <input
                                type="url"
                                className="form-control"
                                id="buttonLink"
                                name="home_banner_button_link"
                                value={data.home_banner_button_link}
                                onChange={onChange}
                                placeholder="Enter button URL"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BannerSec;
