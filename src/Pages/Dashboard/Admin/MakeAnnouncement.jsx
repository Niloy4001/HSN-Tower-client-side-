import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MakeAnnouncement = () => {
    const axiosSecure = useAxiosSecure()
    // handle submit
    const handleSubmit =async (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const announcement = {title, description}
        console.log(announcement);

        try {
            const {data} = await axiosSecure.post(`/addAnnouncement`,announcement)
            if (data.acknowledged) {
                toast.success('Announcement Added')
                e.target.reset()
            }
            // console.log(data);
             
        } catch (error) {
            toast.error(`${error.message}`)
            console.log(error);
            
        }
        
    }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Make Announcement</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* Title*/}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
          required
            type="text"
            name="title"
            className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            placeholder="Title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <input
          required
            type="text"
            name="description"
            className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            placeholder="Description"
          />
        </div>

        {/* Submit/Pay Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
          >
            Add
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
