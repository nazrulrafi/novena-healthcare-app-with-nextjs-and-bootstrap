"use client"
import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import ClientCounter from "@/components/master/ClientCounter.jsx";

function ClientCount({homeClientCount}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            let cleaned = homeClientCount;

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
    }, [homeClientCount]);

    return (
        <section className="cta-section ">
            <div className="container">
                <div className="cta position-relative">
                    <div className="row">
                        {items.map((item, index) => (
                            <ClientCounter title={item.title} count={item.count}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientCount;