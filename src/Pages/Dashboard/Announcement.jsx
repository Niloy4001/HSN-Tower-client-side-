import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Announcement = () => {
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const {
    isPending,
    isError,
    data: announcements,
    error,
    refetch,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/announcements`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }
  console.log(announcements);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Announcements</h1>
      {announcements.map((announcement) => (
        <div
          key={announcement._id}
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {announcement.title}
          </div>
          <div className="collapse-content">
            <p>{announcement.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
