import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2 className="contact-title">Let's Start a Conversation</h2>
          <p className="contact-subtitle">
            Ready to transform your farming or transportation with our
            eco-friendly vehicles? We're here to guide you every step of the
            way.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="contact-grid">
          {/* Left Side - Contact Info Cards */}
          <div className="contact-info-section">
            {/* Office Info Card */}
            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Visit Our Office</h3>
                <p>
                  Shree Lakshmi Infra
                  <br />
                  Hyderabad, Telangana
                  <br />
                  India - 500001
                </p>
              </div>
            </div>

            {/* Phone Info Card */}
            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>
                  +91-9876543210
                  <br />
                  +91-9876543211
                  <br />
                  Mon-Sat: 9AM-7PM
                </p>
              </div>
            </div>

            {/* Email Info Card */}
            <div className="info-card">
              <div className="info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>
                  info@shreelakshmiinfra.com
                  <br />
                  sales@shreelakshmiinfra.com
                  <br />
                  support@shreelakshmiinfra.com
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="contact-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Store Locations</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Go Electric?</h3>
            <p>
              Visit our showroom to experience our electric vehicles firsthand
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Book Test Drive</button>
              <button className="cta-btn secondary">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
