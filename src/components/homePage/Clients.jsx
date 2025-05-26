"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";

function Clients({homeClientLogoSecTitle,homeClientLogoSecDescription,homeClientAllLogos}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            let cleaned = homeClientAllLogos;

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
    }, [homeClientAllLogos]);
    return (
        <section className="section clients">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <h2>{homeClientLogoSecTitle}</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p dangerouslySetInnerHTML={{ __html: homeClientLogoSecDescription }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row clients-logo">
                    {items.map((item, index) => (
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <Link href={item.link} target="_blank" >
                                    <img src={item.logo} alt="" className="img-fluid"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;