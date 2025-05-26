'use client';

import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Loader from '@/components/master/Loader';

const roles = ['SUBSCRIBER', 'EDITOR', 'ADMIN'];

function Page() {
    const [form, setForm] = useState({ fName: '', lName: '', email: '', password: '', role: '' });
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/dashboard/users');
            const json = await res.json();
            if (json.success) setUsers(json.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchUsers(); }, []);

    const handleSubmit = async () => {
        const method = editId ? 'PUT' : 'POST';
        const payload = editId ? { ...form, id: editId } : form;

        const res = await fetch('/api/dashboard/users', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const result = await res.json();
        if (result.success) {
            fetchUsers();
            setEditId(null);
            setForm({ fName: '', lName: '', email: '', password: '', role: '' });
        }
    };

    const handleEdit = (user) => {
        setForm(user);
        setEditId(user.id);
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this user?')) return;
        const res = await fetch('/api/dashboard/users', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        const result = await res.json();
        if (result.success) fetchUsers();
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-4">All Users</h4>

            <div className="mb-3 row">
                {['fName', 'lName', 'email', 'password'].map((field) => (
                    <div className="col-md-2 mb-2" key={field}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={field}
                            value={form[field]}
                            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        />
                    </div>
                ))}

                <div className="col-md-2 mb-2">
                    <select
                        className="form-control"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                    >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role.charAt(0) + role.slice(1).toLowerCase()}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-2 mb-2">
                    <button onClick={handleSubmit} className="btn btn-primary w-100">
                        {editId ? 'Update' : 'Add'}
                    </button>
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.length > 0 ? (
                            users.map((user, i) => (
                                <tr key={user.id}>
                                    <td>{i + 1}</td>
                                    <td>{user.fName}</td>
                                    <td>{user.lName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(user)}
                                        >
                                            <Pencil size={16} />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No users available.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Page;
