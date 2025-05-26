import React from 'react';
import ServicesWrap from "@/components/dashboard/services/ServicesWrap.jsx";

async function getServicesData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/services`, {
            next: { revalidate: 10 }, // revalidates every 10 seconds
        });
        const servicesPageMeta = await res.json();
        if (!servicesPageMeta || servicesPageMeta.message === "fail") {
            return []; // Return null if data is not found
        }
        return servicesPageMeta.data;
    } catch (error) {
        return null;
    }
}

export default async function Page() {
    const result = await getServicesData();
    // Build initial banner data
    const initialData = {
        all_services:"",
    }
    if (result) {
        result.forEach(item => {
            initialData[item.metaKey.trim()] = item.value;
        });
    }

    return (
        <ServicesWrap initialData={initialData} />
    );
}

