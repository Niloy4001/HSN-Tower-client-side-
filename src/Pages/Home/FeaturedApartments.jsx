import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";
import { Link } from "react-router-dom";

const FeaturedApartments = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    isError,
    data: apartments,
    error,
    refetch,
  } = useQuery({
    queryKey: ["FeaturedApartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/apartments`);
      return data;
    },
  });

  console.log(apartments);
  if (isPending) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-6">
        Explore <span className="text-[#F8B400]">Featured Apartments</span>
      </h2>
      <p className="text-[#2C3E50] text-lg text-center mb-10">
        Browse our top-rated apartments with modern amenities and prime
        locations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {apartments.data.map((apartment) => (
          <div
            key={apartment._id}
            className="w-full mx-auto bg-[#FFFFFF] shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={apartment.apartmentImage}
              alt="Apartment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Apartment</h2>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Floor No:</span>{" "}
                {apartment.floorNo}
              </p>
              <p className="mt-1 text-gray-600">
                <span className="font-semibold">Block Name:</span>{" "}
                {apartment.blockName}
              </p>
              <p className="mt-1 text-gray-600">
                <span className="font-semibold">Apartment No:</span>{" "}
                {apartment.apartmentNo}
              </p>
              <p className="mt-1 text-gray-600">
                <span className="font-semibold">Rent:</span> ৳{apartment.rent}
              </p>
              <Link
                to={"/apartment"}
                className=" w-full btn btn-sm mt-4 bg-[#F8B400] text-[#1A3D7C] hover:bg-[#F8B400] hover:text-[#6C757D]  font-semibold  rounded"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to={"/apartment"}
          className="btn  bg-[#F8B400] text-[#1A3D7C] hover:bg-[#F8B400] hover:text-[#6C757D]  rounded-md  "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedApartments;
