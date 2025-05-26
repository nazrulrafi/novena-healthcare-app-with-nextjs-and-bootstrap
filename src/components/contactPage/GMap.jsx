import React from 'react';

function GMap() {
    return (
        <div className="ratio ratio-16x9 w-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.61522570817!2d91.81903704999999!3d22.35739545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1748185697237!5m2!1sen!2sbd"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}

export default GMap;
