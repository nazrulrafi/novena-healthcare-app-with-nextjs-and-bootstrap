"use client";
import React, { useEffect, useState } from 'react';
import AddingMenu from "@/components/dashboard/menu/AddingMenu.jsx";
import ShowingAndEditMenu from "@/components/dashboard/menu/ShowingAndEditMenu.jsx";

const MenuManager = () => {

    return (
        <div className="container mt-4">
            <h2>Menu Manager</h2>
            <div className="d-flex gap-4">
                {/* LEFT COLUMN: Add New Group */}

                <AddingMenu/>
                {/* RIGHT COLUMN: Show & Edit Existing */}
                <ShowingAndEditMenu/>
            </div>
        </div>
    );
};

export default MenuManager;
