import React from "react";
import "./founder.css";
import founder from "../../assets/founder2.jpg";
import founder1 from "../../assets/founder.jpg";

const foundersData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Founder & CEO",
    location: "Ongole, Andhra Pradesh",
    phone: "+91 98765 43210",
    image: founder,
    description:
      "Visionary leader with 15+ years in sustainable technology. Passionate about revolutionizing agriculture through electric vehicles and eco-friendly solutions.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    designation: "Co-Founder & CTO",
    location: "Tenali, Andhra Pradesh",
    phone: "+91 98765 43211",
    image: founder1,
    description:
      "Tech innovator specializing in electric vehicle technology. Leading our R&D efforts to bring cutting-edge sustainable transportation solutions to farmers.",
  },
];

const Founders = () => {
  return (
    <section className="founders" id="founders">
      <div className="founders-container">
        {/* Header */}
        <div className="founders-header">
          <p className="founders-subtitle">LEADERSHIP</p>
          <h2 className="founders-title">Meet Our Founders</h2>
        </div>

        {/* Founders Content */}
        <div className="founders-content">
          {/* First Founder Card */}
          <div className="founder-card">
            <div className="founder-left">
              <div className="founder-image-container">
                <img
                  src={foundersData[0].image}
                  alt={foundersData[0].name}
                  className="founder-image"
                />
              </div>
            </div>
            <div className="founder-right">
              <div className="founder-info">
                <h3 className="founder-name">{foundersData[0].name}</h3>
                <p className="founder-designation">
                  {foundersData[0].designation}
                </p>
                <div className="founder-contact">
                  <p className="founder-location">
                    📍 {foundersData[0].location}
                  </p>
                  <p className="founder-phone">📞 {foundersData[0].phone}</p>
                </div>
                <p className="founder-description">
                  {foundersData[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Founder Card */}
          <div className="founder-card">
            <div className="founder-left">
              <div className="founder-image-container">
                <img
                  src={foundersData[1].image}
                  alt={foundersData[1].name}
                  className="founder-image"
                />
              </div>
            </div>
            <div className="founder-right">
              <div className="founder-info">
                <h3 className="founder-name">{foundersData[1].name}</h3>
                <p className="founder-designation">
                  {foundersData[1].designation}
                </p>
                <div className="founder-contact">
                  <p className="founder-location">
                    📍 {foundersData[1].location}
                  </p>
                  <p className="founder-phone">📞 {foundersData[1].phone}</p>
                </div>
                <p className="founder-description">
                  {foundersData[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
