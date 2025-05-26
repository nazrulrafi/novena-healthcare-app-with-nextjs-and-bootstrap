"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCloudImgUrl } from "@/lib/actions.js";

function ClientLogoItem({ onChange, index, avatar }) {
    const [previewUrl, setPreviewUrl] = useState(avatar || '');

    useEffect(() => {
        setPreviewUrl(avatar || '');
    }, [avatar]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = await getCloudImgUrl(file);
            setPreviewUrl(url);
            onChange(index, 'logo', url);
        }
    };

    return (
        <div className="img-picker d-flex align-items-center justify-content-between">
            <div className="image-preview mr-4">
                <div style={{ position: "relative", width: "100px", height: "100px", borderRadius: "50%", overflow: "hidden" }}>
                    {previewUrl ? (
                        <Image
                            src={previewUrl}
                            alt="Avatar preview"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: '#eee' }} />
                    )}
                </div>
            </div>
            <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                className="form-control"
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ClientLogoItem;
