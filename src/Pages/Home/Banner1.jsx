import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerHeading from "../../Components/BannerHeading";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Number of slides visible at a time
      >
        <SwiperSlide>
          <div className="relative">
            {/* Blurred Background shade */}
            <div className="w-full h-full absolute bg-black opacity-35 z-10"></div>
            {/* bgimage */}
            <img
              src={slider1}
              alt="Banner Image"
              className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover  brightness-75"
            />

            {/* Banner Content */}
            <BannerHeading />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
            {/* Blurred Background Image */}
            <img
              src={slider2}
              alt="Banner Image"
              className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover  brightness-75"
            />

            {/* Banner Content */}
            <BannerHeading />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
            {/* Blurred Background Image */}
            <img
              src={slider3}
              alt="Banner Image"
              className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover  brightness-75"
            />

            {/* Banner Content */}
            <BannerHeading />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
