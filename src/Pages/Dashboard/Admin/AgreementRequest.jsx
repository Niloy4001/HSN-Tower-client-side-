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
    return <Spinner></Spinner>;
  }
  console.log(agreements);



// handle accept
  const handleAccept = async(email)=>{
    try {
        const { data} =await axiosSecure.get(`/changeStatus/${email}`)
        console.log(data);
        refetch()
        if (data.result.modifiedCount || data.updatedRole.modifiedCount) {
            toast.success("User Accepted to Member")
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
  }

  // handle reject
  const handleReject =async (email)=>{
    try {
        const { data} =await axiosSecure.delete(`/changeStatus/${email}`)
        toast.custom(<p className="text-orange-400 font-bold">User Rejected</p>)
        console.log(data);
        refetch()
        
    } catch (error) {
        console.log(error.message);
        
    }
  }

  return (
    <div>
      AgreementRequest
      <div className="space-y-5">
        {agreements.length > 0 &&
          agreements.map((agreement) => (
            <div 
              key={agreement._id}
              className="relative flex items-center bg-white shadow-lg rounded-lg p-4 max-w-4xl mx-auto border border-gray-200"
            >
              <div className="flex flex-col ml-4 flex-grow space-y-2">
                <h2 className="text-lg font-semibold text-gray-700">
                  {agreement.UserName}
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  {agreement.UserEmail}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Floor:</span>{" "}
                    {agreement.floorNo}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Block:</span>{" "}
                    {agreement.blockName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Room:</span>{" "}
                    {agreement.apartmentNo}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Rent:</span> ${" "}
                    {agreement.rent}
                  </p>
                  <p className="absolute top-2 right-2 badge badge-primary text-sm text-white">
                    <span className="font-medium">Status:</span> {" "}
                    {agreement.status}
                  </p>
                  <p className="text-sm text-gray-600 col-span-2">
                    <span className="font-medium">Request Date:</span>{" "}
                    {moment(agreement.createdAt).format('LLL')}
                  </p>
                </div>
                <div className="flex space-x-4 mt-2">
                  <button onClick={()=>handleAccept(agreement.UserEmail)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Accept
                  </button>
                  <button onClick={()=>handleReject(agreement.UserEmail)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AgreementRequest;
