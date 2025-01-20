import React from "react";
import about from '../../assets/img3.png'

const About = () => {
  return (
    <div className="px-5 lg:px-0 py-8 w-[90%] mx-auto" id="aboutMe">
        <h1 className="text-4xl lg:text-5xl font-bold  text-gray-900 leading-tight text-center mb-6">About the Building</h1>
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
          Modern Residential Complex with 15 Premium Apartments
          </h2>
          <p className="text-gray-300 mb-6">
           
          Welcome to your ideal home in our exclusive 15-apartment residential complex! Designed with modern architecture and premium amenities, this building offers a perfect blend of comfort, convenience, and elegance. Each apartment is thoughtfully planned, featuring spacious layouts, abundant natural light, and high-quality finishes. With a mix of 2-bedroom, 3-bedroom, and duplex units, there's a perfect option for every lifestyle.
            <br />
            The building boasts top-notch facilities, including a secure entry system, 24/7 surveillance, high-speed elevators, and a dedicated parking area. Residents can also enjoy a lush rooftop garden and a community hall for social gatherings. Strategically located in a prime neighborhood, it provides easy access to schools, shopping malls, hospitals, and public transportation.
            <br />
            Experience luxury living at an affordable price in this well-maintained and family-friendly environment. Make this building your next home and elevate your living standard.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
          <img
            src={about}
            alt="Running"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
