import React from 'react';

function ContactForm(props) {
    return (
        <section className="contact-form-wrap section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2 className="text-md mb-2">Contact us</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique,
                                excepturi mollitia sit
                                perferendis maiores ratione aliquam?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form id="contact-form" className="contact__form " method="post" action="mail.php">
                            <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-success contact__msg" style={{display: "none"}}
                                         role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="name" id="name" type="text" className="form-control"
                                               placeholder="Your Full Name"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="email" id="email" type="email" className="form-control"
                                               placeholder="Your Email Address" required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="subject" id="subject" type="text" className="form-control"
                                               placeholder="Your Query Topic" required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="phone" id="phone" type="text" className="form-control"
                                               placeholder="Your Phone Number" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group-2 mb-4">
                                <textarea name="message" id="message" className="form-control" rows="8"
                                          placeholder="Your Message" required></textarea>
                            </div>

                            <div>
                                <input className="btn btn-main btn-round-full" name="submit" type="submit"
                                       value="Send Messege"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;