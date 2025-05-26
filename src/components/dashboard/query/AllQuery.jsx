import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

function AllQuery({ data }) {
    const [appointments, setAppointments] = useState(data);

    const handleConfirmToggle = async (id, currentValue) => {
        try {
            const res = await fetch('/api/dashboard/query', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, confirm: !currentValue }),
            });

            const result = await res.json();
            if (result.success) {
                const updated = appointments.map((item) =>
                    item.id === id ? { ...item, confirm: !currentValue } : item
                );
                setAppointments(updated);
                toast.success("Appointment updated successfully!");
            } else {
                alert("Failed to update status");
            }
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = confirm("Are you sure you want to delete this appointment?");
        if (!confirmed) return;

        try {
            const res = await fetch('/api/dashboard/query', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            const result = await res.json();
            if (result.success) {
                const filtered = appointments.filter(item => item.id !== id);
                setAppointments(filtered);
                toast.success("Appointment deleted successfully!");
            } else {
                alert("Failed to delete appointment");
            }
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    return (
        <div className="container">
            <h4 className="text-center mt-3 mb-3">All Contact</h4>

            {appointments.length === 0 ? (
                <div className="alert alert-info text-center">
                    No contact found.
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-light">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Confirm</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {appointments.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.phone}</td>
                                <td>{item.message}</td>
                                <td className="text-center">
                                    <input
                                        type="checkbox"
                                        checked={item.confirm}
                                        onChange={() =>
                                            handleConfirmToggle(item.id, item.confirm)
                                        }
                                    />
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="btn btn-sm btn-danger"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AllQuery;
