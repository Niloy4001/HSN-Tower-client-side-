import React from "react";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto py-7 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex justify-center items-center h-full">
        <div>
          <h1 className="text-2xl font-bold mb-6">Any Inquary ? Reach Us</h1>

          <div className="mb-6">
            <p className="text-gray-700 flex items-center gap-2"><span><MdEmail></MdEmail></span><span>huzaifasikderniloy58bd@gmail.com</span></p>
            <p className="text-gray-700 flex items-center gap-2"><span><BiPhone></BiPhone></span>+8801535131458<span></span></p>
            <p className="text-gray-700 flex items-center gap-2">
              <span><BiHomeAlt></BiHomeAlt></span>Baitul Mokaddas Mosque Road , Demra, Dhaka-1306<span></span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md  ">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                First Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email (privacy policy)*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="4"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
