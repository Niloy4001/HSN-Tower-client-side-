import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner from "../../Components/Common/Spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import { BiFilter } from "react-icons/bi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Apartment = () => {
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState();
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { role } = useRole();

  const {
    isPending,
    isError,
    data: apartments,
    error,
    refetch,
  } = useQuery({
    queryKey: ["apartments", currentPage, filter],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/apartments?page=${currentPage}&min=${filter?.min}&max=${filter?.max}`
      );
      return data;
    },
  });

  if (isPending) return <Spinner />;
  if (isError)
    return <span className="text-red-500">Error: {error.message}</span>;

  const handlePageChange = (page) => setCurrentPage(page);
  const handleNextPrevBtn = (status) => {
    if (status === "next" && currentPage < apartments.totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (status === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const min = e.target.min.value;
    const max = e.target.max.value;
    setFilter({ min, max });
    e.target.reset();
  };

  const handleAgreement = async (apartment) => {
    if (!user) return navigate("/login");
    if (role === "Admin") return toast.error("Admin cannot request agreement");
    if (role === "Member")
      return toast.error("Member already has an apartment");

    const newAgreement = {
      ...apartment,
      UserName: user?.displayName,
      UserEmail: user?.email,
      status: "Pending",
    };

    const { data } = await axiosSecure.post("/agreement", newAgreement);
    data.acknowledged
      ? toast.success("Agreement request submitted!")
      : toast.error("Cannot submit multiple agreements");
  };

  return (
    <div className="w-[90%] mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-6">
        Explore <span className="text-[#F8B400]">All Apartments</span>
      </h2>
      <p className="text-[#2C3E50] text-lg text-center mb-10">
        Discover a wide range of apartments with modern amenities and prime
        locations.
      </p>

      {/* Filter Section */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <form className="flex gap-4" onSubmit={handleFilter}>
            <input
              name="min"
              type="number"
              placeholder="Min Price"
              className="input input-bordered w-32"
            />
            <input
              name="max"
              type="number"
              placeholder="Max Price"
              className="input input-bordered w-32"
            />
            <button className="btn bg-[#1A3D7C] text-white flex items-center">
              <BiFilter className="mr-2" /> Filter
            </button>
          </form>
        </div>
      </div>

      {/* Apartment Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.data.length > 0 ? (
          apartments.data.map((apartment) => (
            <div
              key={apartment._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={apartment.apartmentImage}
                alt="Apartment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {apartment.blockName}
                </h2>
                <p className="text-gray-600">Floor: {apartment.floorNo}</p>
                <p className="text-gray-600">
                  Apartment No: {apartment.apartmentNo}
                </p>
                <p className="text-gray-900 font-semibold">
                  Rent: ৳{apartment.rent}
                </p>
                <button
                  onClick={() => handleAgreement(apartment)}
                  className="mt-4 w-full bg-[#1A3D7C] text-white py-2 rounded-md"
                >
                  Request Agreement
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center">
            <p className="text-xl font-semibold text-gray-700">
              No apartments found.
            </p>
            <button
              className="mt-4 btn bg-[#1A3D7C] text-white"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {apartments.data.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1}
            className="btn bg-[#1A3D7C] text-white"
            onClick={() => handleNextPrevBtn("prev")}
          >
            <BsFillArrowLeftCircleFill /> Prev
          </button>
          <span className="text-lg font-semibold text-gray-800">
            Page {currentPage} of {apartments.totalPages}
          </span>
          <button
            disabled={currentPage === apartments.totalPages}
            className="btn bg-[#1A3D7C] text-white"
            onClick={() => handleNextPrevBtn("next")}
          >
            Next <BsFillArrowRightCircleFill />
          </button>
        </div>
      )}
    </div>
  );
};

export default Apartment;
