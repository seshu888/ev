import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./vehicle.css";

const VehicleCarousel = () => {
  const vehicleImages = [
    "/src/assets/tractor.jpeg",
    "/src/assets/tractor.jpeg",
    "/src/assets/tractor.jpeg",
    "/src/assets/tractor.jpeg",
    "/src/assets/tractor.jpeg",
  ];

  return (
    <div className="vehicle-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{
        //   320: { slidesPerView: 1 },
        //   640: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
      >
        {vehicleImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <img src={img} alt={`Vehicle ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VehicleCarousel;
