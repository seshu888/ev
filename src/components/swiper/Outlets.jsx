import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import tractor from "../../assets/store4.jpeg";
import store2 from "../../assets/store2.jpeg";
import store3 from "../../assets/store3.jpeg";
import "./swiper.css";
import Title from "../title/Title";

const data = [
  {
    image: tractor,
    title: "Ongole",
    subtitle: "Srinivasa Store",
    info: "Explore the latest electric vehicles",
    id: "ongole",
  },
  {
    image: store2,
    title: "Markapuram",
    subtitle: "Venkateswara Store",
    info: "Explore the latest electric vehicles",
    id: "markapuram",
  },
  {
    image: store3,
    title: "Tenali",
    subtitle: "Venkateswara Store",
    info: "Explore the latest electric vehicles",
    id: "tenali",
  },
  {
    image: store2,
    title: "Cheerala",
    subtitle: "Srinivasa Store",
    info: "Explore the latest electric vehicles",
    id: "cheerala",
  },
  {
    image: store3,
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: true,
          touchThreshold: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: true,
          touchThreshold: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: true,
          touchThreshold: 3,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          swipeToSlide: true,
          touchThreshold: 3,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  const handleCardClick = (store) => {
    // Navigate to store details page
    navigate(`/store/${store.id}`);
  };

  return (
    <div className="swiper-section">
      <div className="slider-container">
        <Title subtitle="Our Stores" title="Visit Our Store Locations" />
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="card-wrapper">
              <div className="card" onClick={() => handleCardClick(item)}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
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
    </div>
  );
}

export default Outlets;
