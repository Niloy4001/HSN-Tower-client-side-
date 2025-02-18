import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Common/Spinner";
import toast from "react-hot-toast";

const ManageCoupon = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    data: coupons,
    error,
    refetch,
  } = useQuery({
    queryKey: ["coupon", "public"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/couponsForAdmin");
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const couponCode = e.target.couponCode.value;
    const discountPercentage = e.target.discountPercentage.value;
    const couponDescription = e.target.couponDescription.value;

    const couponInfo = { couponCode, discountPercentage, couponDescription };

    try {
      const { data } = await axiosSecure.post("/coupons", couponInfo);
      if (data.insertedId) {
        toast.custom(
          <p className="font-bold text-[#28A745]">Coupon added successfully!</p>
        );
        refetch();
        document.getElementById("my_modal_5").close();
      }
    } catch (error) {
      toast.custom(
        <p className="font-bold text-[#DC3545]">Error: {error.message}</p>
      );
    }
  };

  // Handle availability toggle
  const handleAvailability = async (id) => {
    try {
      const { data } = await axiosSecure.patch(`/changeAvailability/${id}`);
      if (data?.modifiedCount === 1) {
        toast.custom(
          <p className="font-bold text-[#F8B400]">Availability updated!</p>
        );
        refetch();
      }
    } catch (error) {
      toast.custom(
        <p className="font-bold text-[#DC3545]">Error: {error.message}</p>
      );
    }
  };

  return (
    <div className="bg-[#F4F6F9] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8">Manage Coupons</h2>

      {/* Add Coupon Button */}
      <div className="mb-6">
        <button
          className="btn bg-[#1A3D7C] text-white hover:bg-[#0A1E3D]"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add Coupon
        </button>
      </div>

      {/* Coupons Table */}
      {coupons.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-[#1A3D7C] text-white">
              <tr>
                <th className="py-4 px-6 text-left">Discount</th>
                <th className="py-4 px-6 text-left">Code</th>
                <th className="py-4 px-6 text-left">Availability</th>
                <th className="py-4 px-6 text-left">Description</th>
                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon._id} className="border-b border-[#E2E8F0]">
                  <td className="py-4 px-6 text-[#2C3E50]">
                    {coupon?.discountPercentage}% OFF
                  </td>
                  <td className="py-4 px-6 text-[#2C3E50]">
                    {coupon?.couponCode}
                  </td>
                  <td className="py-4 px-6">
                    {coupon?.availability ? (
                      <span className="text-[#28A745]">Available</span>
                    ) : (
                      <span className="text-[#DC3545]">Unavailable</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-[#2C3E50]">
                    {coupon?.couponDescription}
                  </td>
                  <td className="py-4 px-6">
                    <button
                      className="btn btn-sm bg-[#F8B400] text-white hover:bg-[#E0A800]"
                      onClick={() => handleAvailability(coupon._id)}
                    >
                      Change Availability
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-[#6C757D] text-lg">No coupons found.</p>
      )}

      {/* Add Coupon Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-2xl text-[#1A3D7C] mb-6">
            Add New Coupon
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Coupon Code */}
            <div className="mb-6">
              <label className="block text-[#2C3E50] font-semibold mb-2">
                Coupon Code
              </label>
              <input
                required
                type="text"
                name="couponCode"
                className="w-full p-3 border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                placeholder="Enter coupon code"
              />
            </div>

            {/* Discount Percentage */}
            <div className="mb-6">
              <label className="block text-[#2C3E50] font-semibold mb-2">
                Discount Percentage
              </label>
              <input
                required
                type="number"
                name="discountPercentage"
                className="w-full p-3 border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                placeholder="Enter discount percentage"
              />
            </div>

            {/* Coupon Description */}
            <div className="mb-6">
              <label className="block text-[#2C3E50] font-semibold mb-2">
                Coupon Description
              </label>
              <textarea
                required
                name="couponDescription"
                className="w-full p-3 border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3D7C]"
                placeholder="Enter coupon description"
                rows="3"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="btn bg-[#6C757D] text-white hover:bg-[#5A6268]"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-[#1A3D7C] text-white hover:bg-[#0A1E3D]"
              >
                Add Coupon
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageCoupon;