'use client';

import React, { useEffect, useState } from 'react';

async function getAllDepartmentData() {
    try {
        const res = await fetch('/api/dashboard/department');
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return [];
        }
        return data.data;
    } catch (error) {
        return [];
    }
}

function SelectDepartment({ departmentId, onChange }) {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            const data = await getAllDepartmentData();
            setDepartments(data);
        };
        fetchDepartments();
    }, []);

    const handleChange = (e) => {
        if (onChange) {
            onChange(e); // forward event to parent
        }
    };

    return (
        <div className="mb-3">
            <label className="form-label">Department</label>
            <select
                className="form-select"
                name="departmentId"
                value={departmentId || ''}
                onChange={handleChange}
            >
                <option value="">Select Department</option>
                {departments.map((dep) => (
                    <option key={dep.id} value={dep.id}>
                        {dep.dep_name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectDepartment;
