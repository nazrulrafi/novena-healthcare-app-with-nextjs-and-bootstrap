'use client';

import React, { useState } from 'react';
import BannerSec from "@/components/dashboard/pages/home/BannerSec.jsx";
import FeatureSec from "@/components/dashboard/pages/home/FeatureSec.jsx";
import AboutSec from "@/components/dashboard/pages/home/AboutSec.jsx";
import {toast} from "react-toastify";
import ClientCountSec from "@/components/dashboard/pages/home/ClientCountSec.jsx";
import ServicesSec from "@/components/dashboard/pages/home/ServicesSec.jsx";
import AppointmentSec from "@/components/dashboard/pages/home/AppointmentSec.jsx";
import TestimonialSec from "@/components/dashboard/pages/home/TestimonialSec.jsx";
import ClientLogos from "@/components/dashboard/pages/home/ClientLogos.jsx";

export default function HomePageClient({ initialHomeData,justClick }) {
    const [homeData, setHomeData] = useState(initialHomeData);

    const handleHomeChange = (e) => {
        const { name, value } = e.target;
        setHomeData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/dashboard/pages/home`, {
                method: "PUT", // Use PUT for update
                headers: {
                    "Content-Type": "application/json", // Specify content type as JSON
                },
                body: JSON.stringify(homeData), // Send homeData as JSON
            });

            const responseData = await res.json();
            if (!res.ok) {
                throw new Error(`Failed to save data. Status: ${res.status}`);
            }

            // Handle the response data
            if (!responseData || responseData.message === "fail") {
                return null; // Return null if data is not found
            }
            if (responseData.status === 200) {
                toast('Page updated successfully', {
                    position: "top-center",
                    autoClose: 1500,
                });
            }

        } catch (error) {
            return null; // Handle any errors here
        }
    };



    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-6">
                    <h2>Home Page</h2>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BannerSec data={homeData} onChange={handleHomeChange} />
                    <FeatureSec data={homeData} onChange={handleHomeChange}/>
                    <AboutSec data={homeData} onChange={handleHomeChange}/>
                    <ClientCountSec data={homeData.home_client_count} onChange={handleHomeChange}/>
                    <ServicesSec data={homeData} onChange={handleHomeChange}/>
                    <AppointmentSec data={homeData} onChange={handleHomeChange}/>
                    <TestimonialSec data={homeData} onChange={handleHomeChange}/>
                    <ClientLogos data={homeData} onChange={handleHomeChange}/>
                </div>
            </div>
        </div>
    );
}
