import React from "react";
import tractor from "../../assets/tractor.jpeg";
import auto from "../../assets/auto1.jpeg";
import tractor2 from "../../assets/tractor2.jpeg";
import "./model.css";

const Models = () => {
  const modelData = [
    {
      id: 1,
      image: tractor,
      title: "Electric Tractor Pro",
      description: "Heavy-duty farming solution",
      category: "Tractors",
    },
    {
      id: 2,
      image: auto,
      title: "EV Auto Rickshaw",
      description: "Urban transport solution",
      category: "Autos",
    },
    {
      id: 3,
      image: tractor,
      title: "Electric Mini Truck",
      description: "Commercial cargo vehicle",
      category: "Trucks",
    },
    {
      id: 4,
      image: tractor2,
      title: "Smart Farm Vehicle",
      description: "Precision agriculture tool",
      category: "Specialty",
    },
  ];

  return (
    <div className="campus">
      <div className="models-header">
        <span className="models-subtitle">MODELS</span>
        <h2 className="models-title">Models Available Here</h2>
      </div>
      <div className="gallery">
        {modelData.map((model, index) => (
          <div key={model.id} className={`gallery-item item-${index + 1}`}>
            <div className="image-container">
              <img src={model.image} alt={model.title} />
              {/* Desktop hover overlay - only shows on desktop */}
              <div className="image-overlay desktop-overlay">
                <div className="overlay-content">
                  <span className="category-badge">{model.category}</span>
                  <h3 className="model-title">{model.title}</h3>
                  <p className="model-description">{model.description}</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
            {/* Mobile info section - always visible below image on mobile */}
            <div className="mobile-info">
              <span className="category-badge mobile-badge">
                {model.category}
              </span>
              <h3 className="model-title mobile-title">{model.title}</h3>
              <p className="model-description mobile-description">
                {model.description}
              </p>
              <button className="view-details-btn mobile-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
