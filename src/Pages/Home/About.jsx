import React from "react";
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className="bg-gray-900 px-5 lg:px-0" id="aboutMe">
        <h1 className="text-4xl lg:text-5xl font-bold  text-white leading-tight text-center mb-6">About The Building</h1>
      <div className="bg-gray-800 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
           Hlw everyone!
          </h2>
          <p className="text-gray-300 mb-6">
           
            I am a simple individual who believes in speaking only when necessary. I am deeply committed to completing my tasks with sincerity and dedication, often willing to make significant sacrifices to achieve my goals.
            <br />
            While I don't have many hobbies, I enjoy listening to audiobooks on YouTube, running in the rain, and practicing calisthenics when I feel energetic. I may not have a large circle of friends, but the ones I do have mean the world to me, and I am willing to go to great lengths (within halal boundaries) to support them.
            <br />
            That's all about me.
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
