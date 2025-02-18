import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Common/Spinner";
import moment from "moment";
import toast from "react-hot-toast";

const AgreementRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    isError,
    data: agreements,
    error,
    refetch,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agreements`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  const handleAccept = async (email) => {
    try {
      const { data } = await axiosSecure.get(`/changeStatus/${email}`);
      refetch();
      if (data.result.modifiedCount || data.updatedRole.modifiedCount) {
        toast.success("User Accepted to Member");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReject = async (email) => {
    try {
      await axiosSecure.delete(`/changeStatus/${email}`);
      toast.custom(
        <p className="text-orange-400 font-bold">User Rejected</p>
      );
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full mx-auto py-6">
      <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6 text-center">
        Agreement Requests
      </h2>
      <div className="space-y-6">
        {agreements.length > 0 ? (
          agreements.map((agreement) => (
            <div
              key={agreement._id}
              className="relative flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <div className="flex-grow space-y-3">
                <h2 className="text-xl font-semibold text-[#1A3D7C]">
                  {agreement.UserName}
                </h2>
                <p className="text-gray-600 font-medium">
                  Email: <span className="font-normal">{agreement.UserEmail}</span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
                  <p>
                    <span className="font-medium">Floor:</span> {agreement.floorNo}
                  </p>
                  <p>
                    <span className="font-medium">Block:</span> {agreement.blockName}
                  </p>
                  <p>
                    <span className="font-medium">Room:</span> {agreement.apartmentNo}
                  </p>
                  <p>
                    <span className="font-medium">Rent:</span> ${agreement.rent}
                  </p>
                  <p className="col-span-2">
                    <span className="font-medium">Request Date:</span> {moment(agreement.createdAt).format('LLL')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:ml-6">
                <button
                  onClick={() => handleAccept(agreement.UserEmail)}
                  className="bg-[#1A3D7C] hover:bg-[#0F2A57] text-white px-5 py-2 rounded-lg transition duration-300"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(agreement.UserEmail)}
                  className="bg-[#DC3545] hover:bg-red-700 text-white px-5 py-2 rounded-lg transition duration-300"
                >
                  Reject
                </button>
              </div>
              <span className="absolute top-3 right-3 bg-[#F8B400] text-white px-3 py-1 rounded-full text-xs font-semibold">
                {agreement.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No agreement requests found.</p>
        )}
      </div>
    </div>
  );
};

export default AgreementRequest;