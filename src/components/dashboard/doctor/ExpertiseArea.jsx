import React, {useEffect, useState} from 'react';

function ExpertiseArea({expertiseData,onChange}) {
    const [items, setItems] = useState([]);
    const data = expertiseData
    useEffect(() => {
        try {
            let cleaned = data;

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
    }, [data]);


    const emitChange = (updatedItems) => {
        setItems(updatedItems);
        const jsonString = JSON.stringify(updatedItems);
        onChange && onChange({ target: { name: "expertise_area", value: jsonString } });
    };

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        emitChange(updated);
    };

    const addNewItem = () => {
        emitChange([...items, { content:"" }]);
    };

    const removeItem = (index) => {
        emitChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Expertise Area</h5>
                <button className="btn btn-sm btn-primary" onClick={addNewItem}>+ Add</button>
            </div>
            <div className="card-body">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-md-12 " key={index}>
                            <div className="mb-3 d-flex">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={item.content}
                                    onChange={(e) =>
                                        handleItemChange(index, 'content', e.target.value)
                                    }
                                />
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => removeItem(index)}
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExpertiseArea;