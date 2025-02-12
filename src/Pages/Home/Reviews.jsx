import React from "react";
// import Swiper from 'swiper'
// import { SwiperSlide } from 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, EffectCards } from "swiper/modules";
import 'swiper/css/effect-cards';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      time: "08:30 AM - 01 Jan 25",
      review:
        "Living in HSN Tower has been amazing. The amenities are top-notch, and the management is very responsive.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Sara Ahmed",
      time: "09:45 PM - 15 Jan 25",
      review:
        "I love the peaceful environment and the friendly neighbors. It's the perfect place to call home.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Tanvir Hasan",
      time: "06:20 AM - 28 Jan 25",
      review:
        "HSN Tower offers excellent security and a great community vibe. Highly recommend it!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Maya Sultana",
      time: "12:10 PM - 05 Feb 25",
      review:
        "The building is well-maintained, and the facilities are very convenient. Love it here!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Jahidul Islam",
      time: "03:55 PM - 10 Feb 25",
      review:
        "Great location with easy access to everything. The apartments are spacious and modern.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Anika Chowdhury",
      time: "07:25 AM - 12 Feb 25",
      review:
        "HSN Tower has been a fantastic place to live. The community is vibrant and welcoming.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Farhan Ali",
      time: "11:40 AM - 14 Feb 25",
      review:
        "I appreciate the clean environment and the helpful staff. Living here is a pleasure.",
      image: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold  text-gray-900 leading-tight text-center mb-6">
        Reviews
      </h1>
      {/* large screen review */}
      <div className="hidden md:flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide className="mb-10">
              <div className="max-w-sm bg-white shadow-lg rounded-lg p-4 mb-4 relative">
                <div className="flex items-start">
                  <img
                    src={review.image}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="ml-16 mb-2">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* small screen review */}
      <div className="md:hidden">
         <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
            <SwiperSlide className="mb-10 px-4">
              <div className="max-w-sm bg-white shadow-lg rounded-lg p-4 mb-4 relative">
                <div className="flex items-start">
                  <img
                    src={review.image}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className=" mb-2">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
