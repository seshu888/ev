import React from "react";
import "./clients.css";
import relianceImg from "../../assets/reliance.jpeg";

const Clients = () => {
  return (
    <section className="clients" id="clients">
      <div className="clients-container">
        <div className="clients-left">
          <div className="clients-content">
            <span className="clients-label">OUR TRUSTED CLIENTS</span>
            <h2 className="clients-title">
              Powering India's Leading Industries with Electric Innovation
            </h2>

            <p className="clients-description">
              Reliance Industries, one of India's largest conglomerates, has
              partnered with us to revolutionize their agricultural operations.
              Our electric tractors are helping them achieve their
              sustainability goals while maintaining peak operational efficiency
              across their vast farming initiatives.
            </p>

            <p className="clients-description">
              Through our cutting-edge electric vehicle technology, Reliance has
              reduced their carbon footprint by 60% in agricultural operations
              while improving productivity and reducing operational costs. This
              partnership demonstrates the scalability and reliability of our
              green solutions for enterprise-level agricultural transformation.
            </p>

            <button className="clients-btn">View All Clients</button>
          </div>
        </div>

        <div className="clients-right">
          <div className="image-container">
            <img
              src={relianceImg}
              alt="Reliance Industries using Lakshmi Infra Electric Tractors"
              className="clients-img"
            />
            <div className="client-badge">
              <span className="client-logo">RELIANCE</span>
              <span className="partnership-text">
                Trusted Partner Since 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
