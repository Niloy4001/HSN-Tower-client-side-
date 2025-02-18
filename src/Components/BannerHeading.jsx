import React from "react";
import { Link } from "react-router-dom";

export default function BannerHeading() {
  return (
    <div className="absolute top-[10%] right-[5%]  left-[5%] md:top-1/2 md:left-1/2 z-20  md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-center text-white px-6">
    {/* // <div className="absolute top-[0%] left-[0%]  text-center text-white px-6"> */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold text-white">
         Find Your Perfect Apartment at HSN Tower
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
         Explore modern living with top-notch amenities. <br />
         Apply for membership and enjoy a hassle-free rental experience.
      </p>
      <Link to={"/apartment"} className=" bg-[#F8B400] text-[#1A3D7C] btn mt-5 border-none rounded-lg text-lg font-semibold hover:bg-[#e6a100] transition duration-300">
        Choose Apartment
      </Link>
    </div>
  );
}
