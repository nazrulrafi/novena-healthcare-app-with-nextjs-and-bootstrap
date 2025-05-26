import React from 'react';

function Testimonials({leftImg,testimonialData}) {
    const serviceItem = testimonialData.find(item => item.metaKey === 'all_testimonials');
    const testimonials = serviceItem ? JSON.parse(serviceItem.value) : [];
    return (
        <>
            <section className="section testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="section-title">
                                <h2 className="mb-4">What they say about us</h2>
                                <div className="divider  my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 testimonial-wrap offset-lg-6">
                            {testimonials.map((testimonial,ind) => (
                                <div className="testimonial-block" key={ind}>
                                    <div className="client-info ">
                                        <h4>{testimonial.designation}</h4>
                                        <span>{testimonial.name}</span>
                                    </div>
                                    <p>
                                        {testimonial.testimonial}
                                    </p>
                                    <i className="icofont-quote-right"></i>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Testimonials;