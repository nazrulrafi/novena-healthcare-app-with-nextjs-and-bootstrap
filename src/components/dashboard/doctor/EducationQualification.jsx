import React, { useEffect, useState, useRef } from 'react';

function EducationQualification({ doctorData, onChange }) {
    const [items, setItems] = useState([]);
    const lastSerialized = useRef('');

    useEffect(() => {
        try {
            let cleaned = doctorData;

            if (typeof cleaned === 'string' && cleaned.startsWith("'") && cleaned.endsWith("'")) {
                cleaned = cleaned.slice(1, -1); // remove outer single quotes
            }

            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed)) {
                const newSerialized = JSON.stringify(parsed);
                if (newSerialized !== lastSerialized.current) {
                    setItems(parsed);
                    lastSerialized.current = newSerialized;
                }
            }
        } catch {
            setItems([]);
        }
    }, [doctorData]);

    const emitChange = (updatedItems) => {
        const jsonString = JSON.stringify(updatedItems);
        if (jsonString !== lastSerialized.current) {
            setItems(updatedItems);
            lastSerialized.current = jsonString;
            onChange && onChange({ target: { name: "education_qualification", value: jsonString } });
        }
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { year: '', university: '', description: '' }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Educational Qualifications</h5>
                <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
            </div>
            <div className="card-body">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card card-item shadow-sm mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <h6>Qualification #{index + 1}</h6>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeItem(index)}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Year</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.year}
                                            onChange={(e) =>
                                                handleItemChange(index, 'year', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">University</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.university}
                                            onChange={(e) =>
                                                handleItemChange(index, 'university', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            value={item.description}
                                            onChange={(e) =>
                                                handleItemChange(index, 'description', e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EducationQualification;
