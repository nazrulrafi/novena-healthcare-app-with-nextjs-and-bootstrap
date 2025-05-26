// pages/dashboard/index.js

'use client';

import React, { useEffect, useState } from 'react';

import AllDepartment from "@/components/dashboard/department/AllDepartment.jsx";
import Loader from "@/components/master/Loader.jsx";
import EditModal from "@/components/dashboard/department/EditModal.jsx";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

async function getAllDepartmentData() {
    try {
        const res = await fetch('/api/dashboard/department');
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return []; // Return empty array if data is not found
        }
        return data.data; // Return the department data
    } catch (error) {
        return []; // Return empty array in case of an error
    }
}



function Page() {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading status
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchDepartments = async () => {
            const data = await getAllDepartmentData();
            setDepartments(data);
            setLoading(false); // Data fetched, stop loading
        };

        fetchDepartments();
    }, []);

    const handleEdit = (dep) => {
        setSelectedDepartment(dep);
        setIsModalOpen(true);
    };

    const handleSave = (updatedDepartment) => {

        const updatedDepartments = departments.map((dep) =>
            dep.id === updatedDepartment.id ? updatedDepartment : dep
        );
        setDepartments(updatedDepartments);
    };
    const handleUpdate = (updatedDep) => {
        setDepartments((prev) =>
            prev.map(dep =>
                dep.id === updatedDep.id ? { ...dep, ...updatedDep } : dep
            )
        );
    };
    const handleDelete = async (dep) => {
        if (window.confirm(`Are you sure you want to delete ${dep.dep_name}?`)) {
            const id = dep.id;
            try {
                const res = await fetch('/api/dashboard/department/departmentSingle', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({id:id}),
                })
                const data = await res.json();

                if (data.status === 200) {
                    toast('Department deleted successfully', {
                        position: "top-center",
                        autoClose: 1000,
                    });

                    setDepartments(prev => prev.filter(d => d.id !== dep.id));
                } else {
                    alert(`Failed to delete: ${data.message}`);
                }
            } catch (err) {
                alert('Something went wrong.');
                console.error(err);
            }
        }
    };

    const handleView = (dep) => {
        alert(`View ${dep.dep_name}`);
    };



    const handleClick = () => {
        router.push('/dashboard/department/addNewDepartment');
    };
    return (
        <div className="container mt-4">
            <div className=" d-flex justify-content-between align-items-center mb-4">
                <h3>All Department</h3>
                <button type="submit" className="btn btn-primary float-end" onClick={handleClick}>Add New </button>
            </div>
            {loading ? (
                <Loader/>
            ) : (
                <AllDepartment
                    departments={departments}
                    onDelete={handleDelete}
                    onView={handleView}
                    onEdit={handleEdit}
                />
            )}


            {isModalOpen && selectedDepartment && (
                <EditModal
                    department={selectedDepartment}
                    onUpdate={handleUpdate}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Page;
