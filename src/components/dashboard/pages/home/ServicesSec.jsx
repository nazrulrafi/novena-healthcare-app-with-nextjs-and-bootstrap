import React, { useState, useEffect } from 'react';

function ServicesSection({ data, onChange }) {
    const [items, setItems] = useState([]);
    const homeAllServices = data.home_all_services
    useEffect(() => {
        try {
            let cleaned = homeAllServices;

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
    }, [homeAllServices]);


    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        onChange && onChange({ target: { name: "home_client_count", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { title: '', count: '' }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Service Section</h5>
                <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
            </div>
            <div className="card-body">
                <div className="card shadow-sm mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5>Client Count Section</h5>
                        <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {items.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card card-item shadow-sm mb-4">
                                        <div className="card-header d-flex justify-content-between">
                                            <h6>Count #{index + 1}</h6>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => removeItem(index)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="card-body">
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
                                                <label className="form-label">Total Count</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={item.count}
                                                    onChange={(e) =>
                                                        handleItemChange(index, 'count', e.target.value)
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

export default ServicesSection;
