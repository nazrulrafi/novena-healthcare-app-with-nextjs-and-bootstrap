import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function AddingMenu() {
    const [group, setGroup] = useState({
        title: '',
        items: [{ name: '', link: '' }],
    });

    const addNewItem = () => {
        setGroup({
            ...group,
            items: [...group.items, { name: '', link: '' }],
        });
    };

    const updateItem = (index, key, value) => {
        const updated = [...group.items];
        updated[index][key] = value;
        setGroup({ ...group, items: updated });
    };

    const removeItem = (index) => {
        const updated = [...group.items];
        updated.splice(index, 1);
        setGroup({ ...group, items: updated });
    };

    const handleSave = async () => {
        if (!group.title.trim()) {
            alert("Menu group title is required.");
            return;
        }

        const validItems = group.items.filter(item => item.name.trim() && item.link.trim());
        if (validItems.length === 0) {
            alert("At least one valid menu item is required.");
            return;
        }
        const payload = {
            title: group.title.trim(),
            items: validItems,
        };

        try {
            // Send the payload to your POST API route
            const response = await fetch('/api/dashboard/menus', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                toast('Menu inserted successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });

                // Reset the form
                setGroup({
                    title: '',
                    items: [{ name: '', link: '' }],
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // Match toast duration
            } else {
                alert('Error saving menu group: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save menu group');
        }
    };



    return (
        <div className="w-50">
            <h4>Add Menu Group</h4>
            <div className="card mb-3">
                <div className="card-body">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Menu Group Title"
                        value={group.title}
                        onChange={(e) => setGroup({ ...group, title: e.target.value })}
                    />

                    {group.items.map((item, index) => (
                        <div key={index} className="form-row mb-2">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Menu Name"
                                    value={item.name}
                                    onChange={(e) => updateItem(index, 'name', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Menu Link"
                                    value={item.link}
                                    onChange={(e) => updateItem(index, 'link', e.target.value)}
                                />
                            </div>
                            <div className="col-auto">
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeItem(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    <button className="btn btn-primary btn-sm mr-2" onClick={addNewItem}>
                        + Add Item
                    </button>
                </div>
            </div>

            <button className="btn btn-success" onClick={handleSave}>💾 Save Group</button>
        </div>
    );
}

export default AddingMenu;
