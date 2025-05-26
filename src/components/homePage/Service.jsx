"use client"
import React, {useEffect, useState} from 'react';
import ServiceItem from "@/components/homePage/ServiceItem.jsx";


function Service({homeServiceSecTitle,homeServiceSecDecription,homeAllServices}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            let cleaned = homeAllServices;

            // Fix double-encoded JSON string
            if (typeof cleaned === 'string' && cleaned.startsWith("'") && cleaned.endsWith("'")) {
                cleaned = cleaned.slice(1, -1); // remove outer single quotes
            }

            const parsed = JSON.parse(cleaned);
            if (Array.isArray(parsed)) {
                setItems(parsed);
            }
        } catch {
            setItems([]);
        }
    }, [homeAllServices]);
    return (
        <section className="section service gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2 dangerouslySetInnerHTML={{ __html: homeServiceSecTitle }} />
                            <div className="divider mx-auto my-4"></div>
                            <p dangerouslySetInnerHTML={{ __html: homeServiceSecDecription }} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {items.map((item, index) => (
                        <ServiceItem title={item.title} icon={item.icon} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Service;