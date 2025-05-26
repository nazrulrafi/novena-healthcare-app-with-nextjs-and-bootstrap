import React, { useState, useEffect } from 'react';
import TestimonialAvatarPicker from "@/components/dashboard/testimonial/testimonialAvatarPicker.jsx";
import ClientLogoItem from "@/components/dashboard/pages/home/ClientLogoItem.jsx";


function ClientLogos({ data, onChange }) {
    const [items, setItems] = useState([]);
    const homeClientLogos = data.home_client_all_logos
    useEffect(() => {
        try {
            let cleaned = homeClientLogos;

            // Fix double-encoded JSON string
            if (typeof cleaned === 'string' && cleaned.startsWith("'") && cleaned.endsWith("'")) {
                cleaned = cleaned.slice(1, -1); // remove outer single quotes
            }

            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed)) {
                setItems(parsed);
            }
        } catch {
            setItems([]);
        }
    }, [homeClientLogos]);


    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        onChange && onChange({ target: { name: "home_client_all_logos", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);

    };

    const addNewItem = () => {
        emitChange([...items, { logo: '',title: '', link:"" }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Client Logos Section</h5>
            </div>
            <div className="card-body">
                <table className="table table-borderless align-middle">
                    <tbody>
                    <tr>
                        <th style={{width: '200px'}}>Title</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="home_client_logo_sec_title"
                                value={data.home_client_logo_sec_title}
                                onChange={onChange}
                                placeholder="Enter top title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '200px'}}>Description</th>
                        <td>
                               <textarea
                                   className="form-control"
                                   name="home_client_logo_sec_description"
                                   value={data.home_client_logo_sec_description}
                                   onChange={onChange}
                                   rows="3"
                               ></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="card shadow-sm mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5>All Logos</h5>
                        <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {items.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card card-item shadow-sm mb-4">
                                        <div className="card-header d-flex justify-content-between">
                                            <h6>Clinet #{index + 1}</h6>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeItem(index)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <label className="form-label">Logo</label>
                                                <ClientLogoItem
                                                    onChange={handleItemChange}
                                                    index={index}
                                                    avatar={item.logo}
                                                />

                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item.title}
                                                    onChange={(e) =>
                                                        handleItemChange(index, 'title', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Link</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item.link}
                                                    onChange={(e) =>
                                                        handleItemChange(index, 'link', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientLogos;
