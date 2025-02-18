import React from "react";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1A3D7C] mb-6">
              Any Inquiry? <span className="text-[#F8B400]">Reach Us</span>
            </h2>

            <div className="space-y-4">
              <p className="text-[#2C3E50] flex items-center gap-3 text-lg">
                <MdEmail className="text-[#F8B400] text-xl md:text-2xl" />
                <span>niloysikder58bd@gmail.com</span>
              </p>
              <p className="text-[#2C3E50] flex items-center gap-3 text-lg">
                <BiPhone className="text-[#F8B400] text-xl md:text-2xl" />
                +8801535131458
              </p>
              <p className="text-[#2C3E50] flex items-center gap-3 text-lg">
                <BiHomeAlt className="text-[#F8B400] text-xl md:text-2xl" />
                Baitul Mokaddas Mosque Road, Demra, Dhaka-1306
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#F4F6F9] p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[#2C3E50] font-medium mb-2" htmlFor="first-name">
                  First Name*
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-[#2C3E50] font-medium mb-2" htmlFor="last-name">
                  Last Name*
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[#2C3E50] font-medium mb-2" htmlFor="email">
                Email (privacy policy)*
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#2C3E50] font-medium mb-2" htmlFor="message">
                Message*
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#1A3D7C] hover:bg-[#153B6E] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                type="submit"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
