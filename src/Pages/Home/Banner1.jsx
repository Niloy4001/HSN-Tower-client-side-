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

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Number of slides visible at a time
      >
        <SwiperSlide>
          <div>
            <img
              src={slider1}
              alt=""
              className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={slider2}
              alt=""
              className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={slider3}
              alt=""
              className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            />
          </div>
        </SwiperSlide>
       
      
      </Swiper>
    </div>
  );
};

export default Slider;
