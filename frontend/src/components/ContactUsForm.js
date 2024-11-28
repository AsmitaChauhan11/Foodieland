import React, { useState } from "react";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        enquiryType: "Advertising",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form Submitted Successfully!");
        setFormData({
            name: "",
            email: "",
            subject: "",
            enquiryType: "Advertising",
            message: ""
        });
    };

    return (
        <div className="contact-section">
            <h2>Contact us</h2>
            <div className="contact-form-container">
                <div className="contact-image">
                    <img src="/images/chef.png" alt="Chef giving a thumbs up" />
                </div>
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name..."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address..."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter subject..."
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Enquiry Type</label>
                            <select
                                name="enquiryType"
                                value={formData.enquiryType}
                                onChange={handleChange}
                            >
                                <option value="Advertising">Advertising</option>
                                <option value="Support">Support</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="messages form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your messages..."
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
