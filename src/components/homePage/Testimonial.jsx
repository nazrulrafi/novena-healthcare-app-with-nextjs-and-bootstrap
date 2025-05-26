"use client"
import React, {useEffect, useState} from 'react';

function Testimonial({homeTestimonialTitle,homeTestimonialDescription,allTestimonials}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(allTestimonials);
        try {
            let cleaned = allTestimonials;

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
    }, [allTestimonials]);
    return (
        <section className="section testimonial-2 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <h2>{homeTestimonialTitle}</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>{homeTestimonialDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 testimonial-wrap-2">
                        {items.map((item, index) => (
                            <div className="testimonial-block style-2  gray-bg">
                                <i className="icofont-quote-right"></i>

                                <div className="testimonial-thumb">
                                    <img src={item.avatar} alt="" className="img-fluid"/>
                                </div>

                                <div className="client-info ">
                                    <h4>{item.name}</h4>
                                    <span>{item.designation}</span>
                                    <p dangerouslySetInnerHTML={{__html: item.testimonial}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;