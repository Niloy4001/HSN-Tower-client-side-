import React from "react";
// import Swiper from 'swiper'
// import { SwiperSlide } from 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
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
      image:
        "https://www.shutterstock.com/image-photo/head-shot-handsome-millennial-30s-600nw-1854710668.jpg",
    },
    {
      name: "Sara Ahmed",
      time: "09:45 PM - 15 Jan 25",
      review:
        "I love the peaceful environment and the friendly neighbors. It's the perfect place to call home.",
      image:
        "https://media.istockphoto.com/id/1388649939/photo/cheerful-caucasian-young-man-student-freelancer-using-digital-tablet-for-social-media-e.jpg?s=612x612&w=0&k=20&c=CJNskPIPv53TRKnOpiMBvFSLmDA-iELJ7vpbVASBdVo=",
    },
    {
      name: "Tanvir Hasan",
      time: "06:20 AM - 28 Jan 25",
      review:
        "HSN Tower offers excellent security and a great community vibe. Highly recommend it!",
      image:
        "https://media.gettyimages.com/id/1180926773/photo/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.jpg?s=612x612&w=gi&k=20&c=BlCz_Y26FpXviP-1E7P9uISFsbO-W9ducNo0gJ8r9jM=",
    },
    {
      name: "Maya Sultana",
      time: "12:10 PM - 05 Feb 25",
      review:
        "The building is well-maintained, and the facilities are very convenient. Love it here!",
      image:
        "https://thumbs.dreamstime.com/b/asian-muslim-woman-wearing-hijab-smiling-friendly-arms-crossed-against-gray-background-female-businesswoman-arab-indonesian-161318460.jpg",
    },
    {
      name: "Jahidul Islam",
      time: "03:55 PM - 10 Feb 25",
      review:
        "Great location with easy access to everything. The apartments are spacious and modern.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpupLXNel-pwt89_-lrqWL7vDN0RRsNWbMGQ&s",
    },
    {
      name: "Anika Chowdhury",
      time: "07:25 AM - 12 Feb 25",
      review:
        "HSN Tower has been a fantastic place to live. The community is vibrant and welcoming.",
      image:
        "https://images.unsplash.com/photo-1639616239669-104e51ca79bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hyaXN0aWFuJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Farhan Ali",
      time: "11:40 AM - 14 Feb 25",
      review:
        "I appreciate the clean environment and the helpful staff. Living here is a pleasure.",
      image:
        "https://media.istockphoto.com/id/1388649939/photo/cheerful-caucasian-young-man-student-freelancer-using-digital-tablet-for-social-media-e.jpg?s=612x612&w=0&k=20&c=CJNskPIPv53TRKnOpiMBvFSLmDA-iELJ7vpbVASBdVo=",
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-6">
        What Our <span className="text-[#F8B400]">Residents Say</span>
      </h2>
      <p className="text-[#2C3E50] text-lg text-center mb-10">
        Hear from our satisfied residents about their experience at HSN Tower.
      </p>

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
            <SwiperSlide className="mb-10" key={index}>
              <div className=" bg-white shadow-lg rounded-lg p-4 mb-4 relative">
                <div className="flex items-center h-full mb-6 gap-6">
                  <img
                    src={review.image}
                    alt="User"
                    className="w-12 h-12 rounded-full "
                  />
                  <div className="">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-inner ">
                  <p className="text-gray-700 h-[72px] overflow-hidden">
                    {review.review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* small screen review */}
      <div className="md:hidden">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide className="mb-10 slide w-full" key={index}>
              <div className="w-full h-52 p-4 bg-white shadow-lg rounded-lg  relative">
                <div className="grid grid-cols-5 mb-5">
                  <img
                    src={review.image}
                    alt="User"
                    className="col-span-1 rounded-full mr-4"
                  />
                  <div className=" col-span-4">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                  <p className="text-gray-700 h-[72px] overflow-hidden">
                    {review.review}
                  </p>
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
