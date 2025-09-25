import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import image2 from "../../assets/ev-store.jpeg";
import "./store.css";

// Store data with detailed information
const storeData = {
  ongole: {
    id: "ongole",
    title: "Ongole",
    subtitle: "Srinivasa Store",
    address: "Main Road, Ongole, Andhra Pradesh, India - 523001",
    phone: "+91 9876543210",
    email: "ongole@srinivasastore.com",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
    manager: "Ramesh Kumar",
    description:
      "Our flagship store in Ongole offers the complete range of electric vehicles including tractors, bikes, and commercial vehicles. With state-of-the-art service facilities and expert staff.",
    services: [
      "Electric Vehicle Sales",
      "Service & Maintenance",
      "Spare Parts",
      "Test Drives",
      "Financing Assistance",
      "Insurance Support",
    ],
    images: [
      "/images/ongole-store-1.jpg",
      "/images/ongole-store-2.jpg",
      "/images/ongole-store-3.jpg",
    ],
  },
  markapuram: {
    id: "markapuram",
    title: "Markapuram",
    subtitle: "Venkateswara Store",
    address: "Gandhi Road, Markapuram, Andhra Pradesh, India - 523316",
    phone: "+91 9876543211",
    email: "markapuram@venkateswarastore.com",
    hours: "Mon-Sat: 9:30 AM - 7:30 PM, Sun: 10:00 AM - 5:00 PM",
    manager: "Venkat Reddy",
    description:
      "Located in the heart of Markapuram, our store specializes in electric tractors and farming equipment. Perfect for the agricultural community in the region.",
    services: [
      "Electric Tractor Sales",
      "Agricultural Equipment",
      "Service & Repair",
      "Farmer Training Programs",
      "Loan Assistance",
      "Extended Warranty",
    ],
    images: [
      "/images/markapuram-store-1.jpg",
      "/images/markapuram-store-2.jpg",
      "/images/markapuram-store-3.jpg",
    ],
  },
  tenali: {
    id: "tenali",
    title: "Tenali",
    subtitle: "Venkateswara Store",
    address: "Market Street, Tenali, Andhra Pradesh, India - 522201",
    phone: "+91 9876543212",
    email: "tenali@venkateswarastore.com",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: Closed",
    manager: "Srinivas Rao",
    description:
      "Our Tenali branch focuses on electric two-wheelers and commercial vehicles, serving the urban transportation needs of the growing city.",
    services: [
      "Electric Bikes & Scooters",
      "Commercial EVs",
      "Battery Service",
      "Quick Charging",
      "Trade-in Program",
      "Home Delivery",
    ],
    images: [
      "/images/tenali-store-1.jpg",
      "/images/tenali-store-2.jpg",
      "/images/tenali-store-3.jpg",
    ],
  },
  cheerala: {
    id: "cheerala",
    title: "Cheerala",
    subtitle: "Srinivasa Store",
    address: "Beach Road, Cheerala, Andhra Pradesh, India - 523157",
    phone: "+91 9876543213",
    email: "cheerala@srinivasastore.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 4:00 PM",
    manager: "Krishna Murthy",
    description:
      "Serving the coastal region of Cheerala, our store offers eco-friendly electric vehicles perfect for beach and fishing community transportation needs.",
    services: [
      "Electric Vehicle Sales",
      "Marine Equipment",
      "Solar Charging Solutions",
      "Coastal Vehicle Service",
      "Emergency Repairs",
      "Community Programs",
    ],
    images: [
      "/images/cheerala-store-1.jpg",
      "/images/cheerala-store-2.jpg",
      "/images/cheerala-store-3.jpg",
    ],
  },
  "narsarao-peta": {
    id: "narsarao-peta",
    title: "Narsarao peta",
    subtitle: "Srinivasa Store",
    address: "Main Bazaar, Narsarao Peta, Andhra Pradesh, India - 534275",
    phone: "+91 9876543214",
    email: "narsaraopeta@srinivasastore.com",
    hours: "Mon-Sat: 9:30 AM - 7:30 PM, Sun: 10:30 AM - 5:30 PM",
    manager: "Narayana Swamy",
    description:
      "Our newest branch in Narsarao Peta brings cutting-edge electric vehicle technology to the local community with personalized service and support.",
    services: [
      "Electric Vehicle Showcase",
      "Test Drive Center",
      "Technical Training",
      "Maintenance Packages",
      "Rural Delivery Service",
      "Government Subsidy Assistance",
    ],
    images: [
      "/images/narsaraopeta-store-1.jpg",
      "/images/narsaraopeta-store-2.jpg",
      "/images/narsaraopeta-store-3.jpg",
    ],
  },
};

const StoreDetails = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const store = storeData[storeId];

  if (!store) {
    return (
      <div className="store-not-found">
        <h2>Store not found</h2>
        <button onClick={() => navigate("/stores")} className="back-btn">
          Back to Stores
        </button>
      </div>
    );
  }

  return (
    <div className="store-details">
      {/* Header */}
      <div className="store-header">
        <button onClick={() => navigate("/")} className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Stores
        </button>
        <div className="store-title-section">
          <h1 className="store-subtitle">{store.title}</h1>
          <h2 className="store-main-title">{store.subtitle}</h2>
        </div>
      </div>

      <div className="store-content">
        {/* Image Gallery - 3 images in a row */}
        <div className="image-gallery-row">
          {store.images.map((image, index) => (
            <div key={index} className="gallery-image-container">
              <img
                src={image2}
                alt={`${store.title} store view ${index + 1}`}
                className="gallery-image"
                onError={(e) => {
                  e.target.src = "/images/placeholder-store.jpg";
                }}
              />
            </div>
          ))}
        </div>

        {/* Store Information - Full width below images */}
        <div className="store-info-full">
          <div className="info-section">
            <h3>About This Store</h3>
            <p className="store-description">{store.description}</p>
          </div>

          <div className="info-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>{store.address}</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>{store.phone}</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>{store.email}</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>{store.hours}</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Store Manager: {store.manager}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Our Services</h3>
            <div className="services-grid">
              {store.services.map((service, index) => (
                <div key={index} className="service-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="primary-btn">Contact Store</button>
            <button className="secondary-btn">Get Directions</button>
            <button className="secondary-btn">Schedule Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
