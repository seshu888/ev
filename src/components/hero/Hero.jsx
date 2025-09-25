import React from "react";
import "./hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Driving the Future with Electric Autos & Tractors</h1>
        <p>
          Discover our comprehensive range of electric vehicles designed for
          both urban mobility and agricultural excellence. Our electric autos
          provide eco-friendly transportation solutions for city commutes, while
          our powerful electric tractors revolutionize farming operations. From
          efficient passenger autos to heavy-duty agricultural tractors, we
          deliver cutting-edge technology that reduces operational costs by up
          to 60%, ensures zero emissions, and provides the reliability you need
          for everyday transport and farm productivity.
        </p>
        <button className="btn">
          Explore Vehicles{" "}
          <img src={darkArrow} alt="" className="more-right-arrow" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
