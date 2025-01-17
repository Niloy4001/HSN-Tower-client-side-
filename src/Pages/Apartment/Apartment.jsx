import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner from "../../Components/Common/Spinner";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Apartment = () => {
  const {user} = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState();
  // console.log(filter);
  const navigate = useNavigate();

  // console.log(currentPage);

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
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
        `/apartments?page=${currentPage}&min=${filter?.min}&max=${filter?.max}`
      );
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [currentPage, filter]);

  if (isPending) {
    return <Spinner></Spinner>;
  }
  
  

  const arr = [...Array(apartments.totalPages).keys()];

  // console.log(arr);

  // handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // handle next and previous page changes
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

  // handle filter
  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const min = form.min.value;
    const max = form.max.value;

    setFilter({ min: min, max: max });
    form.reset();
  };


  // handle Agreement
  const handleAgreement =async (apartment) =>{
    if (!user) {
      return navigate('/login')
    }

    
    apartment.UserName = user?.displayName
    apartment.UserEmail = user?.email
    apartment.status = "Pending"
    console.log(apartment);

    const {data} = await axiosSecure.post('/agreement',apartment)
    if (data.acknowledged) {
      toast.success(" Your agreement request submitted")
    }
    if (data.message) {
      toast.error(" You can't multiple agreement")
    }


    

    
  }
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold  text-white leading-tight text-center mb-6">
        Apartment
      </h1>
      {/* filter */}
      <div className="flex justify-center py-6">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <form onSubmit={(e) => handleFilter(e)}>
              <li>
                <input
                  name="min"
                  type="number"
                  placeholder="Min Price"
                  className="input input-bordered w-full max-w-xs"
                />
              </li>
              <li>
                <input
                  name="max"
                  type="number"
                  placeholder="Max Price"
                  className="input input-bordered w-full max-w-xs"
                />
              </li>
              <li>
                <button className="btn">Filter</button>
              </li>
            </form>
          </ul>
        </div>
      </div>
      {apartments.data.length > 0 && (
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
                <button
                onClick={()=>handleAgreement(apartment)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  View Agreement
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {apartments.data.length < 1 && (
        <div className="flex min-h-screen justify-center items-center">
          <div>
            <button className="btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <p className="font-bold text-xl text-center">No Data Found</p>
          </div>
        </div>
      )}
      {/* pagination button */}
      <div className="flex justify-center flex-wrap py-5">
        <div>
          <button
            disabled={currentPage === 1}
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
            disabled={currentPage === apartments.totalPages}
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
