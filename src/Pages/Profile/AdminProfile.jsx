import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    data: info,
  } = useQuery({
    queryKey: ["adminProfile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/adminProfile`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-12 px-4 md:px-8">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-8 border border-gray-200">
        {/* Admin Profile Section */}
        <div className="flex flex-col md:flex-row items-center mb-8 text-center md:text-left">
          <img
            referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt="Admin"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#F8B400] shadow-md"
          />
          <div className="mt-4 md:ml-6">
            <h1 className="text-3xl font-bold text-[#1A3D7C]">{user?.displayName}</h1>
            <p className="text-gray-600 text-lg">{user?.email}</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Apartments */}
          <div className="bg-[#1A3D7C] p-6 rounded-lg shadow-md text-white text-center">
            <h2 className="text-lg font-semibold">Total Apartments</h2>
            <p className="text-4xl font-bold">{info?.totalApartments}</p>
          </div>

          {/* Available Apartments */}
          <div className="bg-[#28A745] p-6 rounded-lg shadow-md text-white text-center">
            <h2 className="text-lg font-semibold">Available Apartments</h2>
            <p className="text-4xl font-bold">{info?.available}%</p>
          </div>

          {/* Unavailable Apartments */}
          <div className="bg-[#DC3545] p-6 rounded-lg shadow-md text-white text-center">
            <h2 className="text-lg font-semibold">Unavailable</h2>
            <p className="text-4xl font-bold">{info?.unavailable}%</p>
          </div>

          {/* Total Users */}
          <div className="bg-[#F8B400] p-6 rounded-lg shadow-md text-white text-center">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-4xl font-bold">{info?.totalUsers}</p>
          </div>

          {/* Total Members */}
          <div className="bg-[#6C757D] p-6 rounded-lg shadow-md text-white text-center">
            <h2 className="text-lg font-semibold">Total Members</h2>
            <p className="text-4xl font-bold">{info?.totalMembers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
