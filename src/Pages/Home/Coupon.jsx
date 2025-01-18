import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";

const Coupon = () => {


  const axiosPublic = useAxiosPublic();
    const {
      isPending,
      isError,
      data: coupons,
      error,
      refetch,
    } = useQuery({
      queryKey: ["coupon","public"],
      queryFn: async () => {
        const { data } = await axiosPublic.get(
          `/coupons`
        );
        return data;
      },
    });

    if (isPending) {
        return <Spinner></Spinner>
    }

  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold  text-black leading-tight text-center mb-6">
        Collect Coupon
      </h1>

      {
        coupons.length > 0 && <div className=" justify-center items-center bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {coupons.map(coupon=> <div key={coupon._id} className="flex bg-pink-300 text-black rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-6 w-1/2 border-r border-dashed border-gray-400">
            <h1 className="text-3xl font-bold">{coupon?.discountPercentage}% OFF</h1>
            <p className="mt-4 text-sm">{coupon?.couponDescription}</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center p-6 w-1/2">
            <h2 className="text-xl font-semibold">{coupon?.couponCode}</h2>
            <p className="mt-2 text-sm">Coupon Code</p>
          </div>
        </div>)}
      </div>
      }
    </div>
  );
};

export default Coupon;
