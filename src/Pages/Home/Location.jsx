import React from "react";
import map from "../../assets/map.jpg";
import { Link } from "react-router-dom";
const Location = () => {
  return (
    <div className="py-7 px-5 lg:px-0">
      <h1 className="text-4xl lg:text-5xl font-bold  text-[#2C3E50] leading-tight text-center mb-6">
        Location
      </h1>
      <div className="bg-white  p-8 rounded-lg  w-[90%] mx-auto">
        {/*  Upper content */}
        <div className="w-full h-[300px] mb-7">
          <iframe
            title="HSN Tower Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233806.18797204312!2d90.4785587!3d23.703776200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1739883682969!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Lower Content */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4">
            Prime Location in the Heart of the City
          </h2>
          <p className="text-[#6C757D] mb-6">
            Our residential complex is situated in a highly sought-after area
            that perfectly balances urban convenience and serene living. Located
            in the heart of the city, it offers seamless access to all essential
            amenities. Top-rated schools, hospitals, and shopping centers are
            just a short drive away. Public transportation is easily accessible,
            ensuring hassle-free commutes.
            <br />
            The neighborhood is vibrant yet peaceful, with tree-lined streets
            and well-maintained surroundings. Enjoy nearby parks, cafes, and
            recreational spots for a balanced lifestyle. This prime location
            guarantees not just a home but an enhanced living experience that
            combines comfort and connectivity.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
