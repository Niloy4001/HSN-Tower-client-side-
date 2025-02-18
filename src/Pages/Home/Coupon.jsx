import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const Coupon = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    isError,
    data: coupons,
    error,
    refetch,
  } = useQuery({
    queryKey: ["coupon", "public"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/coupons`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-[90%] mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-6">
        Unlock <span className="text-[#F8B400]">Exclusive Offers</span>
      </h2>
      <p className="text-[#2C3E50] text-lg text-center mb-10">
        Grab special discounts and benefits by collecting your coupon today!
      </p>

      {coupons.length > 0 && (
        <div className=" justify-center items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon._id}
              className=" flex bg-gradient-to-b bg-[#FFFFFF] text-[#6C757D] rounded-lg shadow-lg h-[140px]"
            >
              {/* Left Section */}
              <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
                <h1 className="text-3xl font-bold text-[#2C3E50]">
                  {coupon?.discountPercentage}% OFF
                </h1>
                <p className="mt-4 text-sm overflow-y-auto">
                  {coupon?.couponDescription}
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col justify-center items-center p-6 w-1/2 relative">
                {coupon?.availability ? (
                  <div className="badge badge-ghost text-green-600 absolute top-[8px] right-[6px]">
                    Available
                  </div>
                ) : (
                  <div className="badge badge-ghost text-red-500 absolute top-[8px] right-[6px]">
                    Unavailable
                  </div>
                )}
                <CopyToClipboard
                  text={coupon?.couponCode}
                  className="text-xl font-semibold text-[#F8B400] tooltip"
                  data-tip="click to copy"
                  onCopy={() => toast.success("copied")}
                >
                  <button>{coupon?.couponCode}</button>
                </CopyToClipboard>
                {/* <h2 className="text-xl font-semibold">{coupon?.couponCode}</h2> */}
                <p className="mt-2 text-sm">Coupon Code</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coupon;
