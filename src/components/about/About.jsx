import React from "react";
import "./about.css";
import aboutImg from "../../assets/tractor.jpeg";

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="image-container">
            <img
              src={aboutImg}
              alt="Electric Tractor - Shree Lakshmi Infra"
              className="about-img"
            />
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <span className="about-label">ABOUT LAKSHMI INFRA</span>
            <h2 className="about-title">
              Empowering Farmers with Smarter, Greener Solutions
            </h2>

            <p className="about-description">
              Embark on a transformative journey with our comprehensive electric
              vehicle solutions. Our cutting-edge technology is designed to
              empower farmers and businesses with the knowledge, efficiency, and
              sustainability needed to excel in the dynamic field of agriculture
              and transportation.
            </p>

            <p className="about-description">
              With a focus on innovation, eco-friendly solutions, and
              personalized support, our electric vehicles prepare progressive
              farmers and entrepreneurs to make a meaningful impact in their
              fields, communities, and the environment.
            </p>

            <button className="about-btn">Explore Our Vehicles</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
