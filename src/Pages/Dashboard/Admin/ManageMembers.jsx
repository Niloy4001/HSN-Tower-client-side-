import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Common/Spinner";
import toast from "react-hot-toast";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    data: members,
    error,
    refetch,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/manageMembers");
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

  const handleRemove = async (id, email) => {
    try {
      const { data } = await axiosSecure.patch(`/remove/${id}?email=${email}`);
      if (data.modifiedCount) {
        toast.custom(
          <p className="font-bold text-[#F8B400]">Member removed successfully</p>
        );
        refetch();
      }
    } catch (error) {
      toast.error("Failed to remove member");
    }
  };

  return (
    <div className="bg-[#F4F6F9] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8">Manage Members</h2>

      {members.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-[#1A3D7C] text-white">
              <tr>
                <th className="py-4 px-6 text-left">User Name</th>
                <th className="py-4 px-6 text-left">User Email</th>
                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {members.map((member) => (
                <tr key={member._id} className="border-b border-[#E2E8F0]">
                  <td className="py-4 px-6 text-[#2C3E50]">{member?.name}</td>
                  <td className="py-4 px-6 text-[#2C3E50]">{member?.email}</td>
                  <td className="py-4 px-6">
                    <button
                      className="btn bg-[#DC3545] text-white hover:bg-[#C82333] transition-all"
                      onClick={() => handleRemove(member?._id, member?.email)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-[#6C757D] text-lg">No members found.</p>
      )}
    </div>
  );
};

export default ManageMembers;