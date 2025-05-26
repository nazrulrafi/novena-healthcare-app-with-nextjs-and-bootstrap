import React from 'react';

function MakeAppointment(props) {
    return (
        <div className="sidebar-widget schedule-widget mb-3">
            <h5 className="mb-4">Time Schedule</h5>

            <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                    <span>Monday - Friday</span>
                    <span>9:00 - 17:00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                    <span>Saturday</span>
                    <span>9:00 - 16:00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                    <span>Sunday</span>
                    <span>Closed</span>
                </li>
            </ul>

            <div className="sidebar-contatct-info mt-4">
                <p className="mb-0">Need Urgent Help?</p>
                <h3>+23-4565-65768</h3>
            </div>
        </div>
    );
}

export default MakeAppointment;