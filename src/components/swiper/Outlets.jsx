import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import tractor from "../../assets/ev-store.jpeg";
import "./swiper.css";
import Title from "../title/Title";

const data = [
  {
    image: "/images/1.jpg",
    title: "Ongole",
    subtitle: "Srinivasa Store",
    info: "Explore the latest electric vehicles",
    id: "ongole",
  },
  {
    image: "/images/2.jpg",
    title: "Markapuram",
    subtitle: "Venkateswara Store",
    info: "Explore the latest electric vehicles",
    id: "markapuram",
  },
  {
    image: "/images/3.jpg",
    title: "Tenali",
    subtitle: "Venkateswara Store",
    info: "Explore the latest electric vehicles",
    id: "tenali",
  },
  {
    image: "/images/4.jpg",
    title: "Cheerala",
    subtitle: "Srinivasa Store",
    info: "Explore the latest electric vehicles",
    id: "cheerala",
  },
  {
    image: "/images/5.jpg",
    title: "Narsarao peta",
    subtitle: "Srinivasa Store",
    info: "Explore the latest electric vehicles",
    id: "narsarao-peta",
  },
];

function Outlets() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardClick = (store) => {
    // Navigate to store details page
    navigate(`/store/${store.id}`);
  };

  return (
    <div className="slider-container">
      <Title subtitle="Our Stores" title="Visit Our Store Locations" />
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="card-wrapper">
            <div className="card" onClick={() => handleCardClick(item)}>
              <div className="card-image">
                <img src={tractor} alt={item.title} />
                <div className="card-overlay">
                  <div className="visit-btn">Visit Store</div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
                <p className="card-description">{item.info}</p>
                <div className="card-location">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Outlets;
