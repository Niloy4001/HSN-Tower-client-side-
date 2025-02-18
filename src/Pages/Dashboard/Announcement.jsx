import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Announcement = () => {
  const axiosSecure = useAxiosSecure();
  
  const {
    isPending,
    isError,
    data: announcements,
    error,
  } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/announcements");
      return data;
    },
  });

  if (isPending) return <Spinner />;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="bg-[#F4F6F9] min-h-screen p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-8 text-center">
        Latest Announcements
      </h1>

      <div className=" mx-auto space-y-4">
        {announcements.length === 0 && (
          <p className="text-[#6C757D] text-center text-lg">
            No announcements available
          </p>
        )}

        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="collapse collapse-arrow bg-white rounded-lg shadow-md"
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-[#1A3D7C] hover:bg-[#F8B400]/10">
              {announcement.title}
            </div>
            <div className="collapse-content">
              <p className="text-[#2C3E50]">{announcement.description}</p>
              {announcement.date && (
                <p className="mt-2 text-sm text-[#6C757D]">
                  Posted on: {new Date(announcement.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;