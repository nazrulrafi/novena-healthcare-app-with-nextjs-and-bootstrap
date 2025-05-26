'use client';
import React, { useState } from 'react';

function ContactForm() {
    const [form, setForm] = useState({
        name: '', email: '', subject: '', phone: '', message: '',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        const result = await res.json();

        if (result.success) {
            setSuccess(true);
            setForm({ name: '', email: '', subject: '', phone: '', message: '' });
        } else {
            setError(result.message || 'Failed to send message.');
        }
    };

    return (
        <section className="contact-form-wrap section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="text-md mb-2">Contact us</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p className="mb-5">Send us your message, we’ll get back to you shortly.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="contact__form">
                    {success && (
                        <div className="alert alert-success">Your message was sent successfully.</div>
                    )}
                    {error && (
                        <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <input name="name" type="text" className="form-control" placeholder="Your Full Name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <input name="email" type="email" className="form-control" placeholder="Your Email Address" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <input name="subject" type="text" className="form-control" placeholder="Your Query Topic" value={form.subject} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <input name="phone" type="text" className="form-control" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <textarea name="message" className="form-control" rows="6" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-main btn-round-full">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
