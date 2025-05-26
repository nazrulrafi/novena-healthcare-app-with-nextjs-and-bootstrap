"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/master/Loader.jsx';
import AllAppointment from '@/components/dashboard/appointment/AllAppointment.jsx';

async function getAllAppointmentData() {
    try {
        const res = await fetch('/api/dashboard/appointment');
        const data = await res.json();
        if (!data || data.message === 'fail') {
            return [];
        }
        return data.data;
    } catch (error) {
        console.error('Failed to fetch appointment data:', error);
        return [];
    }
}

function Page() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAllAppointmentData();
            setAppointments(data);
            setLoading(false);
        };

        fetchAppointments();
    }, []);

    return (
        <>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <AllAppointment data={appointments} />
            )}
        </>
    );
}

export default Page;
