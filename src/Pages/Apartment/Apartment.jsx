import React from "react";

const Apartment = () => {
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold  text-white leading-tight text-center mb-6">
        Apartment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <img
            src="https://i.ibb.co.com/KFSm25S/common-Apartment.jpg"
            alt="Apartment"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">
              Apartment Details
            </h2>
            <p className="mt-2 text-gray-600">
              <span className="font-semibold">Floor No:</span> 2
            </p>
            <p className="mt-1 text-gray-600">
              <span className="font-semibold">Block Name:</span> A
            </p>
            <p className="mt-1 text-gray-600">
              <span className="font-semibold">Apartment No:</span> A-201
            </p>
            <p className="mt-1 text-gray-600">
              <span className="font-semibold">Rent:</span> ৳16,000
            </p>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
