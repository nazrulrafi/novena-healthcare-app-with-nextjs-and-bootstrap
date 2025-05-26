'use client';
import React, {useEffect, useState} from 'react';

function AppointmentForm(props) {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [notice, setNotice] = useState('');

    const [formData, setFormData] = useState({
        departmentName: '',
        doctorName: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        message: ''
    });

    // Fetch departments on load
    useEffect(() => {
        fetch('/api/departments')
            .then(res => res.json())
            .then(data => setDepartments(data))
            .catch(err => console.error('Failed to load departments:', err));
    }, []);

    const handleDepartmentChange = async (e) => {
        const selectedId = e.target.value;
        const selectedDep = departments.find(dep => dep.id === parseInt(selectedId));
        setFormData(prev => ({
            ...prev,
            departmentName: selectedDep?.dep_name || '',
            doctorName: ''
        }));

        if (selectedId) {
            const res = await fetch(`/api/doctors?departmentId=${selectedId}`);
            const data = await res.json();
            setDoctors(data);
        } else {
            setDoctors([]);
        }
    };

    const handleDoctorChange = (e) => {
        const selectedId = e.target.value;
        const selectedDoc = doctors.find(doc => doc.id === parseInt(selectedId));
        setFormData(prev => ({
            ...prev,
            doctorName: selectedDoc?.name || ''
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const missingFields = Object.entries(formData).filter(([_, value]) => !value.trim());
        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.map(([key]) => key).join(', ')}`);
            return;
        }

        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                setNotice('We will confirm you shortly.');
                alert('Appointment booked successfully!');
                setFormData({
                    departmentName: '',
                    doctorName: '',
                    date: '',
                    time: '',
                    name: '',
                    phone: '',
                    message: ''
                });

                // Auto-hide notice after 5 seconds
                setTimeout(() => setNotice(''), 10000);
            } else {
                alert(result.message || 'Failed to book appointment.');
            }
        } catch (err) {
            console.error('Submit error:', err);
            alert('Error occurred while submitting.');
        }
    };
    return (
        <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
            <h2 className="mb-2 title-color">Book an appointment</h2>
            <p className="mb-4">
                Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit.
            </p>
            <form className="appoinment-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <select className="form-control" onChange={handleDepartmentChange}>
                                <option value="">Choose Department</option>
                                {departments.map(dep => (
                                    <option key={dep.id} value={dep.id}>{dep.dep_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <select className="form-control" onChange={handleDoctorChange} disabled={!doctors.length}>
                                <option value="">Select Doctor</option>
                                {doctors.map(doc => (
                                    <option key={doc.id} value={doc.id}>{doc.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <select
                                name="time"
                                className="form-control"
                                value={formData.time}
                                onChange={handleChange}
                            >
                                <option value="">Select Time Slot</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                                <option value="05:00 PM">05:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                name="phone"
                                type="number"
                                className="form-control"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group-2 mb-4">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                </div>

                <button type="submit" className="btn btn-main btn-round-full">
                    Make Appointment <i className="icofont-simple-right ml-2"></i>
                </button>
            </form>

            {/* Notice Message */}
            {notice && (
                <div className="alert alert-success mt-4" role="alert">
                    {notice}
                </div>
            )}
        </div>
    );
}

export default AppointmentForm;