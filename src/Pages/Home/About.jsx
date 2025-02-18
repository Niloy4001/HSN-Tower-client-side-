import React from "react";
import about from '../../assets/img3.png'

const About = () => {
  return (
    <div className="px-5 lg:px-0 py-8 w-[90%] mx-auto" id="aboutMe">
        <h1 className="text-4xl lg:text-5xl font-bold  text-[#2C3E50] leading-tight text-center mb-6">About the Building</h1>
      <div className="grid grid-cols-1 items-center gap-5 md:gap-6 lg:gap-9  md:grid-cols-4 lg:grid-cols-12 bg-white text-white p-8 rounded-lg  mx-auto">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-2 lg:col-span-7" >
          <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">
          Modern Residential Complex with 15 Premium Apartments
          </h2>
          <p className="text-[#6C757D] mb-6">
           
          Welcome to your ideal home in our exclusive 15-apartment residential complex! Designed with modern architecture and premium amenities, this building offers a perfect blend of comfort, convenience, and elegance. Each apartment is thoughtfully planned, featuring spacious layouts, abundant natural light, and high-quality finishes. With a mix of 2-bedroom, 3-bedroom, and duplex units, there's a perfect option for every lifestyle.
            <br />
            The building boasts top-notch facilities, including a secure entry system, 24/7 surveillance, high-speed elevators, and a dedicated parking area. Residents can also enjoy a lush rooftop garden and a community hall for social gatherings. Strategically located in a prime neighborhood, it provides easy access to schools, shopping malls, hospitals, and public transportation.
            <br />
            Experience luxury living at an affordable price in this well-maintained and family-friendly environment. Make this building your next home and elevate your living standard.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="col-span-1 md:col-span-2 lg:col-span-5">
          <img
            src={about}
            alt="Running"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
