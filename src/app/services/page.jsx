export const dynamic = 'force-dynamic'; // ✅ Add this

import React from 'react';
import Header from "@/components/master/Header.jsx";
import PageTitle from "@/components/master/PageTitle.jsx";
import Footer from "@/components/master/Footer.jsx";
import Service from "@/components/servicePage/Service";
import Cta from "@/components/servicePage/Cta";

async function getServices() {
    try {
        const res = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/api/services`, {
            cache: 'no-store', // disable caching
        });
        const data = await res.json();

        if (!data || data.message === 'fail') {
            return null;
        }

        return data.data;
    } catch (err) {
        console.error("Failed to fetch department:", err);
        return null;
    }
}
async function ServicePage(props) {
    const services = await getServices();
    return (
        <>
            <Header/>
            <PageTitle title="What We Do"/>
            <Service data={services} />
            <Cta/>
            <Footer/>
        </>
    );
}

export default ServicePage;