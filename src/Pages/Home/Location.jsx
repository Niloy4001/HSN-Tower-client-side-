import React from 'react'
import map from '../../assets/map.jpg'
import { Link } from 'react-router-dom'
const Location = () => {
  return (
    <div className="py-7 px-5 lg:px-0" >
            <h1 className="text-4xl lg:text-5xl font-bold  text-gray-900 leading-tight text-center mb-6">Location</h1>
          <div className="bg-gradient-to-b from-blue-500 to-blue-800 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
              Prime Location in the Heart of the City
              </h2>
              <p className="text-gray-300 mb-6">
               
              Our residential complex is situated in a highly sought-after area that perfectly balances urban convenience and serene living. Located in the heart of the city, it offers seamless access to all essential amenities. Top-rated schools, hospitals, and shopping centers are just a short drive away. Public transportation is easily accessible, ensuring hassle-free commutes.
                <br />
                The neighborhood is vibrant yet peaceful, with tree-lined streets and well-maintained surroundings. Enjoy nearby parks, cafes, and recreational spots for a balanced lifestyle. This prime location guarantees not just a home but an enhanced living experience that combines comfort and connectivity.
                <br />
            
              </p>
              
            </div>
    
            {/* Right Image */}
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
              <Link target='_blank' to={"https://maps.app.goo.gl/drNuAWSk6qi1uCPZ8?g_st=atm"}>
              <img
                src={map}
                alt="Running"
                className="rounded-lg"
              /></Link>
            </div>
          </div>
        </div>
  )
}

export default Location