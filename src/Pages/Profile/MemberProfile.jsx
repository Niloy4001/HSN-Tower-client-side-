import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/Common/Spinner';
import moment from 'moment';

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    data: info,
    error,
  } = useQuery({
    queryKey: ['memberProfile', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/memeberProfile/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

  return (
    <div className="min-h-screen bg-[#F4F6F9] py-10 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-8 text-center">
        My Profile
      </h1>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header with Gradient */}
        <div
          className="bg-gradient-to-r from-[#1A3D7C] to-[#0A1E3D] p-6 text-center"
        >
          <img
            src={user?.photoURL}
            alt="User"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            referrerPolicy="no-referrer"
          />
          <h2 className="text-2xl font-semibold text-white mt-4">
            {user?.displayName}
          </h2>
          <p className="text-[#F8B400] text-lg">{user?.email}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Agreement Accept Date */}
            <div className="border-b pb-4">
              <p className="text-lg text-[#2C3E50]">
                <span className="font-semibold">Agreement Accept Date:</span>{" "}
                <span className="text-[#6C757D]">
                  {moment(info?.createdAt).format('LLL')}
                </span>
              </p>
            </div>

            {/* Rented Apartment Info */}
            <div>
              <p className="text-lg font-semibold text-[#2C3E50] mb-2">
                Rented Apartment Info:
              </p>
              <ul className="space-y-2 text-[#6C757D]">
                <li>Floor: {info?.floorNo}</li>
                <li>Block: {info?.blockName}</li>
                <li>Room No: {info?.apartmentNo}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button (Optional) */}
        <div className="p-6 bg-[#F4F6F9] text-center">
          {/* <button
            className="bg-[#1A3D7C] text-white px-6 py-2 rounded-lg hover:bg-[#0A1E3D] transition-all"
          >
            Update Profile
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;