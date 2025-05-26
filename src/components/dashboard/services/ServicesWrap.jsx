'use client';

import React, { useState } from 'react';
import {toast} from "react-toastify";

import AllServices from "@/components/dashboard/services/AllServices.jsx";

export default function ServicesWrap({ initialData }) {
    const [servicesData, setServicesData] = useState(initialData);

    const handleHomeChange = (e) => {
        const { name, value } = e.target;
        setServicesData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/dashboard/services`, {
                method: "PUT", // Use PUT for update
                headers: {
                    "Content-Type": "application/json", // Specify content type as JSON
                },
                body: JSON.stringify(servicesData), // Send homeData as JSON
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
            console.log(responseData.data)
        } catch (error) {
            return null; // Handle any errors here
        }
    };


    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-6">
                    <h2>Service Page</h2>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <AllServices data={servicesData} onChange={handleHomeChange} />
                </div>
            </div>
        </div>
    );
}
