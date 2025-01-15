import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner from "../../Components/Common/Spinner";

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextDisable, setNextDisable] = useState(false);
  const [prevDisable, setPrevDisable] = useState(false);
  // console.log(currentPage);

  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    isError,
    data: apartments,
    error,
    refetch,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `http://localhost:4000/apartments?page=${currentPage}`
      );
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [currentPage]);

  if (isPending) {
    return <Spinner></Spinner>;
  }

  console.log(apartments.data);
  console.log(currentPage);

  const arr = [...Array(apartments.totalPages).keys()];

  // console.log(arr);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPrevBtn = (status) => {
    if (status === "next") {
      const pageNum = currentPage + 1;
      if (pageNum > apartments.totalPages) {
        return;
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
    if (status === "prev") {
      const pageNum = currentPage - 1;
      if (pageNum < 1) {
        return;
      } else {
        setCurrentPage(currentPage - 1);
      }
    }

    // console.log(status);
  };

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold  text-white leading-tight text-center mb-6">
        Apartment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {apartments.data.map((apartment) => (
          <div
            key={apartment._id}
            className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
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
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                View Agreement
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* pagination button */}
      <div className="flex justify-center flex-wrap py-5">
        <div>
          <button
            disabled={prevDisable}
            className="btn"
            onClick={() => handleNextPrevBtn("prev")}
          >
            Prev
          </button>
        </div>
        <div className="flex justify-center">
          {arr.map((idx) => (
            <button
              key={idx}
              onClick={(e) => handlePageChange(e.target.innerText)}
              className="btn"
            >
              {Number(idx) + 1}
            </button>
          ))}
        </div>
        <div>
          <button
            disabled={nextDisable}
            className="btn"
            onClick={() => handleNextPrevBtn("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
