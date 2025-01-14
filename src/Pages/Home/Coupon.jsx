import React from "react";

const Coupon = () => {
  return (
    <div>
        <h1 className="text-4xl lg:text-5xl font-bold  text-black leading-tight text-center mb-6">Collect Coupon</h1>
      <div className=" justify-center items-center bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* card 1 */}
        <div className="flex bg-pink-300 text-black rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
            <h1 className="text-3xl font-bold">20% OFF</h1>
            <p className="mt-2 text-sm">on your next purchase</p>
            <p className="mt-4 text-sm">use by January 2024</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center p-6 w-1/2">
            <h2 className="text-xl font-semibold">Couple 20</h2>
            <p className="mt-2 text-sm">Coupon Code</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex bg-pink-300 text-black rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
            <h1 className="text-3xl font-bold">20% OFF</h1>
            <p className="mt-2 text-sm">on your next purchase</p>
            <p className="mt-4 text-sm">use by January 2024</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center p-6 w-1/2">
            <h2 className="text-xl font-semibold">Couple 20</h2>
            <p className="mt-2 text-sm">Coupon Code</p>
          </div>
        </div>
        {/* card 1 */}
        <div className="flex bg-pink-300 text-black rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
            <h1 className="text-3xl font-bold">20% OFF</h1>
            <p className="mt-2 text-sm">on your next purchase</p>
            <p className="mt-4 text-sm">use by January 2024</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center p-6 w-1/2">
            <h2 className="text-xl font-semibold">Couple 20</h2>
            <p className="mt-2 text-sm">Coupon Code</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex bg-pink-300 text-black rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
            <h1 className="text-3xl font-bold">20% OFF</h1>
            <p className="mt-2 text-sm">on your next purchase</p>
            <p className="mt-4 text-sm">use by January 2024</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center p-6 w-1/2">
            <h2 className="text-xl font-semibold">Couple 20</h2>
            <p className="mt-2 text-sm">Coupon Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
