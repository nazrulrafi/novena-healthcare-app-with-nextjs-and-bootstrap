"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import { getCloudImgUrl } from "@/lib/actions.js";

function ModalImgPicker({ imgUrl, onChange, fieldName }) {
    const [previewUrl, setPreviewUrl] = useState(imgUrl);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = await getCloudImgUrl(file);
            setPreviewUrl(url);
            // ❗Manually fire a change event that mimics a real input
            const fakeEvent = {
                target: {
                    name: fieldName,
                    value: url,
                },
            };
            onChange(fakeEvent);
        }
    };

    return (
        <div className="img-picker ">
            <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                className="form-control"
                name={fieldName}
                onChange={handleFileChange}
            />
            <div className="image-preview mt-3">
                <div style={{position: "relative", width: "200px", height: "150px"}}>
                    {previewUrl ? (
                        <Image src={previewUrl} alt="Selected image" fill style={{objectFit: 'cover'}}/>
                    ) : (
                        <div style={{width: '100%', height: '100%', background: '#eee'}}/>
                    )}

                </div>
            </div>

        </div>
    );
}

export default ModalImgPicker;
