import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";

const AdminProfile = () => {
  const {user  } = useContext(AuthContext)
const axiosSecure = useAxiosSecure()
  const {
    isPending,
    isError,
    data: info,
    error,
    refetch,
  } = useQuery({
    queryKey: ["adminProfile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/adminProfile`);
      return data;
    },
  });

  console.log(info);
  

  if (isPending) {
    return <Spinner></Spinner>;
  }





  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        {/* Admin Profile Section */}
        <div className="flex md:flex-row flex-col items-center mb-8">
          <img
          referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt="Admin"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold text-gray-800">{user?.displayName}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-700">Total Apartments</h2>
            <p className="text-3xl font-bold text-blue-900">{info?.totalApartments } </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-green-700">
              Available Apartments
            </h2>
            <p className="text-3xl font-bold text-green-900">{info?.available}%</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-red-700">
              Unavailable
            </h2>
            <p className="text-3xl font-bold text-red-900">{info?.unavailable}%</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-purple-700">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-purple-900">{info?.totalUsers}</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-yellow-700">
              Total Members
            </h2>
            <p className="text-3xl font-bold text-yellow-900">{info?.totalMembers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
