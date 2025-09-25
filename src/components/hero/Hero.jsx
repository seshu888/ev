import React from "react";
import "./hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Powering the Future of Farming with Electric Vehicles</h1>
        <p>
          Our advanced electric tractors and trolleys are built to deliver
          unmatched performance, zero emissions, and lower operating costs.
          Designed for modern farmers and transporters, we combine cutting-edge
          technology with rugged reliability to create sustainable solutions
          that drive productivity while protecting the environment.
        </p>
        <button className="btn">
          Explore more{" "}
          <img src={darkArrow} alt="" className="more-right-arrow" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
