"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/master/Loader.jsx';
import AllQuery from "@/components/dashboard/query/AllQuery.jsx";

async function getAllQuery() {
    try {
        const res = await fetch('/api/dashboard/query');
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
    const [contacts, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAllQuery();
            setContact(data);
            setLoading(false);
        };

        fetchAppointments();
    }, []);

    return (
        <>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <AllQuery data={contacts}/>
            )}
        </>
    );
}

export default Page;
