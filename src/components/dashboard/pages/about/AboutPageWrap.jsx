'use client';

import React, { useState } from 'react';
import {toast} from "react-toastify";
import BasicInfo from "@/components/dashboard/pages/about/BasicInfo.jsx";
import DoctorAchievementImages from "@/components/dashboard/pages/about/doctorAchievementImages.jsx";

export default function AboutPageWrap({ initialAboutData,justClick }) {
    const [aboutData, setAboutData] = useState(initialAboutData);

    const handleAboutChange = (e) => {
        const { name, value } = e.target;
        setAboutData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/dashboard/pages/about`, {
                method: "PUT", // Use PUT for update
                headers: {
                    "Content-Type": "application/json", // Specify content type as JSON
                },
                body: JSON.stringify(aboutData), // Send homeData as JSON
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
                    <h2>About Page</h2>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BasicInfo data={aboutData} onChange={handleAboutChange}/>
                    <DoctorAchievementImages data={aboutData} onChange={handleAboutChange}/>
                </div>
            </div>
        </div>
    );
}
