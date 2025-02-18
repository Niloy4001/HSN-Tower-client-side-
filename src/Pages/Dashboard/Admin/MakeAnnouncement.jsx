import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const announcement = { title, description };

    try {
      const { data } = await axiosSecure.post("/addAnnouncement", announcement);
      if (data.acknowledged) {
        toast.custom(
          <p className="font-bold text-[#28A745]">Announcement added successfully!</p>
        );
        e.target.reset();
      }
    } catch (error) {
      toast.custom(
        <p className="font-bold text-[#DC3545]">Error: {error.message}</p>
      );
    }
  };

  return (
    <div className="bg-[#F4F6F9] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8">Make Announcement</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-[#2C3E50] font-semibold mb-2"
          >
            Title
          </label>
          <input
            required
            type="text"
            name="title"
            className="w-full p-3 border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
            placeholder="Enter announcement title"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-[#2C3E50] font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            required
            name="description"
            className="w-full p-3 border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
            placeholder="Enter announcement description"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#1A3D7C] text-white font-semibold py-3 rounded-lg hover:bg-[#0A1E3D] transition-all"
          >
            Add Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAnnouncement;