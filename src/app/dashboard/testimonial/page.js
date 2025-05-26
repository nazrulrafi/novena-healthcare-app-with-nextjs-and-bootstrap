import React from 'react';

import TestimonialPageClient from "@/components/dashboard/testimonial/TestimonialPageClient.jsx";

async function getTestimonialMetaData() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/dashboard/testimonial`, {
            next: { revalidate: 10 }, // revalidates every 10 seconds
        });
        const testimonialPageMeta = await res.json();
        if (!testimonialPageMeta || testimonialPageMeta.message === "fail") {
            return []; // Return null if data is not found
        }
        return testimonialPageMeta.data;
    } catch (error) {
        return null;
    }
}

export default async function Page() {
    const result = await getTestimonialMetaData();

    // Build initial banner data
    const initialData = {
        all_testimonials:"",
    }
    if (result) {
        result.forEach(item => {
            initialData[item.metaKey.trim()] = item.value;
        });
    }

    return (
       <TestimonialPageClient initialData={initialData} />
    );
}

