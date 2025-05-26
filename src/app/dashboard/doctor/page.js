'use client';

import React, { useEffect, useState } from 'react';
import Loader from "@/components/master/Loader.jsx";
import AllDoctors from "@/components/dashboard/doctor/AllDoctors.jsx";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";

// Prevent hydration mismatch by dynamic import
const EditDoctorModal = dynamic(() => import('@/components/dashboard/doctor/EditDoctorModal.jsx'), {
    ssr: false,
});

async function getAllDoctorsData() {
    try {
        const res = await fetch('/api/dashboard/doctor');
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return [];
        }
        return data.data;
    } catch (error) {
        return [];
    }
}

function Page() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const fetchDoctors = async () => {
            const data = await getAllDoctorsData();
            setDoctors(data);
            setLoading(false);
        };
        fetchDoctors();
    }, []);

    const handleEdit = (doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };

    // ✅ FIXED: updatedDoctor passed as argument
    const handleUpdate = (updatedDoctor) => {
        setDoctors((prev) =>
            prev.map(doc =>
                doc.id === updatedDoctor.id ? { ...doc, ...updatedDoctor } : doc
            )
        );
        toast.success("Doctor updated!",{
            autoClose: 1500,
        });
        setIsModalOpen(false);
    };

    const handleDelete = async (doctor) => {
        if (window.confirm(`Are you sure you want to delete ${doctor.name}?`)) {
            const id = doctor.id;
            try {
                const res = await fetch('/api/dashboard/doctor/doctorSingle', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({id:id}),
                })
                const data = await res.json();

                if (data.status === 200) {
                    toast('Doctor deleted successfully', {
                        position: "top-center",
                        autoClose: 1000,
                    });

                    setDoctors(prev => prev.filter(d => d.id !== doctor.id));
                } else {
                    alert(`Failed to delete: ${data.message}`);
                }
            } catch (err) {
                alert('Something went wrong.');
                console.error(err);
            }
        }
    };
    const handleView = (doctor) => {
        alert(`View ${doctor.name}`);
    };
    const handleClick = () => {
        router.push('/dashboard/doctor/addNewDoctor');
    };

    if (!mounted) return null;

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>All Doctors</h3>
                <button className="btn btn-primary" onClick={handleClick}>Add New</button>
            </div>
            {doctors.length > 0 ? (
                loading ? (
                    <Loader />
                ) : (
                    <AllDoctors
                        doctors={doctors}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                    />
                )
            ) : (
                <div className="text-center mt-5">
                    <h5>No doctors found.</h5>
                </div>
            )}



            {isModalOpen && selectedDoctor && (
                <EditDoctorModal
                    doctor={selectedDoctor}
                    onUpdate={handleUpdate}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Page;
