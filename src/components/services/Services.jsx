import React from "react";
import "./services.css";

const Services = () => {
  const services = [
    {
      icon: "🚗",
      title: "EV & Auto Sales",
      desc: "Wide range of Electric Vehicles, Autos, and Tractors designed for performance, reliability, and sustainability.",
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      desc: "Professional servicing and on-time support to keep your vehicles running smoothly.",
    },
    {
      icon: "⚡",
      title: "Charging Solutions",
      desc: "Helping you set up fast and affordable EV charging points at your business or home.",
    },
    {
      icon: "💰",
      title: "Financing Options",
      desc: "Easy loan and EMI options to make your purchase hassle-free and affordable.",
    },
    // {
    //   icon: "🔧",
    //   title: "Spare Parts",
    //   desc: "Genuine spare parts and accessories to ensure long-lasting performance.",
    // },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
